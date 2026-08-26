export function createI18n(strings, storageKey) {
  let currentLang =
    localStorage.getItem(storageKey) ||
    (navigator.language.startsWith("ja") ? "ja" : "en");

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[lang]?.[key] != null) el.textContent = strings[lang][key];
    });
    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.textContent = lang === "ja" ? "JA" : "EN";
      toggle.setAttribute("aria-label", strings[lang]["a11y.language"]);
    }
  }

  function getLang() {
    return currentLang;
  }

  function translate(key, lang = currentLang) {
    return strings[lang]?.[key] || key;
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(currentLang);
    document.getElementById("langToggle")?.addEventListener("click", () => {
      applyLanguage(currentLang === "en" ? "ja" : "en");
    });
  });

  return { applyLanguage, getLang, translate };
}

export function initProductChrome({ applyLanguage, getLang, translate }) {
  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getLang());

    const header = document.getElementById("siteHeader");
    if (header) {
      const syncHeader = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 8);
      };
      syncHeader();
      window.addEventListener("scroll", syncHeader, { passive: true });
    }

    const menuToggle = document.getElementById("menuToggle");
    const mobileNav = document.getElementById("mobileNav");
    const setMenuOpen = (isOpen) => {
      if (!menuToggle || !mobileNav) return;
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      const label = menuToggle.querySelector(".sr-only");
      if (label) label.textContent = translate(isOpen ? "nav.menuClose" : "nav.menu");
      mobileNav.hidden = !isOpen;
    };

    menuToggle?.addEventListener("click", () => {
      setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
    });
    mobileNav?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    });
    document.getElementById("langToggle")?.addEventListener("click", () => {
      queueMicrotask(() =>
        setMenuOpen(menuToggle?.getAttribute("aria-expanded") === "true")
      );
    });
  });
}
