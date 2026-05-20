// ── TOC active state on scroll ──────────────────────────────────────────────
const tocLinks = document.querySelectorAll('.ds-toc-list a');
const sections = Array.from(tocLinks)
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

function setActiveLink(id) {
  tocLinks.forEach((a) => {
    a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
  });
}

const tocObserver = new IntersectionObserver(
  (entries) => {
    // Choose the topmost section currently intersecting
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) setActiveLink(visible[0].target.id);
  },
  { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
);
sections.forEach((s) => tocObserver.observe(s));

// Highlight first section immediately
if (sections[0]) setActiveLink(sections[0].id);

// Smooth-scroll padding to clear sticky nav
tocLinks.forEach((a) => {
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
    history.replaceState(null, '', a.getAttribute('href'));
  });
});

// ── Copy buttons on code blocks ─────────────────────────────────────────────
document.querySelectorAll('.ds-code').forEach((block) => {
  const btn = document.createElement('button');
  btn.className = 'ds-copy-btn';
  btn.type = 'button';
  btn.textContent = 'Kopier';
  btn.addEventListener('click', async () => {
    const code = block.querySelector('code')?.textContent ?? block.textContent;
    try {
      await navigator.clipboard.writeText(code);
      btn.textContent = 'Kopiert ✓';
      btn.classList.add('is-copied');
      setTimeout(() => {
        btn.textContent = 'Kopier';
        btn.classList.remove('is-copied');
      }, 1600);
    } catch {
      btn.textContent = 'Feil';
    }
  });
  block.appendChild(btn);
});
