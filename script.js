// ── Data ────────────────────────────────────────────────────────────────────
const faggrupper = [
  {
    id: 'fysio',
    label: 'Fysio- og manuellterapeuter',
    desc: 'Journalmaler basert på SOAP-notat, automatisk HELFO-oppgjør og timebok med online booking.',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M16 4c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" stroke="currentColor" stroke-width="1.5"/><path d="M8 28v-8c0-3 1.5-5 4-6h8c2.5 1 4 3 4 6v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M12 20l2 4 2-3 2 3 2-4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    id: 'leger',
    label: 'Leger',
    desc: 'Fullverdig EPJ for privatpraktiserende leger. Lab-integrasjon, e-resept og strukturert journalføring.',
    page: 'leger.html',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><circle cx="16" cy="8" r="4" stroke="currentColor" stroke-width="1.6"/><path d="M16 12v2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><rect x="9" y="14" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M13 19h6M13 22h4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`
  },
  {
    id: 'psyk',
    label: 'Psykologer',
    desc: 'Sikkert og diskret system tilpasset terapeutiske prosesser. Enkel notattaking og fakturering.',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M16 5c-5 0-9 3.6-9 8 0 3 1.6 5.5 4 7v4h10v-4c2.4-1.5 4-4 4-7 0-4.4-4-8-9-8z" stroke="currentColor" stroke-width="1.5"/><path d="M13 24h6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>`
  },
  {
    id: 'kiro',
    label: 'Kiropraktorer',
    desc: 'Anatomiske kroppskart, diagnoseregistrering og behandlingsplaner tilpasset kiropraktorfaget.',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M16 4v24M12 8l4-4 4 4M10 14h12M10 19h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="27" r="1.5" fill="currentColor"/></svg>`
  },
  {
    id: 'bedrift',
    label: 'Bedriftshelsetjeneste',
    desc: 'HMS-arbeid, arbeidsevnevurdering og DIFA-tilpasset rapportering for tverrfaglige team.',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><rect x="4" y="12" width="24" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M10 12V9a2 2 0 012-2h8a2 2 0 012 2v3" stroke="currentColor" stroke-width="1.5"/><path d="M16 17v6M13 20h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
  },
  {
    id: 'rehab',
    label: 'Rehabilitering',
    desc: 'Tverrfaglig samhandling i felles journal. Målstyring og dokumentasjon for hele teamet.',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><circle cx="16" cy="8" r="3.5" stroke="currentColor" stroke-width="1.5"/><path d="M8 20c0-4 3.5-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M6 28c2-3 5-5 10-5s8 2 10 5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-opacity=".4"/></svg>`
  },
  {
    id: 'barnevern',
    label: 'Omsorg og barnevern',
    desc: 'Trygg og sporbar journalføring med høy datasikkerhet for barne- og ungdomstjenester.',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><path d="M16 6c0 0-8 4-8 11a8 8 0 0016 0C24 10 16 6 16 6z" stroke="currentColor" stroke-width="1.5"/><path d="M12 16l2.5 2.5L20 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
  },
  {
    id: 'sykehus',
    label: 'Private sykehus',
    desc: 'Skalerbar plattform for tverrfaglige helseinstitusjoner med avansert ressursstyring.',
    icon: `<svg viewBox="0 0 32 32" fill="none" width="28" height="28"><rect x="4" y="8" width="24" height="20" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M12 8V5h8v3" stroke="currentColor" stroke-width="1.5"/><path d="M16 13v8M12 17h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
  },
  {
    id: 'andre',
    label: 'Andre behandlere',
    desc: 'Fleksibelt system som tilpasses din faggruppe og arbeidsform.',
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
// Egen rekkefølge i hero: Leger først, «Fysio- og manuellterapeuter» nederst
// på full bredde (én linje) fordi labelen ellers brekker over to linjer.
const heroPickerOrder = ['leger', 'psyk', 'kiro', 'bedrift', 'rehab', 'barnevern', 'sykehus', 'andre', 'fysio'];

function renderHeroPicker() {
  const grid = document.querySelector('#hero-picker-grid');
  if (!grid) return;

  heroPickerOrder.forEach((id) => {
    const f = faggrupper.find((fg) => fg.id === id);
    if (!f) return;
    const link = document.createElement('a');
    link.className = 'picker-btn' + (id === 'fysio' ? ' picker-btn-wide' : '');
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
