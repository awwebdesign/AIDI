/* AIDI, page generator (development tool).
   Reads data.js + i18n.js and writes the nine static HTML pages.

   Why a generator: the shipped deliverable is plain HTML/CSS/JS with no
   runtime dependency, but hand-maintaining 26 products across nine pages
   invites drift. Pages are emitted with Dutch already in the markup and a
   data-i18n key on every string, so the site is complete without JavaScript
   and script.js only has to swap languages.

   Run:  node build.mjs
*/

import { readFileSync, writeFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { createHash } from 'node:crypto';

/* Short content hash per asset, appended to its URL. Without this a browser
   keeps serving the previous style.css or i18n.js after an edit, and stale
   translations look exactly like broken ones. */
const rev = (file) =>
  file + '?v=' + createHash('sha1').update(readFileSync(file)).digest('hex').slice(0, 8);

/* ------------------------------------------------------------- context -- */

const NAMES = [
  'FEEDS', 'SUPPLEMENTS', 'SUPP_GROUPS', 'EQUIPMENT', 'PLANS', 'DEALERS',
  'COUNTRY_ORDER', 'HIGHLIGHTS_2022', 'ACES', 'CONTACT', 'LANGS', 'I18N',
  'PHASES', 'BANDS'
];

/* `const` at the top level of a vm script does not land on the context
   object, so the sources are concatenated and the bindings handed back
   through one trailing expression. */
const ctx = createContext({});
const {
  FEEDS, SUPPLEMENTS, SUPP_GROUPS, EQUIPMENT, PLANS, DEALERS, COUNTRY_ORDER,
  HIGHLIGHTS_2022, ACES, CONTACT, LANGS, I18N, PHASES, BANDS
} = runInContext(
  readFileSync('data.js', 'utf8') + '\n' +
  readFileSync('i18n.js', 'utf8') + '\n' +
  `({ ${NAMES.join(', ')} })`,
  ctx
);

const NL = I18N.nl;
const GEO = JSON.parse(readFileSync('assets/geo.json', 'utf8'));
const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

/* Dutch decimal comma for the shipped markup; script.js re-formats per locale. */
const num = (v, dec = 1) => Number(v).toFixed(dec).replace('.', ',');
const nl = (path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), NL);

/* Translated text plus its key, the pattern used everywhere below. */
const T = (key, tag = 'span', attrs = '') =>
  `<${tag} data-i18n="${key}"${attrs ? ' ' + attrs : ''}>${esc(nl(key))}</${tag}>`;

/* Heading wrapped in a mask so it can wipe up on arrival. */
const TMask = (key, tag = 'h1', cls = '') =>
  `<${tag} class="rv-mask${cls ? ' ' + cls : ''}"><span data-i18n="${key}">${esc(nl(key))}</span></${tag}>`;

const N = (value, dec = 1) =>
  `<span data-num="${value}" data-dec="${dec}">${num(value, dec)}</span>`;

