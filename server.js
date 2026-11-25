// Statisk nettsted (som `serve`, via serve-handler og serve.json) + ett API-endepunkt: POST /api/kontakt.
// Innsendinger fra kontaktskjemaene lagres som «henvendelse»-dokumenter i Sanity.
// Krever miljøvariabelen SANITY_WRITE_TOKEN (Railway → Variables). Uten den svarer endepunktet 503.
const http = require('http');
const crypto = require('crypto');
const handler = require('serve-handler');
const compression = require('compression')();
const config = require('./serve.json'); // serve-handler leser ikke serve.json selv (det gjorde `serve`-programmet)

const PORT = process.env.PORT || 3000;
const SANITY = { projectId: '79jm8nbd', dataset: 'production', apiVersion: '2024-01-01' };
const TOKEN = process.env.SANITY_WRITE_TOKEN;

const GRENSER = { navn: 200, virksomhet: 200, epost: 254, faggruppe: 80, melding: 5000, side: 200, type: 40 };
const MAKS_BODY = 20 * 1024;

// Enkel rate limit per IP: maks 5 innsendinger per 10 minutter (holdes i minnet)
const VINDU_MS = 10 * 60 * 1000;
const MAKS_PER_VINDU = 5;
const treff = new Map();
function forMange(ip) {
  const nå = Date.now();
  const liste = (treff.get(ip) || []).filter((t) => nå - t < VINDU_MS);
  liste.push(nå);
  treff.set(ip, liste);
  if (treff.size > 5000) for (const [k, v] of treff) if (!v.some((t) => nå - t < VINDU_MS)) treff.delete(k);
  return liste.length > MAKS_PER_VINDU;
}

function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
}

function lesBody(req) {
  return new Promise((resolve, reject) => {
    let størrelse = 0;
    const deler = [];
    req.on('data', (d) => {
      størrelse += d.length;
      if (størrelse > MAKS_BODY) { reject(new Error('for stor')); req.destroy(); return; }
      deler.push(d);
    });
    req.on('end', () => resolve(Buffer.concat(deler).toString('utf8')));
    req.on('error', reject);
  });
}

const streng = (v, maks) => (typeof v === 'string' ? v.trim().slice(0, maks) : '');

async function kontakt(req, res) {
  if (!TOKEN) return json(res, 503, { ok: false, feil: 'Skjemaet er ikke konfigurert ennå.' });

  // Bare innsendinger fra nettstedet selv (nettlesere sender alltid Origin på POST)
  const origin = req.headers.origin;
  if (origin) {
    let vert = '';
    try { vert = new URL(origin).host; } catch (e) { /* ugyldig */ }
    if (vert !== req.headers.host) return json(res, 403, { ok: false, feil: 'Ikke tillatt.' });
  }

  const ip = String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
  if (forMange(ip)) return json(res, 429, { ok: false, feil: 'For mange forsøk. Prøv igjen om litt, eller ring oss.' });

  let data;
  try { data = JSON.parse(await lesBody(req)); } catch (e) { return json(res, 400, { ok: false, feil: 'Ugyldig forespørsel.' }); }
  if (!data || typeof data !== 'object') return json(res, 400, { ok: false, feil: 'Ugyldig forespørsel.' });

  // Honeypot: roboter fyller ut det skjulte feltet. Svar «ok» uten å lagre.
  if (data.nettside) return json(res, 200, { ok: true });

  const d = {
    navn: streng(data.navn, GRENSER.navn),
    virksomhet: streng(data.virksomhet, GRENSER.virksomhet),
    epost: streng(data.epost, GRENSER.epost),
    faggruppe: streng(data.faggruppe, GRENSER.faggruppe),
    melding: streng(data.melding, GRENSER.melding),
    side: streng(data.side, GRENSER.side),
    type: streng(data.type, GRENSER.type),
  };
  if (!d.navn) return json(res, 400, { ok: false, feil: 'Fyll inn navn.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.epost)) return json(res, 400, { ok: false, feil: 'Fyll inn en gyldig e-postadresse.' });

  // Punktum i dokument-ID gjør dokumentet privat i Sanity: kan ikke leses uten innlogging, selv om datasettet er offentlig.
  // Navn og e-post fra besøkende skal bare være synlig for redaktørene i studioet.
  const doc = {
    _id: 'henvendelser.' + crypto.randomUUID(),
    _type: 'henvendelse',
    mottatt: new Date().toISOString(),
    status: 'ny',
    ...d,
  };

  try {
    const r = await fetch(
      `https://${SANITY.projectId}.api.sanity.io/v${SANITY.apiVersion}/data/mutate/${SANITY.dataset}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
        body: JSON.stringify({ mutations: [{ create: doc }] }),
      }
    );
    if (!r.ok) {
      console.error('Sanity avviste henvendelse', r.status, (await r.text()).slice(0, 300));
      return json(res, 502, { ok: false, feil: 'Kunne ikke sende meldingen. Prøv igjen, eller ring oss på 75 53 33 00.' });
    }
  } catch (e) {
    console.error('Sanity ikke tilgjengelig', e.message);
    return json(res, 502, { ok: false, feil: 'Kunne ikke sende meldingen. Prøv igjen, eller ring oss på 75 53 33 00.' });
  }

  console.log('Henvendelse lagret', doc._id);
  return json(res, 200, { ok: true });
}

http
  .createServer((req, res) => {
    const sti = (req.url || '').split('?')[0];
    if (sti === '/api/kontakt') {
      if (req.method === 'POST') return kontakt(req, res).catch((e) => { console.error(e); json(res, 500, { ok: false, feil: 'Noe gikk galt.' }); });
      res.setHeader('Allow', 'POST');
      return json(res, 405, { ok: false, feil: 'Metoden er ikke tillatt.' });
    }
    // Kildefiler som ikke skal ut på nettet
    if (/^\/(server\.js|node_modules|studio|preview-src|\.)/.test(sti) || /\/\./.test(sti)) {
      res.statusCode = 404;
      return res.end('Not found');
    }
    return compression(req, res, () => handler(req, res, config));
  })
  .listen(PORT, () => console.log('Extensor kjører på port ' + PORT));
