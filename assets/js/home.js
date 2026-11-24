/* TauLeap homepage micro-interactions — zero dependencies, lightweight. */
(function () {
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* 1. Sticky header scroll state */
  var header = document.querySelector(".site-header");
  if (header) {
    var syncHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
  }

  /* 2. Subtle cursor spotlight on app cards */
  if (!reduced) {
    document.querySelectorAll(".app-card").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", e.clientX - rect.left + "px");
        card.style.setProperty("--my", e.clientY - rect.top + "px");
      });
    });
  }

  /* 3. Staggered reveal on scroll */
  var revealItems = document.querySelectorAll("[data-reveal]");
  if (revealItems.length) {
    if (reduced || !("IntersectionObserver" in window)) {
      revealItems.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      document.documentElement.classList.add("js-enhanced");
      revealItems.forEach(function (el, index) {
        var parent = el.parentElement;
        if (parent && parent.classList.contains("app-grid")) {
          var siblingIndex = Array.prototype.indexOf.call(parent.children, el);
          el.style.setProperty("--reveal-delay", siblingIndex * 55 + "ms");
        } else if (index === 0) {
          el.style.setProperty("--reveal-delay", "0ms");
        }
      });

      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
      );

      revealItems.forEach(function (el) {
        io.observe(el);
      });
    }
  }

  /* 4. One-click email copy button */
  document.querySelectorAll(".js-copy-email").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var user = btn.getAttribute("data-u");
      var domain = btn.getAttribute("data-d");
      if (!user || !domain || !navigator.clipboard) return;
      var email = user + String.fromCharCode(64) + domain;
      navigator.clipboard.writeText(email).then(function () {
        var original = btn.textContent;
        btn.textContent = "Copied";
        btn.classList.add("is-copied");
        window.setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("is-copied");
        }, 1800);
      });
    });
  });
})();