/* --------------------------------------------------------------- icons -- */
/* One set, drawn on the same 24-grid with the same 1.75 stroke. */
const svg = (paths, extra = '') =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${paths}</svg>`;

const ICON = {
  chevronDown: svg('<path d="M5 9l7 7 7-7"/>'),
  arrowRight: svg('<path d="M4 12h15M13 6l6 6-6 6"/>'),
  search: svg('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>'),
  x: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  phone: svg('<path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3z"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6 8.5-6"/>'),
  file: svg('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>'),
  basket: svg('<path d="M4 9h16l-1.4 9.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8z"/><path d="M8.5 9 12 3.5 15.5 9"/>'),
  link: svg('<path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.8-2.8a4 4 0 0 0-5.7-5.7L11.8 6.5"/><path d="M13.5 10.5a4 4 0 0 0-5.7 0L5 13.3a4 4 0 0 0 5.7 5.7l1.5-1.5"/>')
};

const WINGS = readFileSync('assets/brand/wings.svg', 'utf8')
  .replace('<svg ', '<svg class="mark" ');

/* --------------------------------------------------------------- shell -- */

const NAV = [
  ['concept', 'concept.html'],
  ['voeders', 'voeders.html'],
  ['supplementen', 'supplementen.html'],
  ['equipment', 'equipment.html'],
  ['systeem', 'systeem.html'],
  ['team', 'team.html'],
  ['verkooppunten', 'verkooppunten.html']
];

function masthead(active) {
  const links = NAV.map(([key, href]) =>
    `<li><a class="nav__link" href="${href}"${href === active ? ' aria-current="page"' : ''} data-i18n="nav.${key}">${esc(nl('nav.' + key))}</a></li>`
  ).join('\n            ');

  const drawerLinks = NAV.map(([key, href]) =>
    `<a class="drawer__link" href="${href}"${href === active ? ' aria-current="page"' : ''}><span data-i18n="nav.${key}">${esc(nl('nav.' + key))}</span>${ICON.arrowRight}</a>`
  ).join('\n          ');

  const langOptions = LANGS.map((l) =>
    `<button type="button" class="lang__option" data-lang="${l.code}" lang="${l.html}" aria-current="${l.code === 'nl'}"><span class="lang__code">${l.code.toUpperCase()}</span>${esc(l.name)}</button>`
  ).join('\n              ');

  return `  <header class="masthead">
    <div class="wrap masthead__bar">
      <a class="brand" href="index.html">
        <img src="assets/brand/logo-aidi.png" alt="AIDI" width="433" height="225">
        <span class="brand__sub" data-i18n="ui.tagline">${esc(nl('ui.tagline'))}</span>
      </a>

      <nav class="nav" aria-label="Hoofdnavigatie">
        <ul class="nav__list">
            ${links}
        </ul>
      </nav>

      <div class="masthead__end">
        <div class="lang">
          <button type="button" class="lang__toggle" aria-expanded="false" aria-haspopup="true">
            <span class="visually-hidden" data-i18n="ui.language">${esc(nl('ui.language'))}</span>
            <span class="lang__current">NL</span>
            ${ICON.chevronDown}
          </button>
          <div class="lang__menu" role="menu" hidden>
              ${langOptions}
          </div>
        </div>
        <a class="btn btn--primary btn--sm" href="contact.html" data-i18n="nav.contact">${esc(nl('nav.contact'))}</a>
        <button type="button" class="burger" aria-expanded="false" aria-controls="drawer" aria-label="${esc(nl('ui.menu'))}"><span></span></button>
      </div>
    </div>
  </header>

  <div class="drawer" id="drawer" hidden>
    <nav aria-label="Mobiele navigatie">
      <div class="drawer__list">
          ${drawerLinks}
      </div>
    </nav>
    <div class="drawer__foot">
      <a class="btn btn--primary" href="verkooppunten.html" data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</a>
      <a class="btn btn--outline" href="contact.html" data-i18n="nav.contact">${esc(nl('nav.contact'))}</a>
    </div>
  </div>`;
}

function footer() {
  const col = (heading, items) =>
    `<div>
        <h2 class="footer__h" data-i18n="footer.${heading}">${esc(nl('footer.' + heading))}</h2>
        <div class="footer__links">
          ${items.map(([key, href]) => `<a href="${href}" data-i18n="${key}">${esc(nl(key))}</a>`).join('\n          ')}
        </div>
      </div>`;

  return `  <footer class="footer on-dark">
    <div class="wrap">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="assets/brand/logo-aidi.png" alt="AIDI" width="433" height="225">
          <p data-i18n="footer.about">${esc(nl('footer.about'))}</p>
          <p class="footer__made">
            <img src="assets/brand/made-in-belgium.png" alt="" width="124" height="120">
            <span data-i18n="footer.madeIn">${esc(nl('footer.madeIn'))}</span>
          </p>
        </div>
        ${col('range', [['nav.voeders', 'voeders.html'], ['nav.supplementen', 'supplementen.html'], ['nav.equipment', 'equipment.html']])}
        ${col('company', [['nav.concept', 'concept.html'], ['nav.team', 'team.html'], ['nav.systeem', 'systeem.html']])}
        ${col('support', [['nav.verkooppunten', 'verkooppunten.html'], ['nav.contact', 'contact.html']])}
      </div>
      <div class="footer__base">
        <span>© <span data-year>2026</span> Team Noël-Willockx. <span data-i18n="footer.rights">${esc(nl('footer.rights'))}</span></span>
        <span data-i18n="footer.colophon">${esc(nl('footer.colophon'))}</span>
      </div>
    </div>
  </footer>`;
}

function page({ file, key, active, body }) {
  return `<!doctype html>
<html lang="nl" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(nl(key + '.title'))}</title>
<meta name="description" content="${esc(nl(key + '.meta'))}">
<meta name="theme-color" content="#1a2642">
<link rel="icon" href="assets/brand/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="assets/brand/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap">
<link rel="stylesheet" href="${rev('style.css')}">
<script>document.documentElement.className = 'js';</script>
</head>
<body data-page="${key}">
<a class="skip-link" href="#main" data-i18n="ui.skip">${esc(nl('ui.skip'))}</a>

${masthead(active)}

<main id="main">
${body}
</main>

${footer()}

