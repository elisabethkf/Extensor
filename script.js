// ── Data ────────────────────────────────────────────────────────────────────
const faggrupper = [
  {
    id: 'bedrift',
    label: 'Bedriftshelsetjenester',
    desc: 'HMS-arbeid, arbeidsevnevurdering og DIFA-tilpasset rapportering for tverrfaglige team.',
    page: 'bedriftshelsetjenester.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><rect x="4" y="12" width="24" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M10 12V9a2 2 0 012-2h8a2 2 0 012 2v3" stroke="currentColor" stroke-width="1.5"/><path d="M16 17v6M13 20h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
  },
  {
    id: 'rehab',
    label: 'Rehabilitering',
    desc: 'Tverrfaglig samhandling i felles journal. Målstyring og dokumentasjon for hele teamet.',
    page: 'rehabilitering.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><circle cx="16" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M8 20c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M6 28c2-3 5-5 10-5s8 2 10 5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-opacity=".4"/></svg>`
  },
  {
    id: 'rus',
    label: 'Rus og psykiatri',
    desc: 'Skjermet journal, tverrfaglig samhandling og trygg dokumentasjon for rus- og psykiatritjenester.',
    page: 'rus-og-psykiatri.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M16 27s-9-5.5-9-12a5 5 0 019-3 5 5 0 019 3c0 6.5-9 12-9 12z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M11 15h3l1.5-3 2 6 1.5-3h3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    id: 'barnevern',
    label: 'Omsorg og barnevern',
    desc: 'Trygg og sporbar journalføring med høy datasikkerhet for barne- og ungdomstjenester.',
    page: 'omsorg-og-barnevern.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M16 6c0 0-8 4-8 11a8 8 0 0016 0C24 10 16 6 16 6z" stroke="currentColor" stroke-width="1.5"/><path d="M12 16l2.5 2.5L20 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    id: 'sykehus',
    label: 'Private sykehus',
    desc: 'Skalerbar plattform for tverrfaglige helseinstitusjoner med avansert ressursstyring.',
    page: 'private-sykehus.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><rect x="4" y="8" width="24" height="20" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M12 8V5h8v3" stroke="currentColor" stroke-width="1.5"/><path d="M16 13v8M12 17h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
  },
  {
    id: 'leger',
    label: 'Leger',
    desc: 'Fullverdig EPJ for privatpraktiserende leger. Lab-integrasjon, e-resept og strukturert journalføring.',
    page: 'leger.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><circle cx="16" cy="8" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M16 12v2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><rect x="9" y="14" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M13 19h6M13 22h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`
  },
  {
    id: 'fysio',
    label: 'Fysio- og manuellterapeuter',
    desc: 'Journalmaler basert på SOAP-notat, automatisk HELFO-oppgjør og timebok med online booking.',
    page: 'fysio-og-manuellterapeuter.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M16 4c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" stroke="currentColor" stroke-width="1.5"/><path d="M8 28v-8c0-3 1.5-5 4-6h8c2.5 1 4 3 4 6v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M12 20l2 4 2-3 2 3 2-4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    id: 'psyk',
    label: 'Psykologer',
    desc: 'Sikkert og diskret system tilpasset terapeutiske prosesser. Enkel notattaking og fakturering.',
    page: 'psykologer.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M16 5c-5 0-9 3.6-9 8 0 3 1.6 5.5 4 7v4h10v-4c2.4-1.5 4-4 4-7 0-4.4-4-8-9-8z" stroke="currentColor" stroke-width="1.5"/><path d="M13 24h6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`
  },
  {
    id: 'kiro',
    label: 'Kiropraktorer',
    desc: 'Anatomiske kroppskart, diagnoseregistrering og behandlingsplaner tilpasset kiropraktorfaget.',
    page: 'kiropraktorer.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M16 4v24M12 8l4-4 4 4M10 14h12M10 19h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="27" r="1.5" fill="currentColor"/></svg>`
  },
  {
    id: 'andre',
    label: 'Andre behandlere',
    desc: 'Fleksibelt system som tilpasses din faggruppe og arbeidsform.',
    page: 'andre-behandlere.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><circle cx="16" cy="16" r="11" stroke="currentColor" stroke-width="1.5"/><path d="M16 11v10M11 16h10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
  }
];

