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
const floatCta = document.querySelector('.float-cta');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
  floatCta.classList.toggle('visible', window.scrollY > 500);
});

// ── Hero picker ─────────────────────────────────────────────────────────────
function renderHeroPicker() {
  const grid = document.querySelector('#hero-picker-grid');
  const detail = document.querySelector('#hero-picker-detail');
  if (!grid || !detail) return;
  let active = null;

  faggrupper.forEach((f) => {
    const btn = document.createElement('button');
    btn.className = 'picker-btn';
    btn.dataset.id = f.id;
    btn.textContent = f.label;
    btn.addEventListener('click', () => {
      active = active === f.id ? null : f.id;
      grid.querySelectorAll('.picker-btn').forEach((b) => {
        b.classList.toggle('is-active', b.dataset.id === active);
      });
      renderHeroDetail(active);
    });
    grid.appendChild(btn);
  });

  function renderHeroDetail(id) {
    if (!id) {
      detail.innerHTML = '';
      return;
    }
    const fg = faggrupper.find((f) => f.id === id);
    detail.innerHTML = `
      <div class="picker-detail">
        <p>${fg.desc}</p>
        <a href="#kontakt">Ta kontakt →</a>
      </div>
    `;
  }
}

// ── Faggrupper section (icon grid + detail) ─────────────────────────────────
function renderFaggrupperSection() {
  const icons = document.querySelector('#fag-icons');
  const detail = document.querySelector('#fag-detail');
  if (!icons || !detail) return;
  let active = 'fysio';

  faggrupper.forEach((f) => {
    const btn = document.createElement('button');
    btn.className = 'fag-icon-btn' + (f.id === active ? ' is-active' : '');
    btn.dataset.id = f.id;
    btn.innerHTML = `
      <span class="icon">${f.icon}</span>
      <span class="label">${f.label}</span>
    `;
    btn.addEventListener('click', () => {
      active = f.id;
      icons.querySelectorAll('.fag-icon-btn').forEach((b) => {
        b.classList.toggle('is-active', b.dataset.id === active);
      });
      renderDetail(active);
    });
    icons.appendChild(btn);
  });

  function renderDetail(id) {
    const fg = faggrupper.find((f) => f.id === id);
    const iconLg = fg.icon.replace('width="28" height="28"', 'width="40" height="40"');
    detail.innerHTML = `
      <span class="icon-lg">${iconLg}</span>
      <h3>${fg.label}</h3>
      <p class="desc">${fg.desc}</p>
      <div class="fag-features">
        ${['Tilpasset journalmal','Automatisk HELFO-oppgjør','SMS-påminnelser','Norsk Helsenett'].map(
          (item) => `
          <div class="fag-feature">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="var(--teal)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>${item}</span>
          </div>`
        ).join('')}
      </div>
      <a class="cta-block" href="${fg.page || '#kontakt'}">${fg.page ? `Les mer om Extensor for ${fg.label.toLowerCase()} →` : `Ta kontakt om ${fg.label} →`}</a>
    `;
    // Animate-in
    detail.style.animation = 'none';
    void detail.offsetWidth;
    detail.style.animation = 'fadeUp .22s ease';
  }

  renderDetail(active);
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
populateCtaSelect();