<script src="${rev('data.js')}"></script>
<script src="${rev('i18n.js')}"></script>
<script src="${rev('script.js')}"></script>
</body>
</html>
`;
}

/* ---------------------------------------------------------- components -- */

function macroBar(m, { large = false, reveal = true } = {}) {
  const sum = m.fat + m.protein + m.carbs;
  const segs = [
    ['fat', m.fat, 'spec.fat'],
    ['pro', m.protein, 'spec.protein'],
    ['carb', m.carbs, 'spec.carbs']
  ];
  return `<span class="macro${large ? ' macro--lg' : ''}">
              <span class="macro__track"${reveal ? ' data-reveal' : ''}>
                ${segs.map(([c, v]) => `<span class="macro__seg macro__seg--${c}" style="width:${(v / sum * 100).toFixed(2)}%"></span>`).join('\n                ')}
              </span>
              <span class="macro__key">
                ${segs.map(([c, v, k]) => `<span class="macro__item"><span class="macro__swatch" style="background:var(--m-${c})"></span><span data-i18n="${k}">${esc(nl(k))}</span> <span class="macro__val">${N(v)}%</span></span>`).join('\n                ')}
              </span>
            </span>`;
}

function specList(m) {
  const rows = [
    ['spec.fat', `${N(m.fat)}<small>%</small>`],
    ['spec.protein', `${N(m.protein)}<small>%</small>`],
    ['spec.absorbable', `${N(m.absorbable)}<small>%</small>`],
    ['spec.carbs', `${N(m.carbs)}<small>%</small>`],
    ['spec.fibre', `${N(m.fibre)}<small>%</small>`],
    ['spec.kcal', `${N(m.kcal, 0)}<small> ${esc(nl('spec.kcalUnit'))}</small>`],
    ['spec.omega', `${N(m.omega)}<small> : 1</small>`]
  ];
  return `<dl class="spec">
                ${rows.map(([k, v]) => `<div><dt data-i18n="${k}">${esc(nl(k))}</dt><dd>${v}</dd></div>`).join('\n                ')}
              </dl>`;
}

function detailBody(slug, { spec = null, sizes = [], extra = '' } = {}) {
  const p = NL.p[slug];
  const paras = p.desc.map((d) => `<p>${esc(d)}</p>`).join('\n                  ');
  const usage = p.use.length
    ? `<div class="detail-block" data-usage-block>
                  <h3 data-i18n="ui.usage">${esc(nl('ui.usage'))}</h3>
                  <ul class="usage" data-i18n-items="p.${slug}.use">
                    ${p.use.map((u) => `<li>${esc(u)}</li>`).join('\n                    ')}
                  </ul>
                </div>` : '';
  const ing = p.ing
    ? `<div class="detail-block">
                  <h3 data-i18n="ui.composition">${esc(nl('ui.composition'))}</h3>
                  <p class="ingredients" data-i18n="p.${slug}.ing">${esc(p.ing)}</p>
                </div>` : '';
  const sizeBlock = sizes.length
    ? `<div class="detail-block">
                  <h3 data-i18n="ui.available">${esc(nl('ui.available'))}</h3>
                  <div class="tags">${sizes.map((s) => `<span class="badge badge--phase">${esc(s)}</span>`).join('')}</div>
                </div>` : '';

  return `<div class="row__detail">
            <div class="row__detail-grid">
              <div>
                <div class="detail-block prose" data-i18n-paras="p.${slug}.desc">
                  ${paras}
                </div>
                ${usage}
                ${ing}
              </div>
              <div>
                ${spec ? `<div class="detail-block"><h3 data-i18n="ui.analytics">${esc(nl('ui.analytics'))}</h3>${specList(spec)}</div>` : ''}
                ${sizeBlock}
                ${extra}
                <div class="detail-block">
                  <a class="arrow-link" href="verkooppunten.html"><span data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</span>${ICON.arrowRight}</a>
                </div>
              </div>
            </div>
          </div>`;
}

function thumb(img, kind) {
  if (!img) {
    return `<span class="row__thumb row__thumb--none">${WINGS}</span>`;
  }
  const cls = kind === 'pack' ? ' row__thumb--pack' : '';
  return `<span class="row__thumb${cls}"><img src="assets/products/${img}.jpg" alt="" loading="lazy" decoding="async" width="700" height="700"></span>`;
}

function feedRow(f) {
  const p = NL.p[f.slug];
  const badges = f.phases.map((ph) => `<span class="badge badge--phase" data-i18n="phase.${ph}">${esc(nl('phase.' + ph))}</span>`).join('')
    + f.bands.map((b) => `<span class="badge badge--phase" data-i18n="band.${b}">${esc(nl('band.' + b))}</span>`).join('');

  return `        <details class="row" id="${f.slug}" data-phase="${f.phases.join(' ')}" data-band="${f.bands.join(' ')}" data-rise>
          <summary class="row__summary">
            ${thumb(f.img)}
            <span class="row__main">
              <h2 class="row__name">
                <span data-i18n="p.${f.slug}.name">${esc(p.name)}</span>
                ${f.isNew ? `<span class="badge badge--new" data-i18n="ui.new">${esc(nl('ui.new'))}</span>` : ''}
              </h2>
              <span class="row__tag" data-i18n="p.${f.slug}.tag">${esc(p.tag)}</span>
              <span class="tags">${badges}</span>
            </span>
            <span class="row__data">
              ${macroBar(f.macro)}
            </span>
            <span class="row__end">
              <span class="row__kcal">
                <span class="field-label" data-i18n="spec.energy">${esc(nl('spec.energy'))}</span>
                <b>${N(f.macro.kcal, 0)}</b>
                <span class="field-label" data-i18n="spec.kcalUnit">${esc(nl('spec.kcalUnit'))}</span>
              </span>
              <span class="row__chevron">${ICON.chevronDown}</span>
            </span>
          </summary>
          ${detailBody(f.slug, { spec: f.macro, sizes: f.sizes })}
        </details>`;
}

function suppRow(s) {
  const p = NL.p[s.slug];
  return `        <details class="row" id="${s.slug}" data-group="${s.group}" data-rise>
          <summary class="row__summary">
            ${thumb(s.img, 'pack')}
            <span class="row__main">
              <h2 class="row__name">
                <span data-i18n="p.${s.slug}.name">${esc(p.name)}</span>
                ${s.isNew ? `<span class="badge badge--new" data-i18n="ui.new">${esc(nl('ui.new'))}</span>` : ''}
              </h2>
              <span class="row__tag" data-i18n="p.${s.slug}.tag">${esc(p.tag)}</span>
              <span class="tags"><span class="badge badge--phase" data-i18n="group.${s.group}">${esc(nl('group.' + s.group))}</span></span>
            </span>
            <span class="row__end">
              <span class="row__kcal">
                ${s.sizes.length ? `<span class="field-label" data-i18n="ui.available">${esc(nl('ui.available'))}</span><b>${esc(s.sizes[0])}</b>` : ''}
              </span>
              <span class="row__chevron">${ICON.chevronDown}</span>
            </span>
          </summary>
          ${detailBody(s.slug, { sizes: s.sizes })}
        </details>`;
}

function cta(kind = 'default') {
  const title = kind === 'dealer' ? 'verkooppunten.ctaTitle' : 'home.ctaTitle';
  const body = kind === 'dealer' ? 'verkooppunten.ctaBody' : 'home.ctaBody';
  return `  <section class="section">
    <div class="wrap">
      <div class="cta on-dark" data-rise>
        ${WINGS.replace('class="mark"', 'class="mark cta__mark"')}
        <div class="cta__inner">
          <div>
            ${T(title, 'h2')}
            ${T(body, 'p')}
          </div>
          <div class="btn-row">
            <a class="btn btn--signal" href="verkooppunten.html" data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</a>
            <a class="btn btn--outline" href="contact.html" data-i18n="nav.contact">${esc(nl('nav.contact'))}</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function pagehead(key, crumbLabel, narrow = false) {
  return `  <section class="pagehead">
    <div class="wrap${narrow ? ' wrap--narrow' : ''}">
      <nav class="crumbs" aria-label="Kruimelpad">
        <a href="index.html" data-i18n="ui.home">${esc(nl('ui.home'))}</a>
        <span aria-hidden="true">/</span>
        <span data-i18n="nav.${crumbLabel}">${esc(nl('nav.' + crumbLabel))}</span>
      </nav>
      ${TMask(key + '.h1')}
      ${T(key + '.lede', 'p', 'class="lede"')}
    </div>
  </section>`;
}

