// Page chrome shared by the one-page home and the standalone (indexable) section pages.
import { SITE, PERSON, PAGES } from './content.mjs';
import { esc, pad, pagePath, sectionHref } from './lib.mjs';
import { icon, sprite } from './icons.mjs';
import { logoSVG } from './logo.mjs';
import { head } from './seo.mjs';

export const BUILD_ID = Date.now().toString(36);

const menu = (cur) => PAGES.map((x, i) => `<li style="--i:${i}"><a href="${sectionHref(x)}" data-key="${x.key}"${x.key === cur ? ' aria-current="true"' : ''}><span class="menu-num">${pad(i)}</span><span class="menu-label">${esc(x.label)}</span></a></li>`).join('');
const rail = () => PAGES.map((x) => `<li><a href="${sectionHref(x)}" data-key="${x.key}"><span class="rail-label">${esc(x.label)}</span><span class="rail-dot" aria-hidden="true"></span></a></li>`).join('');

const footer = () => `<footer class="foot">
  <div class="wrap foot-in">
    <a class="brand" href="/" aria-label="Reem Sharaf — home">${logoSVG('logo', 'Reem Sharaf')}</a>
    <nav aria-label="Pages"><ul class="foot-links">${PAGES.map((x) => `<li><a href="${pagePath(x)}">${esc(x.label)}</a></li>`).join('')}</ul></nav>
    <p class="foot-meta"><span>© ${new Date().getFullYear()} Reem Sharaf · ${esc(PERSON.headline)}</span><a href="/llms.txt">llms.txt</a></p>
  </div>
</footer>`;

// mode: 'home' (all sections) | 'page' (one section) | '404'
export const shell = (p, inner, { mode = 'page' } = {}) => {
  const idx = PAGES.findIndex((x) => x.key === p.key);
  return `${head(p, { build: BUILD_ID, noindex: mode === '404' })}
<body data-page="${mode}" data-tone="light">
${sprite()}
<a class="skip" href="#main">Skip to content</a>
${mode !== '404' ? `<div class="preloader" aria-hidden="true"><div class="pre-panel pre-a"></div><div class="pre-panel pre-b"></div><div class="pre-inner"><div class="pre-logo">${logoSVG('pre-mark', '')}</div><div class="pre-bar"><span></span></div><p class="pre-meta"><span class="pre-count">000</span><span class="pre-msg">initializing model</span></p></div></div>` : ''}
<div class="progress" aria-hidden="true"><span></span></div>

<header class="topbar">
  <a class="brand" href="${mode === 'home' ? '/#home' : '/'}" aria-label="Reem Sharaf — home">${logoSVG('logo', 'Reem Sharaf')}</a>
  <p class="now" aria-hidden="true"><span class="now-num">${idx >= 0 ? pad(idx) : '—'}</span><span class="now-label">${esc(idx >= 0 ? p.label : 'Not found')}</span></p>
  <div class="topbar-actions">
    <a class="pill" href="${SITE.cv}" download="Reem_Sharaf_CV.pdf">${icon('dl')}<span>Download CV</span></a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu"><span class="menu-lines" aria-hidden="true"><i></i><i></i></span><span class="menu-text">Menu</span></button>
  </div>
</header>

<nav class="menu" id="menu" aria-label="Sections">
  <div class="menu-in">
    <ol class="menu-list">${menu(p.key)}</ol>
    <div class="menu-side">
      <p class="mini">Reem Sharaf</p>
      <p>${esc(PERSON.headline)}</p>
      <a href="mailto:${PERSON.email}">${PERSON.email}</a>
      <a href="${PERSON.linkedin}" rel="me noopener" target="_blank">${PERSON.linkedinLabel}</a>
    </div>
  </div>
</nav>

${mode === 'home' ? `<nav class="rail" aria-label="Section shortcuts"><ol>${rail()}</ol></nav>
<div class="hud"><p class="hud-count" aria-hidden="true"><b>00</b> / ${pad(PAGES.length - 1)}</p><div class="hud-nav"><button type="button" class="round round--sm" data-go="-1" aria-label="Previous section">${icon('up')}</button><button type="button" class="round round--sm" data-go="1" aria-label="Next section">${icon('down')}</button></div></div>
<div class="wipe" aria-hidden="true">${'<i></i>'.repeat(7)}</div>` : ''}

<main id="main" tabindex="-1">
${inner}
</main>
${footer()}

<dialog class="lightbox" aria-label="Certificate preview"><form method="dialog"><button class="round lightbox-close" aria-label="Close preview">${icon('close')}</button></form><figure><img alt=""><figcaption></figcaption></figure></dialog>
<div class="toast" role="status" aria-live="polite"></div>
<script src="/assets/js/app.js?v=${BUILD_ID}" defer></script>
</body>
</html>`;
};

// prev / next links under a standalone section page
export const pager = (p) => {
  const i = PAGES.findIndex((x) => x.key === p.key);
  const prev = PAGES[i - 1], next = PAGES[i + 1];
  return `<nav class="pager wrap" aria-label="More sections">
  ${prev ? `<a class="pager-link" href="${pagePath(prev)}"><span class="mini">Previous</span><strong>${esc(prev.label)}</strong></a>` : '<span></span>'}
  <a class="btn btn-wine" href="${sectionHref(p)}"><span>Open the full portfolio</span>${icon('arrow')}</a>
  ${next ? `<a class="pager-link pager-link--next" href="${pagePath(next)}"><span class="mini">Next</span><strong>${esc(next.label)}</strong></a>` : '<span></span>'}
</nav>`;
};
