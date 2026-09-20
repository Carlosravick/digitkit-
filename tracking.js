(function (window, document) {
  "use strict";

  var defaults = {
    gtmId: "",
    ga4MeasurementId: "",
    metaPixelId: "",
    clarityProjectId: "",
    checkoutDomains: [],
    attributionParams: [],
    storageKey: "digikit_tracking_attribution",
    debug: false
  };

  var config = Object.assign({}, defaults, window.DIGIKIT_TRACKING_CONFIG || {});
  var dataLayer = window.dataLayer = window.dataLayer || [];
  var pageMap = {
    "": "landing",
    "index.html": "landing",
    "quiz.html": "quiz",
    "name-capture.html": "lead_name",
    "profile-review.html": "profile_review",
    "email-capture.html": "lead_email",
    "scratchcard.html": "scratchcard",
    "pv.html": "sales_page",
    "members.html": "members",
    "ebook-chas.html": "ebook_chas"
  };

  function log() {
    if (!config.debug || !window.console || !window.console.log) return;
    var args = Array.prototype.slice.call(arguments);
    args.unshift("[DigiKit tracking]");
    window.console.log.apply(window.console, args);
  }

  function readStorage(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return null;
    }
    return value;
  }

  function readJson(key) {
    var raw = readStorage(key);
    if (!raw || raw === "null" || raw === "undefined") return {};
    try {
      var parsed = JSON.parse(raw);
      return parsed || {};
    } catch (error) {
      return {};
    }
  }

  function getAnswers() {
    return readJson("digikit_answers");
  }

  function getPageFile() {
    var path = (window.location.pathname || "/").split("/").pop();
    return path || "";
  }

  function getPageName() {
    return pageMap[getPageFile()] || "page";
  }

  function getAttribution() {
    return readJson(config.storageKey);
  }

  function persistAttribution() {
    var params = new URLSearchParams(window.location.search || "");
    var existing = getAttribution();
    var next = Object.assign({}, existing);
    var touched = false;

    config.attributionParams.forEach(function (key) {
      var value = params.get(key);
      if (value) {
        next[key] = value;
        touched = true;
      }
    });

    if (params.get("fbclid") && !next.fbc) {
      next.fbc = "fb.1." + Date.now() + "." + params.get("fbclid");
      touched = true;
    }

    if (!next.first_seen_at) {
      next.first_seen_at = new Date().toISOString();
      touched = true;
    }

    if (!next.landing_page) {
      next.landing_page = getPageName();
      touched = true;
    }

    if (!next.landing_path) {
      next.landing_path = window.location.pathname || "/";
      touched = true;
    }

    if (touched) {
      writeStorage(config.storageKey, JSON.stringify(next));
    }

    return next;
  }

  function flattenAttribution(target, attribution) {
    Object.keys(attribution || {}).forEach(function (key) {
      if (attribution[key] !== undefined && attribution[key] !== null && attribution[key] !== "") {
        target[key] = attribution[key];
      }
    });
  }

  function basePayload() {
    var answers = getAnswers();
    var payload = {
      page_name: getPageName(),
      page_path: window.location.pathname || "/",
      page_title: document.title || "",
      page_url: window.location.href,
      answers_count: Object.keys(answers).length,
      has_name: Boolean(answers.firstName),
      has_email: Boolean(answers.email)
    };

    if (answers.goal) payload.goal = answers.goal;
    if (answers.weight) payload.weight = Number(answers.weight);
    if (answers.targetWeight) payload.target_weight = Number(answers.targetWeight);
    if (answers.imc) payload.imc = Number(answers.imc);
    if (window.location.pathname.indexOf("members.html") !== -1) {
      payload.admin_mode = new URLSearchParams(window.location.search).get("admin") === "true";
    }

    flattenAttribution(payload, getAttribution());
    return payload;
  }

  function track(eventName, params) {
    try {
      var payload = Object.assign({
        event: eventName,
        event_timestamp: new Date().toISOString()
      }, basePayload(), params || {});

      dataLayer.push(payload);
      log("event", payload);
      return payload;
    } catch (error) {
      if (window.console && window.console.error) {
        window.console.error("[DigiKit tracking] Error inside track():", error);
      }
      return {};
    }
  }

  function appendAttribution(url) {
    if (!url || url === "#") return url;

    try {
      var parsed = new URL(url, window.location.origin);
      var attribution = getAttribution();

      Object.keys(attribution || {}).forEach(function (key) {
        if (!attribution[key]) return;
        if (key === "first_seen_at" || key === "landing_page" || key === "landing_path") return;
        if (!parsed.searchParams.get(key)) {
          parsed.searchParams.set(key, attribution[key]);
        }
      });

      return parsed.toString();
    } catch (error) {
      return url;
    }
  }

  function decorateCheckoutLinks() {
    Array.from(document.querySelectorAll("[data-checkout-link], .cta-link")).forEach(function (element) {
      var href = element.getAttribute("href");
      if (!href || href === "#") return;
      element.setAttribute("href", appendAttribution(href));
    });
  }

  function bindGenericEvents() {
    document.addEventListener("click", function (event) {
      var element = event.target.closest("[data-track-event]");
      if (!element) return;

      var eventName = element.getAttribute("data-track-event");
      var params = {};
      var label = element.getAttribute("data-track-label");
      var locationName = element.getAttribute("data-track-location");

      if (label) params.label = label;
      if (locationName) params.location = locationName;

      track(eventName, params);

      if (eventName === "offer_cta_click") {
        track("initiate_checkout", {
          location: locationName || "sales_page",
          checkout_url: element.getAttribute("href") || ""
        });
      }
    }, true);
  }

  function bindSalesScroll() {
    if (getPageName() !== "sales_page") return;

    var fired = {};
    var thresholds = [25, 50, 75, 90];

    function emitScrollDepth() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      var height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;

      var percent = Math.round((scrollTop / height) * 100);
      thresholds.forEach(function (threshold) {
        if (percent >= threshold && !fired[threshold]) {
          fired[threshold] = true;
          track("pv_scroll_depth", { scroll_percent: threshold });
        }
      });
    }

    window.addEventListener("scroll", emitScrollDepth, { passive: true });
    emitScrollDepth();
  }

  function init() {
    persistAttribution();

    function onReady() {
      decorateCheckoutLinks();
      bindGenericEvents();
      bindSalesScroll();
      track("digikit_page_view");
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", onReady, { once: true });
    } else {
      onReady();
    }
  }

  window.digikitTracking = {
    config: config,
    track: track,
    appendAttribution: appendAttribution,
    decorateCheckoutLinks: decorateCheckoutLinks,
    getAttribution: getAttribution,
    trackPurchase: function (params) {
      return track("purchase", params || {});
    }
  };

  init();
})(window, document);