function filterBar(target, groups) {
  const group = (facet, labelKey, values) => `
        <div class="filters__group" role="group" aria-label="${esc(nl(labelKey))}" data-i18n-attr="aria-label:${labelKey}">
          <span class="field-label filters__label" data-i18n="${labelKey}">${esc(nl(labelKey))}</span>
          <button type="button" class="chip" data-facet="${facet}" data-value="" aria-pressed="true" data-i18n="ui.all">${esc(nl('ui.all'))}</button>
          ${values.map(([v, k]) => `<button type="button" class="chip" data-facet="${facet}" data-value="${v}" aria-pressed="false" data-i18n="${k}">${esc(nl(k))}</button>`).join('\n          ')}
        </div>`;

  return `      <div class="filters" data-filters="${target}">
        ${groups.map(([facet, labelKey, values]) => group(facet, labelKey, values)).join('\n')}
        ${target === 'feed-list' ? T('voeders.filterHelp', 'p', 'class="filters__help"') : ''}
        <span class="filters__count" data-count role="status" aria-live="polite"></span>
        <button type="button" class="btn btn--outline btn--sm" data-filter-reset hidden data-i18n="ui.reset">${esc(nl('ui.reset'))}</button>
      </div>`;
}

function emptyState() {
  return `      <div class="empty" data-empty hidden>
        ${T('ui.noResults', 'h3')}
        ${T('ui.noResultsBody', 'p')}
        <p><button type="button" class="btn btn--outline btn--sm" data-reset data-i18n="ui.reset">${esc(nl('ui.reset'))}</button></p>
      </div>`;
}

/* =============================================================== pages == */

/* --------------------------------------------------------------- home -- */

