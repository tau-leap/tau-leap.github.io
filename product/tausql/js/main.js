import { applyLanguage, getLang, translate } from "./i18n.js";
import { initProductChrome } from "../../../assets/js/product-site.js";

const POLAR_CHECKOUT_BASE =
  "https://buy.polar.sh/polar_cl_ELdP5G2HbON7Cmps6h9V4HWyOpLWu5CM85WSa3n3UHB";
const POLAR_CHECKOUT = {
  monthly: `${POLAR_CHECKOUT_BASE}?product_id=4f9741b9-ddbf-491f-bb95-bcc3733d8f17`,
  yearly: `${POLAR_CHECKOUT_BASE}?product_id=bf39c94b-b493-4e7b-8eb0-5a561d5d784d`,
  lifetime: `${POLAR_CHECKOUT_BASE}?product_id=b3d0a422-8daf-4234-acd4-80cb53e3c8cc`,
  ...(window.TAUSQL_POLAR_CHECKOUT || {}),
};

initProductChrome({ applyLanguage, getLang, translate });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".buy-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.dataset.plan;
      const url = POLAR_CHECKOUT[plan];
      if (url) {
        window.location.href = url;
        return;
      }
      alert(translate("pricing.checkoutMissing"));
    });
  });
});