// ── Nyheter ─────────────────────────────────────────────────────────────────
// Bilder hentet fra Extensors egen Webflow-CDN slik de er per dags dato.
// URL-er peker til de faktiske artiklene på extensor.no/blogg/.
const nyheter = [
  {
    id: 'ny-kunde-ostbytunet',
    title: 'Ny kunde i Extensor-familien!',
    date: '06.06.2025',
    category: 'kunder',
    categoryLabel: 'Kunder',
    excerpt: 'Vi ønsker Østbytunet hjertelig velkommen som ny kunde hos Extensor.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/6842d706e06228f8a6c74ab8_%C3%98stbytunet5.jpg',
    url: 'ny-kunde-i-extensor.html'
  },
  {
    id: 'besok-ant',
    title: 'Extensor på 20-års besøk hos ANT',
    date: '01.11.2024',
    category: 'besok',
    categoryLabel: 'Besøk',
    excerpt: 'Vi besøkte ANT i Levanger som del av vår 20-års tur i norsk helsesektor.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/6784c7e93655068eaa5c80c0_ANT5.jpg',
    url: 'extensor-pa-20-ars-besok-hos-ant.html'
  },
  {
    id: 'kurs-host-2024',
    title: 'Extensor kurs høsten 2024',
    date: '01.08.2024',
    category: 'produkt',
    categoryLabel: 'Produkt',
    excerpt: 'Nye webkurs er satt opp for høsten — meld deg på via kursplanen.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/63aab027b59544058e6aca3c_man-g7025e4270_1920.jpg',
    url: 'extensor-kurs-hosten-2024.html'
  },
  {
    id: 'besok-alesund',
    title: 'Extensor på 20-års besøk i Ålesund',
    date: '14.06.2024',
    category: 'besok',
    categoryLabel: 'Besøk',
    excerpt: 'Besøk hos Fysioterapi 0-100 i Ålesund — del av jubileumsturen.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/666c2bdf63828473c549265b_IMG_20240611_1500342.jpg',
    url: 'extensor-pa-20-ars-besok-i-alesund.html'
  },
  {
    id: 'kundeforum-rehab',
    title: 'Kundeforum Rehab',
    date: '18.01.2023',
    category: 'kunder',
    categoryLabel: 'Kunder',
    excerpt: 'Invitasjon til kundeforum i Oslo for rehabiliteringsvirksomheter.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/63f5c44482608114b0bd6b06_kundeforumbilde2.jpg',
    url: 'kundeforum-rehab.html'
  },
  {
    id: 'ledig-stilling',
    title: 'Ledig stilling i Extensor',
    date: '09.01.2023',
    category: 'karriere',
    categoryLabel: 'Karriere',
    excerpt: 'Vi søker teknisk konsulent til vårt team — interessert?',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/61ee4ebf0364edd3acfb286e_scott-graham-5fNmWej4tAA-unsplash.jpg',
    url: 'ledig-stilling-i-extensor.html'
  },
  {
    id: 'samarbeid-flow',
    title: 'Samarbeid med Flow Technologies',
    date: '08.11.2022',
    category: 'integrasjon',
    categoryLabel: 'Integrasjon',
    excerpt: 'Ny integrasjon mot Flowzone via samarbeid med Flow Technologies.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/634e9faf4e5dbf775b12ccb1_technology-g08822e627_1920.jpg',
    url: 'samarbeid-med-flow-technologies.html'
  },
  {
    id: 'nye-takster',
    title: 'Nye takster',
    date: '01.07.2021',
    category: 'produkt',
    categoryLabel: 'Produkt',
    excerpt: '1. juli er det nye takster for bl.a. fysioterapeuter, manuellterapeuter og leger.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/60dd61c7e3cea1773fdc2559_gold-2048295_19202.jpg',
    url: 'nye-takster.html'
  },
  {
    id: 'velkommen-nye-kunder',
    title: 'Velkommen til nye kunder!',
    date: '01.06.2021',
    category: 'kunder',
    categoryLabel: 'Kunder',
    excerpt: 'Extensor fortsetter veksten, og ønsker våre nye kunder velkommen.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/60b0f11addde8b90f7cd814d_high%20five.jpg',
    url: 'velkommen-til-nye-kunder.html'
  },
  {
    id: 'hurtigtest-covid',
    title: 'Hurtigtest av Covid-19',
    date: '07.01.2021',
    category: 'produkt',
    categoryLabel: 'Produkt',
    excerpt: 'Extensor har i samarbeid med Helsedirektoratet utviklet funksjonalitet for hurtigtest av Covid-19, samt innsending av prøvesvar direkte via Norsk Helsenett.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/6038b1cf4a6e02030c1659d7_corona-5401250_1920.jpg',
    url: 'hurtigest-av-covid-19.html'
  },
  {
    id: 'extensor-ny-versjon',
    title: 'Ny versjon av Extensor-systemet',
    date: '07.01.2021',
    category: 'produkt',
    categoryLabel: 'Produkt',
    excerpt: 'Ny versjon av Extensor-systemet. Extensor lanserer nå ny oppdatering; versjon 1.34.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/5e26f61346f90ce05844dad7_update.jpg',
    url: 'extensor-ny-versjon.html'
  },
  {
    id: 'sms-innkalling',
    title: 'SMS-innkalling',
    date: '23.01.2020',
    category: 'produkt',
    categoryLabel: 'Produkt',
    excerpt: 'Innkalling til timer via SMS er en svært vanlig måte å kommunisere med pasienter på.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/5e2960554f620b867c9d4599_sms.jpg',
    url: 'nye-takster-fra-1-juli-2019.html'
  },
  {
    id: 'e-resept',
    title: 'Vi tilbyr e-resept',
    date: '23.01.2020',
    category: 'integrasjon',
    categoryLabel: 'Integrasjon',
    excerpt: 'Extensor er nå godkjent leverandør for e-resept til alle våre kunder.',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/6038b78d2754ebb9b8996e87_about-3887433_1920.jpg',
    url: 'e-resept-ny-modul.html'
  }
];

function newsCardHTML(n, headingTag = 'h2') {
  const external = n.url && n.url.startsWith('http');
  const linkAttrs = external ? ' target="_blank" rel="noopener"' : '';
  return `
    <a href="${n.url || '#'}"${linkAttrs} class="news-card" data-cat="${n.category}">
      <div class="news-card-img">
        <img src="${n.image}" alt="" />
      </div>
      <div class="news-card-body">
        <div class="news-card-meta">
          <span class="news-card-tag news-tag-${n.category}">${n.categoryLabel}</span>
          <span class="news-card-date">${n.date}</span>
        </div>
        <${headingTag} class="news-card-title">${n.title}</${headingTag}>
        <p class="news-card-excerpt">${n.excerpt}</p>
        <span class="news-card-cta">Les mer <span aria-hidden="true">→</span></span>
      </div>
    </a>`;
}