function homeBody() {
  const first = FEEDS.find((feed) => feed.slug === 'aidi-mix-3');
  const countable = (markup) => markup.replace(/data-num="([^"]+)"/g, 'data-num="$1" data-count="$1"');
  const seasonSteps = PHASES.map((ph, i) => `
        <article class="season-timeline__step">
          <span class="season-timeline__node" aria-hidden="true"><i></i></span>
          <span class="season-timeline__n">0${i + 1}</span>
          ${T('home.season' + ph.charAt(0).toUpperCase() + ph.slice(1) + 'When', 'span', 'class="season-timeline__when"')}
          ${T('phase.' + ph, 'h3')}
          ${T('home.season' + ph.charAt(0).toUpperCase() + ph.slice(1) + 'D', 'p')}
          <a class="arrow-link" href="voeders.html#${ph}">${T('home.seasonCta')}${ICON.arrowRight}</a>
        </article>`).join('');

  const compareSet = FEEDS;

  const ranges = [
    ['voeders', 'voeders.html', 'aidi-mix-3', FEEDS.length],
    ['supplementen', 'supplementen.html', 'aidi-condition-plus-minerals', SUPPLEMENTS.length],
    ['equipment', 'equipment.html', 'aidi-automatische-voederbakken', EQUIPMENT.length]
  ];

  return `  <section class="hero hero--grain on-dark">
    <div class="hero-grain__media" aria-hidden="true">
      <picture>
        <source srcset="assets/products/hero-grain.webp" type="image/webp">
        <img src="assets/products/hero-grain.jpg" alt="" width="2560" height="1440" fetchpriority="high">
      </picture>
    </div>
    <div class="wrap hero-grain__inner">
      <h1 class="hero__h1">
        <span class="hero__line">${T('home.h1a')}</span>
        <span class="hero__line"><span><em data-i18n="home.h1b">${esc(nl('home.h1b'))}</em>${T('home.heroPunctuation')}</span></span>
        <span class="hero__line">${T('home.heroFinal')}</span>
      </h1>
      ${T('home.lede', 'p', 'class="lede hero__lede"')}
      <div class="btn-row">
        <a class="btn btn--signal" href="voeders.html" data-i18n="ui.exploreRange">${esc(nl('ui.exploreRange'))}</a>
        <a class="btn btn--outline" href="verkooppunten.html" data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</a>
      </div>
    </div>
    <div class="hero-grain__strip">
      <div class="wrap hero-grain__striprow">
        <p class="hero-grain__now">${T('home.featuredLabel')} <a href="voeders.html#${first.slug}">${T('p.' + first.slug + '.name', 'b')}</a></p>
        <div class="hero-grain__macro">${countable(macroBar(first.macro))}</div>
        <div class="hero-grain__energy">${T('spec.energy', 'span', 'class="field-label"')}<strong>${countable(N(first.macro.kcal, 0))} <small>${T('spec.kcalUnit')}</small></strong></div>
      </div>
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('home.seasonTitle', 'h2')}
          ${T('home.seasonLede', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="season-timeline" data-season-timeline>
        <div class="season-timeline__rail" aria-hidden="true"><span></span></div>
        <div class="season-timeline__row">${seasonSteps}
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap split split--wide-media split--top">
      <div>
        ${T('home.conceptTitle', 'h2')}
        <div class="prose" style="margin-top:1.25rem">
          ${T('home.conceptP1', 'p')}
          ${T('home.conceptP2', 'p')}
          ${T('home.conceptP3', 'p')}
        </div>
        <p style="margin-top:1.5rem"><a class="arrow-link" href="concept.html"><span data-i18n="home.conceptCta">${esc(nl('home.conceptCta'))}</span>${ICON.arrowRight}</a></p>
      </div>
      <div>
        <h3 data-i18n="home.conceptCompare">${esc(nl('home.conceptCompare'))}</h3>
        <div class="mix-overview" data-profile-group>
          ${compareSet.map((f) => `<a class="mix-overview__item" href="voeders.html#${f.slug}">
            <div style="display:flex;justify-content:space-between;align-items:baseline;gap:1rem;margin-bottom:0.55rem">
              <b style="font-weight:650" data-i18n="p.${f.slug}.name">${esc(NL.p[f.slug].name)}</b>
              <span class="field-label">${N(f.macro.kcal, 0)} ${esc(nl('spec.kcalUnit'))}</span>
            </div>
            ${macroBar(f.macro)}
          </a>`).join('\n          ')}
        </div>
        ${T('home.conceptCompareNote', 'p', 'class="field-label" style="margin-top:1.5rem;line-height:1.5;text-transform:none;letter-spacing:0"')}
      </div>
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('home.rangeTitle', 'h2')}
          ${T('home.rangeLede', 'p', 'class="lede"')}
        </div>
        <a class="arrow-link" href="systeem.html"><span data-i18n="home.plansCta">${esc(nl('home.plansCta'))}</span>${ICON.arrowRight}</a>
      </div>
      <div class="range-grid" data-stagger>
        ${ranges.map(([key, href, img, count]) => `
        <a class="range-card" href="${href}" data-rise>
          <span class="range-card__media"><img src="assets/products/${img}.jpg" alt="" loading="lazy" width="700" height="525"></span>
          <span class="range-card__body">
            <span class="range-card__title">
              <span data-i18n="nav.${key}">${esc(nl('nav.' + key))}</span>
              <span class="range-card__n">${count}</span>
            </span>
            <span class="range-card__d" data-i18n="home.range${key.charAt(0).toUpperCase() + key.slice(1)}D">${esc(nl('home.range' + key.charAt(0).toUpperCase() + key.slice(1) + 'D'))}</span>
            <span class="arrow-link">${ICON.arrowRight}</span>
          </span>
        </a>`).join('')}
      </div>
    </div>
  </section>

  <section class="section on-dark">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('home.proofTitle', 'h2')}
          ${T('home.proofLede', 'p', 'class="lede"')}
        </div>
        <a class="arrow-link" href="team.html"><span data-i18n="home.proofCta">${esc(nl('home.proofCta'))}</span>${ICON.arrowRight}</a>
      </div>
      <div class="proof-list">
        ${ACES.slice(0, 6).map((a) => `<div class="proof-item${a.rank === 1 ? ' is-top' : ''}">
          <span class="proof-rank">${a.rank}.</span>
          <span class="proof-title">${esc(a.title)}</span>
          <span class="proof-meta"><span>${a.year}</span><span>${esc(a.loft)}</span><span>${esc(a.share)}</span></span>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap split">
      <figure class="media" data-rise>
        <img src="assets/brand/team-noel-willockx.jpg" alt="Eddy Noël en Ivan Willockx bij de hokken" loading="lazy" width="1200" height="800">
        <figcaption data-i18n="home.teamCaption">${esc(nl('home.teamCaption'))}</figcaption>
      </figure>
      <div>
        ${T('home.teamTitle', 'h2')}
        <div class="prose" style="margin-top:1.25rem">
          ${T('home.teamP1', 'p')}
          ${T('home.teamP2', 'p')}
        </div>
        <p style="margin-top:1.5rem"><a class="arrow-link" href="team.html"><span data-i18n="home.teamCta">${esc(nl('home.teamCta'))}</span>${ICON.arrowRight}</a></p>
      </div>
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('home.plansTitle', 'h2')}
          ${T('home.plansLede', 'p', 'class="lede"')}
        </div>
        <a class="arrow-link" href="systeem.html"><span data-i18n="home.plansCta">${esc(nl('home.plansCta'))}</span>${ICON.arrowRight}</a>
      </div>
      <div class="plans" data-stagger>
        ${PLANS.slice(0, 6).map((p) => planLink(p)).join('\n        ')}
      </div>
    </div>
  </section>

