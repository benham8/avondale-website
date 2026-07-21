/**
 * data-loader.js
 * ---------------
 * Loads JSON content and fills the page.
 * Edit the files in /data to update the site — no HTML changes needed.
 *
 * - data/band.json   → About bio paragraphs
 * - data/tour.json   → Tour dates list
 * - data/links.json  → External links (Listen / socials)
 *
 * Later, tour.json can be swapped for a Bandsintown or Songkick
 * API response without changing index.html.
 */

(function () {
  "use strict";

  /**
   * Fetch a JSON file and parse it.
   * Returns null if the file is missing or invalid.
   */
  async function loadJSON(path) {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error("Could not load " + path);
      }
      return await response.json();
    } catch (error) {
      console.warn(error.message);
      return null;
    }
  }

  /**
   * ABOUT SECTION
   * Creates one <p> for each string in band.json → bio[]
   */
  function renderAbout(data) {
    const container = document.getElementById("about-bio");
    if (!container || !data || !Array.isArray(data.bio)) return;

    container.innerHTML = "";

    data.bio.forEach(function (paragraph) {
      const p = document.createElement("p");
      p.textContent = paragraph;
      container.appendChild(p);
    });
  }

  /**
   * TOUR SECTION
   * Creates one list item per show object in tour.json
   *
   * To add a show, add another object to data/tour.json:
   *   { "date": "...", "city": "...", "venue": "..." }
   */
  function renderTour(shows) {
    const list = document.getElementById("tour-list");
    const empty = document.getElementById("tour-empty");
    if (!list) return;

    list.innerHTML = "";

    if (!Array.isArray(shows) || shows.length === 0) {
      if (empty) empty.hidden = false;
      return;
    }

    if (empty) empty.hidden = true;

    shows.forEach(function (show) {
      const item = document.createElement("li");
      item.className = "tour-item";

      const date = document.createElement("span");
      date.className = "tour-date";
      date.textContent = show.date || "";

      const city = document.createElement("span");
      city.className = "tour-city";
      city.textContent = show.city || "";

      const venue = document.createElement("span");
      venue.className = "tour-venue";
      venue.textContent = show.venue || "";

      item.appendChild(date);
      item.appendChild(city);
      item.appendChild(venue);
      list.appendChild(item);
    });
  }

  /**
   * LINKS / NAVIGATION
   * Finds any <a data-link="listen"> (and future social keys)
   * and sets href from links.json so URLs are never hardcoded.
   *
   * Example keys in links.json: listen, spotify, instagram, youtube…
   * Later you can add icons with: <a data-link="instagram">…</a>
   */
  function applyLinks(links) {
    if (!links || typeof links !== "object") return;

    document.querySelectorAll("[data-link]").forEach(function (anchor) {
      const key = anchor.getAttribute("data-link");
      const url = links[key];

      if (url) {
        anchor.href = url;
      } else {
        // Keep the link visible but inactive if the URL is blank
        anchor.removeAttribute("href");
        anchor.setAttribute("aria-disabled", "true");
        anchor.addEventListener("click", function (event) {
          event.preventDefault();
        });
      }
    });
  }

  /**
   * Boot: load all data files in parallel, then render.
   */
  async function init() {
    const [band, tour, links] = await Promise.all([
      loadJSON("data/band.json"),
      loadJSON("data/tour.json"),
      loadJSON("data/links.json")
    ]);

    renderAbout(band);
    renderTour(tour);
    applyLinks(links);
  }

  init();
})();