function renderNyheter(filter = 'all') {
  const grid = document.querySelector('#news-grid');
  const empty = document.querySelector('#news-empty');
  if (!grid) return;

  const filtered = filter === 'all'
    ? nyheter
    : nyheter.filter((n) => n.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;

  grid.innerHTML = filtered.map((n) => newsCardHTML(n, 'h2')).join('');
}

function renderRelatertNyheter() {
  const grid = document.querySelector('#related-news-grid');
  if (!grid) return;
  const currentId = grid.dataset.current;
  const limit = parseInt(grid.dataset.limit, 10) || 3;

  const others = nyheter.filter((n) => n.id !== currentId).slice(0, limit);
  grid.innerHTML = others.map((n) => newsCardHTML(n, 'h3')).join('');
}

function initNyhetsfilter() {
  const filterContainer = document.querySelector('.news-filter');
  if (!filterContainer) return;

  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.news-filter-btn');
    if (!btn) return;
    filterContainer.querySelectorAll('.news-filter-btn').forEach((b) => {
      b.classList.toggle('is-active', b === btn);
    });
    renderNyheter(btn.dataset.cat);
  });

  renderNyheter('all');
}

// ── Testimonials ────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Mohammad Rizvi',
    role: 'Daglig leder, Askin Hudleger',
    faggruppe: 'Leger',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/5e3976949e7b610f376da056_askin.jpg',
    quote: 'Vi har vært meget fornøyd med Extensor. Spesielt er vi veldig glad for meget god kundeservice av kompetente medarbeidere!'
  },
  {
    name: 'Lysaker Kiropraktorklinikk',
    role: 'Kiropraktor',
    faggruppe: 'Kiropraktor',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/5e29a245f100de45273c00ad_lysaker.jpg',
    quote: 'I en ellers hektisk hverdag er det utrolig deilig å ha et journalprogram vi kan stole 100% på. Extensor oppleves oversiktlig og brukervennlig, og nye kollegaer lærer fort å bruke det. Helfo-oppgjør og helsenett har fungert knirkefritt de siste 8 årene.'
  },
  {
    name: 'Ståle Evenshaug',
    role: 'IT-sjef, Unicare Norge AS',
    faggruppe: 'Rehabilitering',
    image: 'https://cdn.prod.website-files.com/5d6e594614166128bdeacdfb/5e3d5d0b357436a0157fdb1b_unicare.jpg',
    quote: 'Extensor støtter opp om alle forretningskritiske funksjoner som vi trenger som et konsern innenfor rehabilitering.'
  },
  {
    name: 'Elin Røkke',
    role: 'Fysioterapeut MNFF, Vestby Fysikalske Institutt',
    faggruppe: 'Fysio- og manuellterapeuter',
    avatar: '#d4c8b8',
    quote: 'Vi har benyttet Extensor siden 2009, og systemet støtter opp om alle gjøremål og funksjoner vi har i hverdagen. Programmet er funksjonelt og brukervennlig. Supportteamet er serviceminded og gir oss raskt tilbakemelding på spørsmål.'
  },
  {
    name: 'Christina S. Holmen',
    role: 'Fotterapeut',
    faggruppe: 'Andre behandlere',
    avatar: '#c8b8d4',
    quote: 'Siden 2006 har jeg ført elektronisk journal og brukt Extensor som leverandør. Det føles trygt at både journalføring, regnskap og reskontro kunder blir ivaretatt på en forskriftsmessig måte. Jeg anbefaler gjerne å bruke Extensor.'
  }
];

function testimonialCardSize(quoteLength) {
  if (quoteLength < 120) return 'size-sm';
  if (quoteLength < 220) return 'size-md';
  if (quoteLength < 320) return 'size-lg';
  return 'size-xl';
}

function renderTestimonialsMarquee() {
  const track = document.querySelector('#testimonials-track');
  if (!track) return;

  // Dupliser 3x for sømløs loop (CSS animasjonen flytter -33.333%)
  const loop = [...testimonials, ...testimonials, ...testimonials];
  track.innerHTML = loop.map((t) => `
    <article class="testimonial-card ${testimonialCardSize(t.quote.length)}">
      <div>
        <div class="testimonial-card-faggruppe">${t.faggruppe}</div>
        <p class="testimonial-card-quote">«${t.quote}»</p>
      </div>
      <div class="testimonial-card-meta">
        ${t.image
          ? `<img class="testimonial-card-avatar" src="${t.image}" alt="${t.name}" loading="lazy" />`
          : `<div class="testimonial-card-avatar" style="background:${t.avatar}"></div>`}
        <div>
          <div class="testimonial-card-name">${t.name}</div>
          <div class="testimonial-card-role">${t.role}</div>
        </div>
      </div>
    </article>
  `).join('');
}

// ── Reveal observer ─────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.07, rootMargin: '0px 0px -20px 0px' }
);
document.querySelectorAll('.rv, .rvl, .rvr').forEach((el) => revealObserver.observe(el));

