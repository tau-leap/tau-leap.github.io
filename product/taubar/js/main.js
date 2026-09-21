import { applyLanguage, getLang, translate } from './i18n.js';

// Polar Checkout Link + product_id preselect per plan.
const POLAR_CHECKOUT_BASE =
  'https://buy.polar.sh/polar_cl_0gbd8GpjTsYNxIKZoJsLNxlvLBru0diFDFXGz1Ht8l0';
// Override in HTML: <script>window.TAUBAR_POLAR_CHECKOUT = { monthly: '...', yearly: '...', lifetime: '...' }</script>
const POLAR_CHECKOUT = {
  monthly: `${POLAR_CHECKOUT_BASE}?product_id=c949b1cb-537f-4629-9fd4-7a5bc9c3cf7f`,
  yearly: `${POLAR_CHECKOUT_BASE}?product_id=f63fd16d-5137-4464-90e0-ec7724f25b89`,
  lifetime: `${POLAR_CHECKOUT_BASE}?product_id=22cfd23c-55d7-47d6-9ed8-c3af06c84d22`,
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
