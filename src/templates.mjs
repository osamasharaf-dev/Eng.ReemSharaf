// Page assembly.
//  • "/"        → the one-page experience: every section, in PAGES order.
//  • "/<slug>"  → the same section on its own indexable page (h1, canonical, own JSON-LD).
import { PAGES } from './content.mjs';
import { pageUrl } from './lib.mjs';
import { SECTIONS } from './sections/index.mjs';
import { shell, pager } from './layout.mjs';
import { icon } from './icons.mjs';

export function renderHome() {
  const home = PAGES[0];
  return shell(home, PAGES.map((p) => SECTIONS[p.key](p, { h: 'h2' })).join('\n'), { mode: 'home' });
}

export function renderPage(p) {
  if (p.key === 'home') return renderHome();
  return shell(p, SECTIONS[p.key](p, { h: 'h1' }) + pager(p));
}

export function render404() {
  const p = { slug: '404', key: '404', label: 'Not found', title: 'Page not found — Reem Sharaf', desc: 'This page does not exist. Visit the portfolio of Reem Sharaf.' };
  return shell(p, `<section class="sec sec--404" data-tone="light" aria-labelledby="t-404"><div class="wrap nf">
  <p class="kicker"><span class="kicker-num">404</span><span class="kicker-line" aria-hidden="true"></span>Error</p>
  <h1 class="sec-title" id="t-404">Page not <span class="wine">found</span></h1>
  <p>This page could not be found.</p>
  <a class="btn btn-wine" href="/"><span>Go to Reem Sharaf's homepage</span>${icon('arrow')}</a>
</div></section>`, { mode: '404' });
}

export { PAGES, pageUrl };