// ── Driftsmelding-bar ───────────────────────────────────────────────────────
// Måler barens høyde (kan variere ved linjebrekk) og eksponerer den som
// --driftbar-h, slik at navbar og hero forskyves nøyaktig like mye.
const driftBar = document.querySelector('.drift-bar');
if (driftBar) {
  const setDriftbarHeight = () => {
    document.documentElement.style.setProperty('--driftbar-h', driftBar.offsetHeight + 'px');
  };
  document.body.classList.add('has-driftbar');
  setDriftbarHeight();
  window.addEventListener('resize', setDriftbarHeight);
  driftBar.querySelector('.drift-bar-close')?.addEventListener('click', () => {
    driftBar.remove();
    document.body.classList.remove('has-driftbar');
    document.documentElement.style.setProperty('--driftbar-h', '0px');
  });
}

// ── Navbar scroll state ─────────────────────────────────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Help-bubble (floating support-knapp) ────────────────────────────────────
function initHelpBubble() {
  const bubble = document.querySelector('.help-bubble');
  if (!bubble) return;
  const trigger = bubble.querySelector('.help-bubble-trigger');
  if (!trigger) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = bubble.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', (e) => {
    if (!bubble.contains(e.target)) {
      bubble.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      bubble.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── Hero picker ─────────────────────────────────────────────────────────────
// Samme rekkefølge som faggrupper-listen. Alle knappene er like store;
// lange labeler får brekke over to linjer.
const heroPickerOrder = ['bedrift', 'rehab', 'rus', 'barnevern', 'sykehus', 'leger', 'fysio', 'psyk', 'kiro', 'andre'];

function renderHeroPicker() {
  const grid = document.querySelector('#hero-picker-grid');
  if (!grid) return;

  heroPickerOrder.forEach((id) => {
    const f = faggrupper.find((fg) => fg.id === id);
    if (!f) return;
    const link = document.createElement('a');
    link.className = 'picker-btn';
    link.href = faggruppeHref(f);
    link.textContent = f.label;
    grid.appendChild(link);
  });
}

// ── Faggrupper section (icon grid + detail) ─────────────────────────────────
function renderFaggrupperSection() {
  const icons = document.querySelector('#fag-icons');
  if (!icons) return;

  faggrupper.forEach((f) => {
    const link = document.createElement('a');
    link.className = 'fag-icon-btn';
    link.href = faggruppeHref(f);
    link.innerHTML = `
      <span class="icon">${f.icon}</span>
      <span class="label">${f.label}</span>
    `;
    icons.appendChild(link);
  });
}

// ── Faggrupper-samleside (overview-grid) ────────────────────────────────────
function faggruppeHref(f) {
  return f.page || `faggrupper.html#${f.id}`;
}

function renderFaggrupperOverview() {
  const grid = document.querySelector('#faggruppe-overview-grid');
  if (!grid) return;

  grid.innerHTML = faggrupper.map((f) => `
    <article class="faggruppe-overview-card" id="${f.id}">
      <div class="faggruppe-overview-icon">${f.icon}</div>
      <h2 class="faggruppe-overview-name">${f.label}</h2>
      <p class="faggruppe-overview-desc">${f.desc}</p>
      <a class="faggruppe-overview-link" href="${faggruppeHref(f)}">
        ${f.page ? 'Les mer' : 'Ta kontakt'}
        <span aria-hidden="true">→</span>
      </a>
      ${f.page ? '<span class="faggruppe-overview-tag">Egen side</span>' : ''}
    </article>
  `).join('');
}

// ── Navbar-dropdown for faggrupper (kun rendering) ──────────────────────────
function renderNavDropdown() {
  const menu = document.querySelector('#faggrupper-dropdown');
  if (!menu) return;

  menu.innerHTML = faggrupper.map((f) => `
    <a href="${faggruppeHref(f)}" class="nav-dropdown-item">
      <span class="nav-dropdown-item-icon">${f.icon}</span>
      <span class="nav-dropdown-item-label">${f.label}</span>
      ${f.page ? '<span class="nav-dropdown-item-tag">Egen side</span>' : ''}
    </a>
  `).join('');
}

// ── Toggle for alle nav-dropdowns (Faggrupper, Produktet, Om oss) ───────────
function initNavDropdowns() {
  const dropdowns = document.querySelectorAll('.nav-dropdown');
  if (!dropdowns.length) return;

  dropdowns.forEach((dropdown) => {
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      const isMobile = window.matchMedia('(max-width: 960px)').matches;
      const arrow = e.target.closest('.nav-dropdown-arrow');
      if (arrow || isMobile) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelectorAll('.nav-dropdown.is-open').forEach((d) => {
          if (d !== dropdown) d.classList.remove('is-open');
        });
        dropdown.classList.toggle('is-open');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.is-open').forEach((d) => {
        d.classList.remove('is-open');
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.nav-dropdown.is-open').forEach((d) => {
        d.classList.remove('is-open');
      });
    }
  });
}

// ── Burger-meny (mobil) ─────────────────────────────────────────────────────
function initBurger() {
  const burger = document.querySelector('.nav-burger');
  if (!burger) return;

  burger.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', isOpen);
  });

  // Lukk på klikk på en nav-link
  document.querySelectorAll('.nav-links a:not(.nav-dropdown-trigger)').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}

