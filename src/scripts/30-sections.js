/* Section behaviours — each block only runs if its section is on the page. */

// hero — typed line (only types while the hero is visible)
(() => {
  const el = $('.typed');
  if (!el || reduce) return;
  const list = JSON.parse(el.dataset.words);
  let w = 0, c = list[0].length, del = true, visible = true, t;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) step(); }).observe(el);
  const step = () => {
    clearTimeout(t);
    if (!visible) return;
    const word = list[w];
    c += del ? -1 : 1;
    el.textContent = word.slice(0, c);
    let wait = del ? 28 : 55;
    if (!del && c === word.length) { del = true; wait = 2200; }
    else if (del && c === 0) { del = false; w = (w + 1) % list.length; wait = 300; }
    t = setTimeout(step, wait);
  };
  t = setTimeout(step, 2600);
})();

// about — statement lights up word by word
onScroll($('[data-scroll=words]'), (r) => {
  const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.3));
  $('[data-scroll=words]').style.setProperty('--p', p.toFixed(3));
});

// competencies — ghost word drifts sideways
(() => {
  const g = $('[data-scroll=drift]');
  if (!g || reduce) return;
  onScroll(g.parentElement, (r) => g.style.setProperty('--x', ((r.top / vh) * 18 - 10).toFixed(2) + 'vw'));
})();

// experience — timeline line fills with scroll
(() => {
  const tl = $('[data-scroll=line]');
  if (!tl || reduce) return;
  tl.style.setProperty('--p', 0);
  onScroll(tl, (r) => tl.style.setProperty('--p', clamp((vh * 0.6 - r.top) / r.height).toFixed(3)));
})();

// projects — pin + horizontal travel on wide, tall screens
(() => {
  const sec = $('.sec--projects');
  if (!sec || reduce) return;
  const pin = $('.proj-pin', sec), track = $('.proj-track', sec), count = $('.proj-count b', sec), barEl = $('.proj-bar', sec);
  const n = $$('.proj', sec).length;
  const mq = matchMedia('(min-width: 1000px) and (min-height: 700px)');
  let dist = 0, pinH = 0, last = -1;
  const layout = () => {
    const on = mq.matches && n > 1;
    sec.classList.toggle('is-pinned', on);
    if (!on) { pin.style.height = ''; track.style.transform = ''; dist = 0; return; }
    dist = track.scrollWidth - vw;
    pinH = dist + vh * 1.15;
    pin.style.height = pinH + 'px';
  };
  layout();
  resizers.push(layout);
  mq.addEventListener('change', layout);
  sec.addEventListener('sec:enter', layout); // on the home stage it only has a size once it opens
  onScroll(pin, (r) => {
    if (!dist) return;
    const p = clamp(-r.top / (pinH - vh));
    track.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`;
    barEl.style.setProperty('--pp', ((p * (n - 1) + 1) / n).toFixed(3));
    const i = Math.min(n, Math.round(p * (n - 1)) + 1);
    if (i !== last) { last = i; count.textContent = String(i).padStart(2, '0'); }
  });
})();

// certifications — arrows, drag to scroll, lightbox
(() => {
  const rail = $('.cert-rail');
  if (!rail) return;
  $$('.cert-nav [data-step]').forEach((b) => b.addEventListener('click', () => {
    const w = $('.cert', rail).offsetWidth + 24;
    rail.scrollBy({ left: w * +b.dataset.step, behavior: reduce ? 'auto' : 'smooth' });
  }));
  let down = false, sx = 0, sl = 0, moved = false;
  rail.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft; });
  addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 5) { moved = true; rail.style.scrollSnapType = 'none'; rail.scrollLeft = sl - dx; }
  });
  addEventListener('pointerup', () => { if (!down) return; down = false; rail.style.scrollSnapType = ''; });
  rail.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);

  const box = $('.lightbox');
  if (!box) return;
  const img = $('img', box), cap = $('figcaption', box);
  d.addEventListener('click', (e) => {
    const b = e.target.closest('[data-full]');
    if (!b) return;
    img.src = b.dataset.full;
    img.alt = b.dataset.caption;
    cap.textContent = b.dataset.caption;
    box.showModal();
  });
  box.addEventListener('click', (e) => { if (e.target === box) box.close(); });
})();

// contact — copy email
d.addEventListener('click', async (e) => {
  const b = e.target.closest('[data-copy]');
  if (!b) return;
  try { await navigator.clipboard.writeText(b.dataset.copy); toast('Email copied'); }
  catch { toast(b.dataset.copy); }
});
