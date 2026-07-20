/**
 * script.js
 * ---------
 * Small UI helpers only:
 * - Mobile hamburger menu
 * - Smooth scrolling for same-page anchors
 * - Footer year
 *
 * No libraries. Keep this file lean.
 */

(function () {
  "use strict";

  /* -------------------------------------------------------
     FOOTER YEAR
     ------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* -------------------------------------------------------
     MOBILE MENU
     Toggles the slide-down nav and updates ARIA attributes.
     ------------------------------------------------------- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("primary-nav");

  function setMenuOpen(isOpen) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    nav.classList.toggle("is-open", isOpen);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setMenuOpen(!open);
    });

    // Close the menu after choosing a link (better mobile UX)
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });

    // Close on Escape for keyboard users
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    });
  }

  /* -------------------------------------------------------
     SMOOTH SCROLLING
     Handles in-page anchors like #tour and #store.
     Respects prefers-reduced-motion.
     ------------------------------------------------------- */
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      var target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });

      // Move focus for accessibility
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }
      target.focus({ preventScroll: true });
    });
  });
})();