// ── CTA form: fyll faggruppe-select og pre-velg evt. default ────────────────
function populateCtaSelect() {
  const select = document.querySelector('#cta-faggruppe');
  if (!select) return;
  const preselect = select.dataset.default;
  faggrupper.forEach((f) => {
    const opt = document.createElement('option');
    opt.value = f.id;
    opt.textContent = f.label;
    if (preselect && preselect === f.id) opt.selected = true;
    select.appendChild(opt);
  });
}

// ── Init ────────────────────────────────────────────────────────────────────
renderHeroPicker();
renderFaggrupperSection();
renderFaggrupperOverview();
renderNavDropdown();
populateCtaSelect();
renderTestimonialsMarquee();
initHelpBubble();
initNyhetsfilter();
renderRelatertNyheter();
initNavDropdowns();
initBurger();

// ─────────────────────────────────────────────────────────────────────────────
// ── Sanity CMS ──────────────────────────────────────────────────────────────
// Innhold redigeres på https://extensor.sanity.studio/ — siden viser statisk
// fallback-innhold til API-et svarer, så en CMS-feil aldri knekker siden.
const SANITY = { projectId: '79jm8nbd', dataset: 'production', apiVersion: '2024-01-01' };

async function sanityQuery(query) {
  const url = `https://${SANITY.projectId}.apicdn.sanity.io/v${SANITY.apiVersion}/data/query/${SANITY.dataset}?query=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Sanity-feil ' + res.status);
  return (await res.json()).result;
}

function ytId(url) {
  const m = /[?&]v=([\w-]+)|youtu\.be\/([\w-]+)/.exec(url || '');
  return m ? (m[1] || m[2]) : null;
}

function esc(s) {
  const div = document.createElement('div');
  div.textContent = s == null ? '' : s;
  return div.innerHTML;
}

function norskDato(iso) {
  if (!iso) return '';
  const mnd = ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'];
  const [aar, m, dag] = iso.split('-');
  return `${parseInt(dag, 10)}. ${mnd[parseInt(m, 10) - 1]} ${aar}`;
}

// Forside: driftsmelding-bar
async function cmsDriftBar() {
  const bar = document.querySelector('.drift-bar');
  if (!bar) return;
  const m = await sanityQuery(`*[_type == "driftsmelding" && visPaForsiden == true] | order(dato desc)[0]{tittel, tekst, type}`);
  if (!m) {
    bar.remove();
    document.body.classList.remove('has-driftbar');
    document.documentElement.style.setProperty('--driftbar-h', '0px');
    return;
  }
  bar.classList.toggle('is-critical', m.type === 'kritisk');
  bar.querySelector('.drift-bar-text').innerHTML = `<strong>${esc(m.tittel)}:</strong> ${esc(m.tekst)}`;
  window.dispatchEvent(new Event('resize')); // re-mål barhøyden etter tekstbytte
}

// Support: driftsmelding-liste
async function cmsDriftListe() {
  const liste = document.querySelector('.status-list');
  if (!liste) return;
  const rader = await sanityQuery(`*[_type == "driftsmelding"] | order(dato desc)[0...8]{tittel, tekst, type, dato}`);
  if (!rader || !rader.length) return;
  liste.innerHTML = rader.map((m, i) => `
    <article class="rv in d${i % 4 + 1} status-item ${m.type === 'info' ? 'status-info' : 'status-warning'}">
      <div class="status-item-meta">
        <span class="status-item-tag">${m.type === 'info' ? 'Info' : m.type === 'kritisk' ? 'Kritisk' : 'Viktig'}</span>
        <span class="status-item-date">${norskDato(m.dato)}</span>
      </div>
      <h3>${esc(m.tittel)}</h3>
      <p>${esc(m.tekst)}</p>
    </article>`).join('');
}

// Forside: kundelogoer
async function cmsKundelogoer() {
  const track = document.querySelector('.client-logos-track');
  if (!track) return;
  const logoer = await sanityQuery(`*[_type == "kundelogo"] | order(rekkefolge asc){navn, "logoUrl": logo.asset->url}`);
  if (!logoer || !logoer.length) return;
  const item = (l, skjult) => l.logoUrl
    ? `<img class="client-logo-img" src="${l.logoUrl}" alt="${skjult ? '' : esc(l.navn)}"${skjult ? ' aria-hidden="true"' : ''} loading="lazy" />`
    : `<span class="client-logo"${skjult ? ' aria-hidden="true"' : ''}>${esc(l.navn)}</span>`;
  track.innerHTML = logoer.map((l) => item(l, false)).join('') + logoer.map((l) => item(l, true)).join('');
}

// Nyheter (forside-relatert + nyhetsside) — bytt ut innholdet i arrayen og re-render
async function cmsNyheter() {
  if (!document.querySelector('#news-grid') && !document.querySelector('#related-news-grid')) return;
  const rader = await sanityQuery(`*[_type == "nyhet"] | order(dato desc){
    "id": string::split(_id, ".")[1], tittel, dato, kategori, ingress, lenke,
    "img": coalesce(bilde.asset->url, bildeUrl)}`);
  if (!rader || !rader.length) return;
  const katLabel = { kunder: 'Kunder', besok: 'Besøk', produkt: 'Produkt', karriere: 'Karriere', integrasjon: 'Integrasjon' };
  nyheter.length = 0;
  rader.forEach((r) => nyheter.push({
    id: r.id, title: r.tittel,
    date: r.dato ? r.dato.split('-').reverse().join('.') : '',
    category: r.kategori, categoryLabel: katLabel[r.kategori] || r.kategori,
    excerpt: r.ingress || '', image: r.img || '', url: r.lenke || '#',
  }));
  const aktivtFilter = document.querySelector('.news-filter-btn.is-active');
  renderNyheter(aktivtFilter ? aktivtFilter.dataset.cat : 'all');
  renderRelatertNyheter();
}

// Testimonials-marquee
async function cmsTestimonials() {
  if (!document.querySelector('#testimonials-track')) return;
  const rader = await sanityQuery(`*[_type == "testimonial"]{navn, rolle, faggruppe, sitat, avatarFarge, "img": coalesce(bilde.asset->url, bildeUrl)}`);
  if (!rader || !rader.length) return;
  testimonials.length = 0;
  rader.forEach((r) => testimonials.push({
    name: r.navn, role: r.rolle || '', faggruppe: r.faggruppe || '',
    quote: r.sitat, image: r.img || undefined, avatar: r.avatarFarge || '#d4c8b8',
  }));
  renderTestimonialsMarquee();
}

// Webinar-siden: featured + arkiv
async function cmsWebinarer() {
  const featured = document.querySelector('.webinar-featured');
  const grid = document.querySelector('.webinar-grid');
  if (!featured && !grid) return;
  if (document.querySelector('#videoguide-side')) return; // videoguider gjenbruker webinar-grid
  const rader = await sanityQuery(`*[_type == "webinar"] | order(dato desc){
    tittel, dato, status, beskrivelse, videoUrl, lenke, fremhevet,
    "img": coalesce(bilde.asset->url, bildeUrl)}`);
  if (!rader || !rader.length) return;
  const hoved = rader.find((r) => r.fremhevet) || rader[0];
  const rest = rader.filter((r) => r !== hoved);
  const play = `<span class="webinar-play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 5l12 7-12 7V5z" fill="currentColor"/></svg></span>`;
  if (featured && hoved) {
    featured.href = hoved.lenke || hoved.videoUrl || '#';
    featured.querySelector('.webinar-featured-img img').src = hoved.img || '';
    featured.querySelector('.webinar-featured-title').textContent = hoved.tittel;
    featured.querySelector('.webinar-featured-desc').textContent = hoved.beskrivelse || '';
    const datoEl = featured.querySelectorAll('.webinar-meta-item')[0];
    if (datoEl) datoEl.textContent = norskDato(hoved.dato);
  }
  if (grid && rest.length) {
    grid.innerHTML = rest.map((w, i) => `
      <a href="${w.lenke || w.videoUrl || '#'}" class="rv in d${i % 4 + 1} webinar-card">
        <div class="webinar-card-img"><img src="${w.img || ''}" alt="" />${play}</div>
        <div class="webinar-card-body">
          <div class="webinar-meta">
            <span class="webinar-meta-item">${norskDato(w.dato)}</span>
            <span class="webinar-meta-item">Online</span>
          </div>
          <h3 class="webinar-card-title">${esc(w.tittel)}</h3>
          <p class="webinar-card-desc">${esc(w.beskrivelse || '')}</p>
          <span class="webinar-cta">Se opptak <span aria-hidden="true">→</span></span>
        </div>
      </a>`).join('');
  }
}

// Kurs-siden
async function cmsKurs() {
  const liste = document.querySelector('.kurs-list');
  if (!liste) return;
  const rader = await sanityQuery(`*[_type == "kurs" && aktiv == true] | order(rekkefolge asc){tittel, tidspunkt, varighet, beskrivelse, malgruppe}`);
  if (!rader || !rader.length) return;
  liste.innerHTML = rader.map((c, i) => `
    <article class="rv in d${i % 4 + 1} kurs-item">
      <div class="kurs-item-meta">
        <span class="kurs-item-tid">${esc(c.tidspunkt || '')}</span>
        <span class="kurs-item-varighet">${esc(c.varighet || '')}</span>
      </div>
      <h2>${esc(c.tittel)}</h2>
      <p>${esc(c.beskrivelse || '')}</p>
      <p class="kurs-item-malgruppe"><strong>Målgruppe:</strong> ${esc(c.malgruppe || 'Alle')}</p>
      <a class="kurs-item-cta" href="mailto:support@extensor.no?subject=${encodeURIComponent('Kurspåmelding: ' + c.tittel)}">Meld deg på <span aria-hidden="true">→</span></a>
    </article>`).join('');
}

// Videoguider-siden (markeres med #videoguide-side på grid-en)
async function cmsVideoguider() {
  const grid = document.querySelector('#videoguide-side');
  if (!grid) return;
  const rader = await sanityQuery(`*[_type == "videoguide"] | order(rekkefolge asc){tittel, beskrivelse, videoUrl}`);
  if (!rader || !rader.length) return;
  const play = `<span class="webinar-play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 5l12 7-12 7V5z" fill="currentColor"/></svg></span>`;
  grid.innerHTML = rader.map((v, i) => `
    <a href="${v.videoUrl}" target="_blank" rel="noopener" class="rv in d${i % 4 + 1} webinar-card">
      <div class="webinar-card-img"><img src="https://img.youtube.com/vi/${ytId(v.videoUrl)}/hqdefault.jpg" alt="" loading="lazy" />${play}</div>
      <div class="webinar-card-body">
        <h2 class="webinar-card-title">${esc(v.tittel)}</h2>
        <p class="webinar-card-desc">${esc(v.beskrivelse || 'Kort videogjennomgang av funksjonen.')}</p>
        <span class="webinar-cta">Se video <span aria-hidden="true">→</span></span>
      </div>
    </a>`).join('');
}

// Brukermanualer-siden
async function cmsBrukermanualer() {
  const grupper = document.querySelectorAll('.manual-gruppe');
  if (!grupper.length) return;
  const rader = await sanityQuery(`*[_type == "brukermanual"] | order(rekkefolge asc){tittel, gruppe, "fil": coalesce(fil.asset->url, url)}`);
  if (!rader || !rader.length) return;
  const rekkefolge = [];
  const perGruppe = {};
  rader.forEach((m) => {
    if (!perGruppe[m.gruppe]) { perGruppe[m.gruppe] = []; rekkefolge.push(m.gruppe); }
    perGruppe[m.gruppe].push(m);
  });
  const ikon = `<span class="manual-link-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 4h10l6 6v10H4V4z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M14 4v6h6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></span>`;
  const forelder = grupper[0].parentNode;
  grupper.forEach((g) => g.remove());
  rekkefolge.forEach((navn) => {
    const div = document.createElement('div');
    div.className = 'rv in manual-gruppe';
    div.innerHTML = `<h2>${esc(navn)}</h2><div class="manual-grid">` +
      perGruppe[navn].map((m) => `<a class="manual-link" href="${m.fil}" target="_blank" rel="noopener">${ikon}${esc(m.tittel)}</a>`).join('') +
      `</div>`;
    forelder.appendChild(div);
  });
}

