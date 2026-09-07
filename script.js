/* AIDI — runtime.
   Pages ship with Dutch already in the markup, so the site is complete with
   JavaScript disabled and fully indexable. This script switches language,
   drives navigation, and adds the filtering, sorting and search that turn a
   product list into something a fancier can actually use. */

(function () {
  'use strict';

  var STORE_KEY = 'aidi.lang';
  var BASE = 'nl';
  var LOCALES = { nl: 'nl-BE', fr: 'fr-BE', en: 'en-GB', de: 'de-DE', zh: 'zh-Hans-CN' };
  var html = document.documentElement;
  var page = document.body.getAttribute('data-page') || 'home';
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------ helpers -- */

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function lookup(dict, path) {
    var parts = path.split('.');
    var node = dict;
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  var current = BASE;

  function t(path) {
    var v = lookup(I18N[current], path);
    if (v === undefined) v = lookup(I18N[BASE], path);
    return v === undefined ? '' : v;
  }

  function storedLang() {
    var saved;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) { saved = null; }
    if (saved && I18N[saved]) return saved;
    var nav = (navigator.languages || [navigator.language || ''])[0] || '';
    nav = nav.toLowerCase();
    for (var i = 0; i < LANGS.length; i++) {
      if (nav.indexOf(LANGS[i].code) === 0) return LANGS[i].code;
    }
    if (nav.indexOf('zh') === 0) return 'zh';
    return BASE;
  }

  function debounce(fn, wait) {
    var id;
    return function () {
      var args = arguments, self = this;
      clearTimeout(id);
      id = setTimeout(function () { fn.apply(self, args); }, wait);
    };
  }

  function fmt(value, dec) {
    try {
      return new Intl.NumberFormat(LOCALES[current] || current, {
        minimumFractionDigits: dec, maximumFractionDigits: dec
      }).format(value);
    } catch (e) {
      return String(value);
    }
  }

  /* ------------------------------------------------------- translation -- */

  function applyLang(code, persist) {
    if (!I18N[code]) code = BASE;
    current = code;
    var meta = null;
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) meta = LANGS[i];
    html.setAttribute('lang', meta ? meta.html : code);

    var title = t(page + '.title');
    if (title) document.title = title;
    var desc = document.querySelector('meta[name="description"]');
    var descText = t(page + '.meta');
    if (desc && descText) desc.setAttribute('content', descText);

    $$('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (typeof v === 'string') el.textContent = v;
    });

    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
        var bits = pair.split(':');
        var v = t(bits[1]);
        if (typeof v === 'string') el.setAttribute(bits[0], v);
      });
    });

    /* Repeated blocks: paragraphs and usage bullets differ in count between
       languages, so they are rebuilt rather than mapped one-to-one. */
    $$('[data-i18n-paras]').forEach(function (el) {
      var list = t(el.getAttribute('data-i18n-paras'));
      if (!Array.isArray(list)) return;
      el.textContent = '';
      list.forEach(function (text) {
        var p = document.createElement('p');
        p.textContent = text;
        el.appendChild(p);
      });
    });

    $$('[data-i18n-items]').forEach(function (el) {
      var list = t(el.getAttribute('data-i18n-items'));
      if (!Array.isArray(list)) return;
      var block = el.closest('[data-usage-block]');
      if (block) block.hidden = list.length === 0;
      el.textContent = '';
      list.forEach(function (text) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        el.appendChild(li);
      });
    });

    /* Figures are written into the markup with a Dutch decimal comma; each
       carries its raw value so it can be re-formatted for the active locale. */
    var locale = LOCALES[code] || code;
    $$('[data-num]').forEach(function (el) {
      var value = parseFloat(el.getAttribute('data-num'));
      var dec = parseInt(el.getAttribute('data-dec') || '1', 10);
      if (isNaN(value)) return;
      try {
        el.textContent = new Intl.NumberFormat(locale, {
          minimumFractionDigits: dec, maximumFractionDigits: dec
        }).format(value);
      } catch (e) { /* keep the value already in the markup */ }
    });

    $$('.lang__option').forEach(function (b) {
      b.setAttribute('aria-current', String(b.getAttribute('data-lang') === code));
    });
    var badge = $('.lang__current');
    if (badge) badge.textContent = code.toUpperCase();

    if (persist) { try { localStorage.setItem(STORE_KEY, code); } catch (e) {} }

    document.dispatchEvent(new CustomEvent('aidi:lang', { detail: { lang: code } }));
  }

  /* ------------------------------------------------------------- header -- */

  function initHeader() {
    var head = $('.masthead');
    if (!head) return;

    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        head.setAttribute('data-stuck', String(window.scrollY > 12));
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    var burger = $('.burger');
    var drawer = $('.drawer');
    if (burger && drawer) {
      var setDrawer = function (open) {
        burger.setAttribute('aria-expanded', String(open));
        drawer.hidden = !open;
        document.body.style.overflow = open ? 'hidden' : '';
        burger.setAttribute('aria-label', open ? t('ui.close') : t('ui.menu'));
      };
      burger.addEventListener('click', function () {
        setDrawer(burger.getAttribute('aria-expanded') !== 'true');
      });
      $$('.drawer__link', drawer).forEach(function (a) {
        a.addEventListener('click', function () { setDrawer(false); });
      });
      window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && burger.getAttribute('aria-expanded') === 'true') {
          setDrawer(false);
          burger.focus();
        }
      });
      window.addEventListener('resize', debounce(function () {
        if (window.innerWidth >= 1024) setDrawer(false);
      }, 150));
    }
  }

  /* ---------------------------------------------------- language switch -- */

  function initLangMenu() {
    $$('.lang').forEach(function (root) {
      var toggle = $('.lang__toggle', root);
      var menu = $('.lang__menu', root);
      if (!toggle || !menu) return;

      var open = function (state) {
        toggle.setAttribute('aria-expanded', String(state));
        menu.hidden = !state;
        if (state) {
          var sel = $('.lang__option[aria-current="true"]', menu) || $('.lang__option', menu);
          if (sel) sel.focus();
        }
      };

      toggle.addEventListener('click', function () {
        open(toggle.getAttribute('aria-expanded') !== 'true');
      });

      menu.addEventListener('click', function (e) {
        var btn = e.target.closest('.lang__option');
        if (!btn) return;
        applyLang(btn.getAttribute('data-lang'), true);
        open(false);
        toggle.focus();
      });

      menu.addEventListener('keydown', function (e) {
        var items = $$('.lang__option', menu);
        var i = items.indexOf(document.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
        if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          open(false);
          toggle.focus();
        }
      });

      document.addEventListener('click', function (e) {
        if (!root.contains(e.target) && toggle.getAttribute('aria-expanded') === 'true') open(false);
      });
    });
  }

  /* ---------------------------------------------------------- analyser -- */
  /* The hero readout. Cycles through the range so the central claim — every
     mix ships with its numbers — is demonstrated rather than asserted. */

  function initAnalyser() {
    var root = $('.analyser');
    if (!root || typeof FEEDS === 'undefined') return;

    var order = FEEDS.slice();
    var START = Math.max(0, order.findIndex(function (f) { return f.slug === 'aidi-mix-3'; }));
    var img = $('.analyser__figure img', root);
    var name = $('.analyser__name h3', root);
    var tagline = $('.analyser__name p', root);
    var track = $('.macro__track', root);
    var key = $('.macro__key', root);
    var figures = $('.analyser__figures', root);
    var tabs = $$('.analyser__tab', root);
    var index = 0;
    var timer = null;

    function paint(i, animate) {
      var f = order[i];
      index = i;
      img.src = 'assets/products/' + f.img + '.jpg';
      img.alt = t('p.' + f.slug + '.name');
      name.textContent = t('p.' + f.slug + '.name');
      tagline.textContent = f.phases.map(function (p) { return t('phase.' + p); }).join(' · ');

      var m = f.macro;
      var sum = m.fat + m.protein + m.carbs;
      var segs = [
        { cls: 'fat', v: m.fat, label: t('spec.fat') },
        { cls: 'pro', v: m.protein, label: t('spec.protein') },
        { cls: 'carb', v: m.carbs, label: t('spec.carbs') }
      ];

      track.innerHTML = '';
      key.innerHTML = '';
      segs.forEach(function (s) {
        var d = document.createElement('span');
        d.className = 'macro__seg macro__seg--' + s.cls;
        d.style.width = (s.v / sum * 100).toFixed(2) + '%';
        track.appendChild(d);

        var item = document.createElement('span');
        item.className = 'macro__item';
        item.innerHTML = '<span class="macro__swatch" style="background:var(--m-' + s.cls + ')"></span>' +
          s.label + ' <span class="macro__val">' + s.v.toFixed(1).replace('.', ',') + '%</span>';
        key.appendChild(item);
      });

      figures.innerHTML =
        '<div><span class="field-label">' + t('spec.energy') + '</span><b>' + fmt(m.kcal, 0) + '</b><span class="field-label">' + t('spec.kcalUnit') + '</span></div>' +
        '<div><span class="field-label">' + t('spec.absorbable') + '</span><b>' + m.absorbable.toFixed(1).replace('.', ',') + '%</b></div>' +
        '<div><span class="field-label">' + t('spec.omega') + '</span><b>' + m.omega + '</b></div>';

      tabs.forEach(function (tab, ti) { tab.setAttribute('aria-selected', String(ti === i)); });

      if (animate && !reduced.matches) {
        track.animate(
          [{ clipPath: 'inset(0 100% 0 0 round 99px)' }, { clipPath: 'inset(0 0 0 0 round 99px)' }],
          { duration: 760, easing: 'cubic-bezier(0.16,1,0.3,1)' }
        );
      }
    }

    function start() {
      if (reduced.matches) return;
      stop();
      timer = setInterval(function () { paint((index + 1) % order.length, true); }, 5200);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { paint(i, true); stop(); start(); });
    });

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });
    document.addEventListener('aidi:lang', function () { paint(index, false); });

    paint(START, false);
    start();
  }

  /* ----------------------------------------------------------- filters -- */

  function initFilters() {
    var bar = $('[data-filters]');
    if (!bar) return;
    var listRoot = $('#' + bar.getAttribute('data-filters'));
    if (!listRoot) return;

    var rows = $$('.row', listRoot);
    var empty = $('[data-empty]');
    var counter = $('[data-count]');
    var state = {};

    function apply() {
      var shown = 0;
      rows.forEach(function (row) {
        var ok = Object.keys(state).every(function (facet) {
          var want = state[facet];
          if (!want) return true;
          var have = (row.getAttribute('data-' + facet) || '').split(' ');
          return have.indexOf(want) !== -1;
        });
        row.hidden = !ok;
        if (ok) shown++; else row.open = false;
      });
      if (empty) empty.hidden = shown !== 0;
      if (counter) {
        counter.textContent = shown + ' ' + (shown === 1 ? t('ui.resultsOne') : t('ui.results'));
      }
    }

    bar.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      var facet = chip.getAttribute('data-facet');
      var value = chip.getAttribute('data-value') || '';
      state[facet] = value;
      $$('.chip[data-facet="' + facet + '"]', bar).forEach(function (c) {
        c.setAttribute('aria-pressed', String(c === chip));
      });
      apply();
    });

    var reset = $('[data-reset]');
    if (reset) {
      reset.addEventListener('click', function () {
        state = {};
        $$('.chip', bar).forEach(function (c) {
          c.setAttribute('aria-pressed', String(c.getAttribute('data-value') === ''));
        });
        apply();
      });
    }

    document.addEventListener('aidi:lang', apply);
    apply();
  }

  /* ------------------------------------------------------ compare table -- */

  function initCompare() {
    var table = $('table.compare');
    if (!table) return;
    var body = $('tbody', table);

    $$('th[data-sort]', table).forEach(function (th) {
      var btn = $('.sortable', th);
      if (!btn) return;
      btn.addEventListener('click', function () {
        var kind = th.getAttribute('data-sort');
        var asc = th.getAttribute('aria-sort') === 'descending';
        $$('th', table).forEach(function (o) { o.removeAttribute('aria-sort'); });
        th.setAttribute('aria-sort', asc ? 'ascending' : 'descending');

        var idx = Array.prototype.indexOf.call(th.parentNode.children, th);
        var rows = $$('tr', body);
        rows.sort(function (a, b) {
          var av = a.children[idx].getAttribute('data-v');
          var bv = b.children[idx].getAttribute('data-v');
          if (kind === 'text') return asc ? av.localeCompare(bv) : bv.localeCompare(av);
          return asc ? av - bv : bv - av;
        });
        rows.forEach(function (r) { body.appendChild(r); });
      });
    });
  }

  /* ------------------------------------------------------ dealer search -- */

  function initDealerSearch() {
    var input = $('[data-dealer-search]');
    if (!input) return;
    var groups = $$('.country-group');
    var cards = $$('.dealer');
    var empty = $('[data-empty]');
    var counter = $('[data-count]');
    var clear = $('.search__clear');

    function run() {
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (card) {
        var ok = !q || card.getAttribute('data-find').indexOf(q) !== -1;
        card.hidden = !ok;
        if (ok) shown++;
      });
      groups.forEach(function (g) {
        var any = $$('.dealer', g).some(function (c) { return !c.hidden; });
        g.hidden = !any;
        var n = $$('.dealer', g).filter(function (c) { return !c.hidden; }).length;
        var badge = $('.country-head span', g);
        if (badge) badge.textContent = n + ' ' + t(n === 1 ? 'ui.dealersOne' : 'ui.dealers');
      });
      if (empty) empty.hidden = shown !== 0;
      if (counter) counter.textContent = shown + ' ' + t(shown === 1 ? 'ui.dealersOne' : 'ui.dealers');
      if (clear) clear.hidden = q === '';
    }

    input.addEventListener('input', debounce(run, 120));
    if (clear) {
      clear.addEventListener('click', function () {
        input.value = '';
        run();
        input.focus();
      });
    }
    document.addEventListener('aidi:lang', run);
    run();
  }

  /* ------------------------------------------------------------ reveals -- */
  /* Nothing is hidden by the stylesheet. This function hides only what is
     genuinely below the fold at load, then reveals it on scroll — so a browser
     without IntersectionObserver, a hidden tab, a headless renderer or a
     print job all show the full page instead of blank sections. A timer
     backstops the observer regardless. */

  function initReveal() {
    var targets = $$('[data-rise]');
    var bars = $$('.macro__track[data-reveal]');
    if (reduced.matches || !('IntersectionObserver' in window)) return;

    var fold = window.innerHeight * 0.92;
    var below = function (el) { return el.getBoundingClientRect().top > fold; };

    var risers = targets.filter(below);
    var clips = bars.filter(below);
    if (!risers.length && !clips.length) return;

    risers.forEach(function (el) { el.classList.add('rise'); });
    clips.forEach(function (el) { el.classList.add('clip'); });

    /* Stagger inside a single group, so one list enters together rather than
       every section sharing one identical entrance. */
    $$('[data-stagger]').forEach(function (group) {
      $$('.rise', group).forEach(function (el, i) {
        el.style.setProperty('--delay', Math.min(i * 55, 440) + 'ms');
      });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.08 });

    risers.concat(clips).forEach(function (el) { io.observe(el); });

    var release = function () {
      risers.concat(clips).forEach(function (el) { el.classList.add('is-in'); });
    };
    setTimeout(release, 2500);
    window.addEventListener('beforeprint', release);
  }

  /* ------------------------------------------------- deep-linked details -- */

  function initDeepLink() {
    function openFromHash() {
      if (!location.hash) return;
      var target = document.getElementById(location.hash.slice(1));
      if (target && target.classList.contains('row')) {
        target.hidden = false;
        target.open = true;
        target.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'center' });
      }
    }
    window.addEventListener('hashchange', openFromHash);
    openFromHash();

    /* Keep the address bar in step so a fancier can share one product. */
    $$('.row').forEach(function (row) {
      row.addEventListener('toggle', function () {
        if (row.open && row.id && history.replaceState) {
          history.replaceState(null, '', '#' + row.id);
        }
      });
    });
  }

  /* --------------------------------------------------------------- boot -- */

  function boot() {
    applyLang(storedLang(), false);
    initHeader();
    initLangMenu();
    initAnalyser();
    initFilters();
    initCompare();
    initDealerSearch();
    initReveal();
    initDeepLink();

    var year = $('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
