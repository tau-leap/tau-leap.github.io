import { applyLanguage, getLang, translate } from './i18n.js';

const API_BASE = window.TAUBAR_API_URL || 'https://api.taubar.app';

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
    button.addEventListener('click', async () => {
      const plan = button.dataset.plan;
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      const original = button.textContent;
      button.textContent = '…';

      try {
        const email = window.prompt(
          getLang() === 'ja'
            ? 'ライセンス送付先のメールアドレス（任意）'
            : 'Email for your license key (optional)'
        );

        const res = await fetch(`${API_BASE}/api/checkout/session`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ plan, email: email || undefined }),
        });

        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Checkout failed');
        window.location.href = data.url;
      } catch (err) {
        alert(err.message);
        button.disabled = false;
        button.removeAttribute('aria-busy');
        button.textContent = original;
      }
    });
  });
});