// FAQ-siden
async function cmsFaq() {
  const kategorier = document.querySelectorAll('.faq-kategori');
  if (!kategorier.length) return;
  const rader = await sanityQuery(`*[_type == "faqItem"] | order(rekkefolge asc){sporsmal, kategori, svar}`);
  if (!rader || !rader.length) return;
  const rekkefolge = [];
  const perKat = {};
  rader.forEach((q) => {
    if (!perKat[q.kategori]) { perKat[q.kategori] = []; rekkefolge.push(q.kategori); }
    perKat[q.kategori].push(q);
  });
  const forelder = kategorier[0].parentNode;
  kategorier.forEach((k) => k.remove());
  rekkefolge.forEach((navn) => {
    const div = document.createElement('div');
    div.className = 'rv in faq-kategori';
    div.innerHTML = `<h2>${esc(navn)}</h2><div class="partner-grid">` +
      perKat[navn].map((q) => `
        <details class="partner-item">
          <summary><span class="partner-name">${esc(q.sporsmal)}</span><span class="partner-icon" aria-hidden="true"></span></summary>
          <div class="partner-body">${q.svar.split(/\n\n+/).map((a) => `<p>${esc(a)}</p>`).join('')}</div>
        </details>`).join('') +
      `</div>`;
    forelder.appendChild(div);
  });
}

