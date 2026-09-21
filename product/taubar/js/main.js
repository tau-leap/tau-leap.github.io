import { applyLanguage, getLang, translate } from './i18n.js';

// Polar Checkout direct links (set before deploy).
// Override in HTML: <script>window.TAUBAR_POLAR_CHECKOUT = { monthly: '...', yearly: '...', lifetime: '...' }</script>
const POLAR_CHECKOUT = {
  monthly: '',
  yearly: '',
  lifetime: '',
  ...(window.TAUBAR_POLAR_CHECKOUT || {}),
};

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(getLang());

  const header = document.getElementById('siteHeader');
  if (header) {
    const syncHeader = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    syncHeader();
    window.addEventListener('scroll', syncHeader, { passive: true });
  }

  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const setMenuOpen = (isOpen) => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.querySelector('.sr-only').textContent = translate(isOpen ? 'nav.menuClose' : 'nav.menu');
    mobileNav.hidden = !isOpen;
  };

  menuToggle?.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) setMenuOpen(false);
  });
  document.getElementById('langToggle')?.addEventListener('click', () => {
    queueMicrotask(() => setMenuOpen(menuToggle?.getAttribute('aria-expanded') === 'true'));
  });

  document.querySelectorAll('.buy-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const plan = button.dataset.plan;
      const url = POLAR_CHECKOUT[plan];
      if (url) {
        window.location.href = url;
        return;
      }
      alert(translate('pricing.checkoutMissing'));
    });
  });
});
