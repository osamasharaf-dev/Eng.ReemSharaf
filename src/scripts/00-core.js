/* Core: helpers + one shared scroll loop.
   Scroll-linked effects register with onScroll(el, fn); fn only runs while el is
   near the viewport, all reads happen before all writes, once per animation frame. */
const d = document, root = d.documentElement, body = d.body;
const $ = (s, c = d) => c.querySelector(s);
const $$ = (s, c = d) => [...c.querySelectorAll(s)];
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const isHome = body.dataset.page === 'home';
if (!reduce) root.classList.add('anim');

let vh = innerHeight, vw = innerWidth;
const linked = new Map();
const near = new IntersectionObserver((es) => {
  for (const e of es) { const it = linked.get(e.target); if (it) it.on = e.isIntersecting; }
  tick();
}, { rootMargin: '25% 0px' });
const onScroll = (el, fn) => { if (!el) return; linked.set(el, { fn, on: false }); near.observe(el); };
const everyFrame = new Set();

let queued = false;
const frame = () => {
  queued = false;
  const active = [];
  for (const [el, it] of linked) if (it.on) active.push([it.fn, el.getBoundingClientRect()]);
  for (const fn of everyFrame) fn();
  for (const [fn, r] of active) fn(r);
};
const tick = () => { if (!queued) { queued = true; requestAnimationFrame(frame); } };
// capture: also hears scrolling inside the full-screen section layers of the home stage
addEventListener('scroll', tick, { passive: true, capture: true });
const resizers = [];
let rT;
addEventListener('resize', () => {
  clearTimeout(rT);
  rT = setTimeout(() => { vh = innerHeight; vw = innerWidth; resizers.forEach((f) => f()); tick(); }, 120);
});

// the home stage fills this in (40-stage.js); other pages navigate normally
const stage = { go: null };

const toastEl = $('.toast');
let toastT;
const toast = (msg) => {
  if (!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add('is-on');
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove('is-on'), 2200);
};
