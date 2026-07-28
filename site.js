// HEMapp landing — mobile nav, GDPR consent, scroll reveal. No dependencies.

(function () {
  "use strict";

  /* ---------- mobile navigation ---------- */

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("fonav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });

    // close after picking a target so the panel does not cover the section
    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- GDPR consent ----------
     Only the consent record is stored, and only after an explicit choice.
     Measurement scripts must be loaded from loadMeasurement() — never before. */

  var STORE_KEY = "hemapp.consent";
  var banner = document.getElementById("cookie-banner");

  function readConsent() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    } catch (error) {
      return null;
    }
  }

  function writeConsent(state) {
    try {
      localStorage.setItem(
        STORE_KEY,
        JSON.stringify({ state: state, at: new Date().toISOString() })
      );
    } catch (error) {
      // private mode or storage disabled: the banner simply shows again
    }
  }

  function loadMeasurement() {
    // ponytail: no analytics wired up yet. Insert the tag here (and only
    // here) so it can never run without consent.
  }

  function openBanner() {
    if (banner) banner.setAttribute("data-open", "true");
  }

  function closeBanner() {
    if (banner) banner.setAttribute("data-open", "false");
  }

  var consent = readConsent();

  if (consent && consent.state === "granted") {
    loadMeasurement();
  } else if (!consent) {
    openBanner();
  }

  if (banner) {
    banner.addEventListener("click", function (event) {
      var button = event.target.closest("[data-consent]");
      if (!button) return;

      var state = button.getAttribute("data-consent");
      writeConsent(state);
      closeBanner();
      if (state === "granted") loadMeasurement();
    });
  }

  document.addEventListener("click", function (event) {
    if (!event.target.closest("[data-cookie-reopen]")) return;
    event.preventDefault();
    openBanner();
    var first = banner && banner.querySelector("[data-consent]");
    if (first) first.focus();
  });
})();