${cta()}`;
}

function planLink(p) {
  return `<a class="plan" href="assets/plannen/${p.file}.pdf" data-rise>
          <span class="plan__icon">${ICON.file}</span>
          <span class="plan__t">
            <b data-i18n="systeem.p.${p.file}">${esc(nl('systeem.p.' + p.file))}</b>
            <span>PDF · <span data-i18n="phase.${p.phase}">${esc(nl('phase.' + p.phase))}</span></span>
          </span>
        </a>`;
}

/* ------------------------------------------------------------ concept -- */

function conceptBody() {
  const blocks = [
    ['concept.s1t', ['concept.s1p1', 'concept.s1p2']],
    ['concept.s2t', ['concept.s2p1', 'concept.s2p2']],
    ['concept.s3t', ['concept.s3p1', 'concept.s3p2']],
    ['concept.s4t', ['concept.s4p1', 'concept.s4p2']]
  ];

  const numbers = [
    ['spec.fat', 'concept.numbersFat'],
    ['spec.protein', 'concept.numbersProtein'],
    ['spec.absorbable', 'concept.numbersAbsorbable'],
    ['spec.carbs', 'concept.numbersCarbs'],
    ['spec.kcal', 'concept.numbersKcal'],
    ['spec.fibre', 'concept.numbersFibre'],
    ['spec.omega', 'concept.numbersOmega']
  ];

  return `${pagehead('concept', 'concept', true)}

  <section class="section section--flush-top">
    <div class="wrap wrap--narrow">
      ${blocks.map(([h, ps]) => `<div class="concept-block" data-rise>
        ${T(h, 'h2')}
        <div class="prose" style="margin-top:1rem">
          ${ps.map((p) => T(p, 'p')).join('\n          ')}
        </div>
      </div>`).join('\n      ')}
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('concept.numbersT', 'h2')}
          ${T('concept.numbersP', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="defs" data-stagger>
        ${numbers.map(([term, def]) => `<div class="def" data-rise>
          ${T(term, 'h3')}
          ${T(def, 'p')}
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>

${cta()}`;
}

/* ------------------------------------------------------------ voeders -- */

function voedersBody() {
  const cols = [
    ['voeders.colName', 'text'],
    ['spec.fat', 'num'],
    ['spec.protein', 'num'],
    ['spec.absorbable', 'num'],
    ['spec.carbs', 'num'],
    ['spec.fibre', 'num'],
    ['spec.kcal', 'num'],
    ['spec.omega', 'num']
  ];

  return `${pagehead('voeders', 'voeders')}

  <section class="section section--flush-top">
    <div class="wrap">
${filterBar('feed-list', [
  ['phase', 'voeders.filterPhase', PHASES.map((p) => [p, 'phase.' + p])],
  ['band', 'voeders.filterBand', BANDS.map((b) => [b, 'band.' + b])]
])}
      <div class="rows" id="feed-list" data-stagger>
${FEEDS.map(feedRow).join('\n')}
      </div>
${emptyState()}
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('voeders.compareTitle', 'h2')}
          ${T('voeders.compareLede', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="table-scroll">
        <table class="compare">
          <thead>
            <tr>
              ${cols.map(([k, kind]) => `<th scope="col" data-sort="${kind}"><button type="button" class="sortable"><span data-i18n="${k}">${esc(nl(k))}</span>${ICON.chevronDown}</button></th>`).join('\n              ')}
            </tr>
          </thead>
          <tbody>
            ${FEEDS.map((f) => {
              const m = f.macro;
              return `<tr>
              <td data-v="${esc(NL.p[f.slug].name)}"><a href="#${f.slug}" data-i18n="p.${f.slug}.name">${esc(NL.p[f.slug].name)}</a></td>
              <td data-v="${m.fat}">${N(m.fat)}%</td>
              <td data-v="${m.protein}">${N(m.protein)}%</td>
              <td data-v="${m.absorbable}">${N(m.absorbable)}%</td>
              <td data-v="${m.carbs}">${N(m.carbs)}%</td>
              <td data-v="${m.fibre}">${N(m.fibre)}%</td>
              <td data-v="${m.kcal}">${N(m.kcal, 0)}</td>
              <td data-v="${m.omega}">${N(m.omega)} : 1</td>
            </tr>`;
            }).join('\n            ')}
          </tbody>
        </table>
      </div>
    </div>
  </section>

${cta()}`;
}

/* ------------------------------------------------------- supplementen -- */

function supplementenBody() {
  return `${pagehead('supplementen', 'supplementen')}

  <section class="section section--flush-top">
    <div class="wrap">
${filterBar('supp-list', [
  ['group', 'supplementen.filterGroup', SUPP_GROUPS.map((g) => [g, 'group.' + g])]
])}
      <div class="rows rows--simple" id="supp-list" data-stagger>
${SUPPLEMENTS.map(suppRow).join('\n')}
      </div>
${emptyState()}
    </div>
  </section>

${cta()}`;
}

/* ---------------------------------------------------------- equipment -- */

function equipmentBody() {
  const feeder = EQUIPMENT[0];
  const specTable = `<div class="table-scroll" style="margin-top:1.5rem">
          <table class="compare compare--slim feeder-specs">
            <thead><tr>
              <th scope="col" data-i18n="equipment.specSize">${esc(nl('equipment.specSize'))}</th>
              <th scope="col" data-i18n="equipment.specBirds">${esc(nl('equipment.specBirds'))}</th>
              <th scope="col" data-i18n="equipment.specLength">${esc(nl('equipment.specLength'))}</th>
              <th scope="col" data-i18n="equipment.specFeed">${esc(nl('equipment.specFeed'))}</th>
            </tr></thead>
            <tbody>
              ${feeder.specs.map((s) => `<tr><td>${esc(s.size)}</td><td>${s.birds}</td><td>${esc(s.length)}</td><td>${esc(s.feed)}</td></tr>`).join('\n              ')}
            </tbody>
          </table>
        </div>`;

  const features = ['featTimer', 'featTimes', 'featPower', 'featBattery'];

  return `${pagehead('equipment', 'equipment')}

  <section class="section section--flush-top">
    <div class="wrap">
      ${EQUIPMENT.map((e, i) => {
        const p = NL.p[e.slug];
        const media = e.img
          ? `<figure class="media"><img src="assets/products/${e.img}.jpg" alt="${esc(p.name)}" loading="lazy" width="700" height="525"></figure>`
          : `<div class="media media--mark">${WINGS}</div>`;
        return `<article class="gear${i % 2 ? ' gear--flip' : ''}" id="${e.slug}" data-rise>
        ${media}
        <div>
          <h2 data-i18n="p.${e.slug}.name">${esc(p.name)}</h2>
          <p class="lede" style="margin-top:0.75rem" data-i18n="p.${e.slug}.tag">${esc(p.tag)}</p>
          <div class="prose" style="margin-top:1.15rem" data-i18n-paras="p.${e.slug}.desc">
            ${p.desc.map((d) => `<p>${esc(d)}</p>`).join('\n            ')}
          </div>
          ${e.slug === 'aidi-automatische-voederbakken' ? `<ul class="usage" style="margin-top:1.25rem">
            ${features.map((f) => `<li data-i18n="equipment.${f}">${esc(nl('equipment.' + f))}</li>`).join('\n            ')}
          </ul>${specTable}` : ''}
        </div>
      </article>`;
      }).join('\n      ')}
    </div>
  </section>

${cta()}`;
}

/* ------------------------------------------------------------ systeem -- */

function systeemBody() {
  const groups = [
    ['systeem.generalT', PLANS.filter((p) => p.phase === 'algemeen')],
    ['systeem.flightT', PLANS.filter((p) => p.phase === 'vlucht')],
    ['systeem.breedT', PLANS.filter((p) => p.phase === 'kweek')],
    ['systeem.moultT', PLANS.filter((p) => p.phase === 'rui')],
    ['systeem.restT', PLANS.filter((p) => p.phase === 'winter')]
  ];

  return `${pagehead('systeem', 'systeem')}

  <section class="section section--flush-top">
    <div class="wrap">
      ${groups.map(([key, list]) => `<div class="plan-group">
        ${T(key, 'h2')}
        <div class="plans" style="margin-top:1.25rem" data-stagger>
          ${list.map(planLink).join('\n          ')}
        </div>
      </div>`).join('\n      ')}
    </div>
  </section>

${cta()}`;
}

/* --------------------------------------------------------------- team -- */

function teamBody() {
  return `${pagehead('team', 'team')}

  <section class="section section--flush-top">
    <div class="wrap split split--top">
      <figure class="media" data-rise>
        <img src="assets/brand/team-noel-willockx.jpg" alt="Eddy Noël en Ivan Willockx" loading="lazy" width="1200" height="800">
        <figcaption data-i18n="home.teamCaption">${esc(nl('home.teamCaption'))}</figcaption>
      </figure>
      <div>
        <div class="concept-block">
          ${T('team.eddyT', 'h2')}
          <div class="prose" style="margin-top:1rem">
            ${T('team.eddyP1', 'p')}
            ${T('team.eddyP2', 'p')}
          </div>
        </div>
        <div class="concept-block" style="margin-top:2.5rem">
          ${T('team.ivanT', 'h2')}
          <div class="prose" style="margin-top:1rem">
            ${T('team.ivanP1', 'p')}
            ${T('team.ivanP2', 'p')}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('team.resultsT', 'h2')}
          ${T('team.resultsLede', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="proof-list">
        ${HIGHLIGHTS_2022.map((h) => `<div class="proof-item${h.rank === 1 ? ' is-top' : ''}">
          <span class="proof-rank">${h.rank}.</span>
          <span class="proof-title">${esc(h.race)} <span style="color:var(--fg-3);font-weight:400">(${h.km} km)</span></span>
          <span class="proof-meta"><span>${N(h.birds, 0)} <span data-i18n="team.birds">${esc(nl('team.birds'))}</span></span></span>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('team.acesT', 'h2')}
          ${T('team.acesLede', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="proof-list">
        ${ACES.map((a) => `<div class="proof-item${a.rank === 1 ? ' is-top' : ''}">
          <span class="proof-rank">${a.rank}.</span>
          <span class="proof-title">${esc(a.title)}</span>
          <span class="proof-meta"><span>${a.year}</span><span>${esc(a.loft)}</span><span>${esc(a.share)}</span></span>
        </div>`).join('\n        ')}
      </div>
    </div>
  </section>

${cta()}`;
}

/* ----------------------------------------------------- verkooppunten -- */

function dealerCard(d) {
  const geo = GEO[d.name];
  const coords = geo && Number.isFinite(geo.lat) && Number.isFinite(geo.lon)
    ? ` data-lat="${geo.lat}" data-lon="${geo.lon}"` : '';
  const find = [d.name, d.city, d.zip, d.street].filter(Boolean).join(' ').toLowerCase();
  const addr = [d.street, [d.zip, d.city].filter(Boolean).join(' ')].filter(Boolean).join('<br>');
  const links = [];
  if (d.tel) links.push(`<a href="tel:${d.tel.replace(/[^+\d]/g, '')}">${esc(d.tel)}</a>`);
  if (d.email) links.push(`<a href="mailto:${esc(d.email)}">${esc(d.email)}</a>`);
  if (d.web) links.push(`<a href="${esc(d.web)}" target="_blank" rel="noopener noreferrer" data-i18n="ui.website">${esc(nl('ui.website'))}</a>`);
  const noteKey = d.note === 'order' ? 'ui.orderOnly' : d.note === 'appointment' ? 'ui.byAppointment' : null;

  return `        <article class="dealer" data-find="${esc(find)}"${coords}>
          <h3>${esc(d.name)}</h3>
          ${addr ? `<address>${addr}</address>` : ''}
          ${links.length ? `<div class="dealer__links">${links.join('')}</div>` : ''}
          ${d.distributor ? `<span class="dealer__note" data-i18n="ui.distributor">${esc(nl('ui.distributor'))}</span>` : ''}
          ${noteKey ? `<span class="dealer__note" data-i18n="${noteKey}">${esc(nl(noteKey))}</span>` : ''}
        </article>`;
}

function verkooppuntenBody() {
  const groups = COUNTRY_ORDER.map((code) => {
    const list = DEALERS.filter((d) => d.c === code);
    if (!list.length) return '';
    return `      <div class="country-group">
        <div class="country-head">
          <h2 data-i18n="country.${code}">${esc(nl('country.' + code))}</h2>
          <span>${list.length} ${esc(nl(list.length === 1 ? 'ui.dealersOne' : 'ui.dealers'))}</span>
        </div>
        <div class="dealers">
${list.map(dealerCard).join('\n')}
        </div>
      </div>`;
  }).join('\n');

  return `${pagehead('verkooppunten', 'verkooppunten')}

  <section class="section section--flush-top">
    <div class="wrap">
      <div class="nearby js-only">
        ${T('verkooppunten.nearbyTitle', 'h2')}
        ${T('verkooppunten.nearbyHelp', 'p')}
        <button class="btn btn--primary" type="button" data-locate data-i18n="verkooppunten.locate">${esc(nl('verkooppunten.locate'))}</button>
        <p data-location-status role="status" aria-live="polite"></p>
        <div class="dealers" data-nearby hidden></div>
      </div>
      <div class="finder">
        <div class="search">
          ${ICON.search}
          <label class="visually-hidden" for="dealer-q" data-i18n="ui.searchDealers">${esc(nl('ui.searchDealers'))}</label>
          <input type="search" id="dealer-q" data-dealer-search autocomplete="off"
                 placeholder="${esc(nl('ui.searchDealers'))}" data-i18n-attr="placeholder:ui.searchDealers">
          <button type="button" class="search__clear" aria-label="${esc(nl('ui.clear'))}" data-i18n-attr="aria-label:ui.clear" hidden>${ICON.x}</button>
        </div>
        <span class="filters__count" data-count></span>
      </div>
      <div class="nearby nearby--search" data-search-nearby hidden>
        <p data-search-status role="status" aria-live="polite"></p>
        <div class="dealers" data-search-results></div>
      </div>

${groups}

${emptyState()}
    </div>
  </section>

${cta('dealer')}`;
}

/* ------------------------------------------------------------ contact -- */

function contactBody() {
  const person = (p) => `<a class="person" href="${p.href}">
            <span class="person__icon">${ICON.phone}</span>
            <span><b>${esc(p.name)}</b><span>${esc(p.tel)}</span></span>
          </a>`;

  const intl = DEALERS.filter((d) => d.distributor).map((d) => `<article class="dealer">
          <h3>${esc(d.name)}</h3>
          <p class="field-label" style="margin-top:0.35rem" data-i18n="country.${d.c}">${esc(nl('country.' + d.c))}</p>
          <div class="dealer__links">
            ${d.tel ? `<a href="tel:${d.tel.replace(/[^+\d]/g, '')}">${esc(d.tel)}</a>` : ''}
            ${d.email ? `<a href="mailto:${esc(d.email)}">${esc(d.email)}</a>` : ''}
            ${d.web ? `<a href="${esc(d.web)}" target="_blank" rel="noopener noreferrer" data-i18n="ui.website">${esc(nl('ui.website'))}</a>` : ''}
          </div>
        </article>`).join('\n        ');

  return `${pagehead('contact', 'contact')}

  <section class="section section--flush-top">
    <div class="wrap">
      <div class="contact-grid">
        <div class="contact-card" data-rise>
          ${T('contact.directT', 'h2')}
          ${T('contact.directP', 'p')}
          <div class="people" style="margin-top:1.25rem">
            ${person(CONTACT.eddy)}
            ${person(CONTACT.ivan)}
          </div>
        </div>
        <div class="contact-card" data-rise>
          ${T('contact.mailT', 'h2')}
          ${T('contact.mailP', 'p')}
          <div class="people" style="margin-top:1.25rem">
            <a class="person" href="mailto:${CONTACT.email}">
              <span class="person__icon">${ICON.mail}</span>
              <span><b>${CONTACT.email}</b><span data-i18n="ui.email">${esc(nl('ui.email'))}</span></span>
            </a>
          </div>
        </div>
        <div class="contact-card" data-rise>
          ${T('contact.dealerT', 'h2')}
          ${T('contact.dealerP', 'p')}
          <p style="margin-top:1.25rem"><a class="btn btn--primary" href="verkooppunten.html" data-i18n="ui.findDealer">${esc(nl('ui.findDealer'))}</a></p>
        </div>
      </div>
    </div>
  </section>

  <section class="section band">
    <div class="wrap">
      <div class="head">
        <div class="head__text">
          ${T('contact.intlT', 'h2')}
          ${T('contact.intlP', 'p', 'class="lede"')}
        </div>
      </div>
      <div class="dealers">
        ${intl}
      </div>
    </div>
  </section>`;
}

/* --------------------------------------------------------------- emit -- */

const PAGES = [
  { file: 'index.html', key: 'home', active: '', body: homeBody() },
  { file: 'concept.html', key: 'concept', active: 'concept.html', body: conceptBody() },
  { file: 'voeders.html', key: 'voeders', active: 'voeders.html', body: voedersBody() },
  { file: 'supplementen.html', key: 'supplementen', active: 'supplementen.html', body: supplementenBody() },
  { file: 'equipment.html', key: 'equipment', active: 'equipment.html', body: equipmentBody() },
  { file: 'systeem.html', key: 'systeem', active: 'systeem.html', body: systeemBody() },
  { file: 'team.html', key: 'team', active: 'team.html', body: teamBody() },
  { file: 'verkooppunten.html', key: 'verkooppunten', active: 'verkooppunten.html', body: verkooppuntenBody() },
  { file: 'contact.html', key: 'contact', active: 'contact.html', body: contactBody() }
];

for (const p of PAGES) {
  writeFileSync(p.file, page(p));
  console.log('wrote', p.file);
}
console.log('\n%d pages · %d products · %d dealers · %d plans',
  PAGES.length, FEEDS.length + SUPPLEMENTS.length + EQUIPMENT.length, DEALERS.length, PLANS.length);