// Nedlastninger-siden (lenkelistene per seksjon)
async function cmsNedlastninger() {
  const seksjoner = ['oppdateringer', 'versjonsnytt', 'programtillegg', 'filer']
    .map((id) => document.querySelector(`#${id} .manual-grid`)).filter(Boolean);
  if (!seksjoner.length) return;
  const rader = await sanityQuery(`*[_type == "nedlastning"] | order(rekkefolge asc){tittel, seksjon, dato, "fil": coalesce(fil.asset->url, url)}`);
  if (!rader || !rader.length) return;
  const ikon = `<span class="manual-link-icon" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>`;
  ['oppdateringer', 'versjonsnytt', 'programtillegg', 'filer'].forEach((id) => {
    const grid = document.querySelector(`#${id} .manual-grid`);
    const mine = rader.filter((r) => r.seksjon === id);
    if (!grid || !mine.length) return;
    grid.innerHTML = mine.map((l) => `
      <a class="manual-link" href="${l.fil}" target="_blank" rel="noopener">${ikon}${esc(l.tittel)}${l.dato ? `<span class="manual-link-dato">${esc(l.dato)}</span>` : ''}</a>`).join('');
  });
}

// Kjør alt — hver funksjon feiler stille og lar statisk innhold stå
[cmsDriftBar, cmsDriftListe, cmsKundelogoer, cmsNyheter, cmsTestimonials,
 cmsWebinarer, cmsKurs, cmsVideoguider, cmsBrukermanualer, cmsFaq, cmsNedlastninger]
  .forEach((fn) => fn().catch((e) => console.warn('CMS:', fn.name, e.message)));

