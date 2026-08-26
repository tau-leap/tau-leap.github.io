/* Reveal contact addresses only in the browser — keeps plain mailto out of HTML source. */
(function () {
  function address(el) {
    var user = el.getAttribute("data-u");
    var domain = el.getAttribute("data-d");
    if (!user || !domain) return null;
    return user + String.fromCharCode(64) + domain;
  }

  function reveal(el) {
    var mail = address(el);
    if (!mail) return;
    el.setAttribute("href", "mailto:" + mail);
    if (el.getAttribute("data-keep-label") !== "1") {
      el.textContent = mail;
    }
  }

  document.querySelectorAll("a.js-email").forEach(reveal);
})();