// ── Side-dokumenter: redigerbar tekst og bilder per side ────────────────────
const settTekst = (sel, val) => { const el = document.querySelector(sel); if (el && val) el.textContent = val; };
const settFlerlinje = (sel, val) => {
  const el = document.querySelector(sel);
  if (el && val) el.innerHTML = val.split('\n').map(esc).join('<br>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
};
const settBilde = (sel, url) => { const el = document.querySelector(sel); if (el && url) el.src = url; };

// Forsiden (gjelder også fargetest-kopien)
async function cmsSideForside() {
  if (!document.querySelector('.hero-kpis')) return;
  const s = await sanityQuery(`*[_id == "side-forside"][0]{..., "heroBildeUrl": heroBilde.asset->url, "produktetBildeUrl": produktetBilde.asset->url}`);
  if (!s) return;
  settTekst('.hero .pill.teal', s.heroPill);
  settFlerlinje('.hero h1', s.heroTittel);
  settTekst('.hero .hero-lead', s.heroLead);
  settBilde('.hero-photo img', s.heroBildeUrl);
  settTekst('.hero-ctas .btn-primary', s.ctaPrimar);
  settTekst('.hero-ctas .btn-warm', s.ctaSekundar);
  if (s.heroKpier && s.heroKpier.length) {
    const kpis = document.querySelector('.hero-kpis');
    kpis.style.gridTemplateColumns = `repeat(${s.heroKpier.length}, 1fr)`;
    kpis.innerHTML = s.heroKpier.map((k) => `
      <div class="hero-kpi">
        <span class="hero-kpi-value">${esc(k.verdi)}</span>
        <span class="hero-kpi-label">${esc(k.etikett)}</span>
      </div>`).join('');
  }
  settTekst('.client-logos-label', s.logoStripeLabel);
  settFlerlinje('#produktet h2', s.produktetTittel);
  if (s.produktetPunkter && s.produktetPunkter.length) {
    const kolonne = document.querySelector('.features-grid > div:first-child');
    if (kolonne) {
      const hake = `<div class="feature-icon"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5l3 3 7-7" stroke="var(--teal)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`;
      kolonne.innerHTML = s.produktetPunkter.map((pkt, i) => `
        <div class="rv in d${i % 4 + 1} feature-row">${hake}
          <div><h3>${esc(pkt.tittel)}</h3><p>${esc(pkt.tekst)}</p></div>
        </div>`).join('');
    }
  }
  settBilde('.features-portrait img', s.produktetBildeUrl);
  settTekst('#faggrupper .section-head h2', s.faggrupperTittel);
  settTekst('#faggrupper .section-head > p', s.faggrupperIntro);
  settTekst('.ki-spotlight .pill', s.kiPill);
  settFlerlinje('.ki-spotlight h2', s.kiTittel);
  settTekst('.ki-spotlight-lead', s.kiLead);
  if (s.kiPunkter && s.kiPunkter.length) {
    const liste = document.querySelector('.ki-spotlight-list');
    if (liste) liste.innerHTML = s.kiPunkter.map((t) => `<li><span class="ki-check" aria-hidden="true"></span>${esc(t)}</li>`).join('');
  }
  settTekst('.ki-spotlight .btn-warm', s.kiKnapp);
  settFlerlinje('.testimonials-head h2', s.kunderTittel);
  settTekst('.testimonials-head > p', s.kunderIntro);
  settTekst('#kontakt .cta-card h2', s.ctaTittel);
  settTekst('#kontakt .cta-card .lead', s.ctaLead);
}

// Support-siden
async function cmsSideSupport() {
  if (!document.querySelector('.hero-support')) return;
  const s = await sanityQuery(`*[_id == "side-support"][0]{..., "heroBildeUrl": heroBilde.asset->url}`);
  if (!s) return;
  settTekst('.hero-support h1', s.heroTittel);
  settTekst('.hero-support .hero-lead', s.heroLead);
  settBilde('.hero-support-photo img', s.heroBildeUrl);
  settTekst('.hero-anchor-label', s.snarveiLabel);
  settTekst('#kontakt-support .section-head h2', s.kontaktTittel);
  settTekst('#kontakt-support .section-head > p', s.kontaktIntro);
  settTekst('#quicksupport .section-head h2', s.quicksupportTittel);
  settTekst('#quicksupport .section-head > p', s.quicksupportIntro);
  settTekst('#opplaering .section-head h2', s.opplaeringTittel);
  settTekst('#opplaering .section-head > p', s.opplaeringIntro);
  settTekst('#nedlastninger .section-head h2', s.nedlastningerTittel);
  settTekst('#nedlastninger .section-head > p', s.nedlastningerIntro);
  settTekst('#driftsmeldinger .section-head h2', s.driftTittel);
  settTekst('#driftsmeldinger .section-head > p', s.driftIntro);
}

[cmsSideForside, cmsSideSupport].forEach((fn) => fn().catch((e) => console.warn('CMS:', fn.name, e.message)));

// Øvrige undersider (generisk side-dokument: side-<filnavn>)
async function cmsSideGenerisk() {
  const sti = location.pathname.split('/').pop().replace(/\.html$/, '');
  if (!sti || ['index', 'support', 'fargetest'].includes(sti)) return;
  const s = await sanityQuery(`*[_type == "side" && _id == "side-${sti}"][0]`);
  if (!s) return;
  settTekst('.hero-eyebrow', s.heroEyebrow);
  settFlerlinje('.hero h1, .article-title', s.heroTittel);
  settTekst('.hero .hero-lead, .article-lead', s.heroLead);
  (s.seksjoner || []).forEach((sek, i) => {
    const head = document.querySelectorAll('.section-head')[i];
    if (!head) return;
    const h2 = head.querySelector('h2');
    if (h2 && sek.tittel) h2.innerHTML = sek.tittel.split('\n').map(esc).join('<br>');
    const p = head.querySelector(':scope > p');
    if (p && sek.intro) p.textContent = sek.intro;
  });
  settTekst('.cta-card h2', s.ctaTittel);
  settTekst('.cta-card .lead', s.ctaLead);
}
cmsSideGenerisk().catch((e) => console.warn('CMS: cmsSideGenerisk', e.message));
