/* Home stage: intro, then sections swap in place — the page itself never scrolls.
   Every section opens with its own transition, chosen by its data-enter attribute.
   Long sections scroll inside their own layer; at the edge, the next gesture moves on. */
const EIO = 'cubic-bezier(.77,0,.18,1)';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// incoming keyframes (and optional outgoing ones) per transition name; dir = +1 forward, -1 back
const FX = {
  doors: { in: () => [{ clipPath: 'inset(0 50% 0 50%)' }, { clipPath: 'inset(0 0% 0 0%)' }] },
  drop: { in: () => [{ transform: 'translate3d(0,-100%,0)' }, { transform: 'none' }], out: () => [{ transform: 'none', opacity: 1 }, { transform: 'translate3d(0,14%,0) scale(.94)', opacity: 0.35 }] },
  iris: { in: () => [{ clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(75% at 50% 50%)' }] },
  corner: { in: () => [{ clipPath: 'polygon(0 0, 0 0, 0 0)' }, { clipPath: 'polygon(0 0, 210% 0, 0 210%)' }] },
  page: { dur: 1150, in: () => [{ transform: 'perspective(2200px) rotateY(-100deg)', transformOrigin: '0 50%', opacity: 0.6 }, { transform: 'perspective(2200px) rotateY(0deg)', transformOrigin: '0 50%', opacity: 1 }], out: () => [{ opacity: 1 }, { opacity: 0.25 }] },
  slats: { overlay: true },
  push: { in: (dir) => [{ transform: `translate3d(${100 * dir}%,0,0)` }, { transform: 'none' }], out: (dir) => [{ transform: 'none' }, { transform: `translate3d(${-32 * dir}%,0,0)` }] },
  shutter: { in: () => [{ clipPath: 'inset(50% 0 50% 0)' }, { clipPath: 'inset(0% 0 0% 0)' }] },
  zoom: { in: () => [{ transform: 'scale(1.22)', opacity: 0 }, { transform: 'none', opacity: 1 }], out: () => [{ transform: 'none', opacity: 1 }, { transform: 'scale(.82)', opacity: 0 }] },
  bloom: { in: () => [{ clipPath: 'inset(36% 30% 36% 30% round 999px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)' }] }
};
const OUT = () => [{ transform: 'none' }, { transform: 'scale(.95)' }];

(() => {
  const pre = $('.preloader');
  const runIntro = async () => {
    let seen = false;
    try { seen = sessionStorage.getItem('rs-intro') === '1'; } catch (e) {}
    if (new URLSearchParams(location.search).get('intro') === '0') seen = true; // e.g. for screenshots
    if (!pre || seen || reduce) { pre?.remove(); return null; }
    try { sessionStorage.setItem('rs-intro', '1'); } catch (e) {}
    pre.classList.add('is-on');
    const count = $('.pre-count', pre), bar = $('.pre-bar span', pre), msg = $('.pre-msg', pre);
    const msgs = ['initializing model', 'loading weights · qwen3-8b', 'compiling portfolio', 'ready'];
    const t0 = performance.now(), dur = 1700;
    await new Promise((res) => {
      const f = (t) => {
        const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        count.textContent = String(Math.round(e * 100)).padStart(3, '0');
        msg.textContent = msgs[Math.min(msgs.length - 1, Math.floor(e * msgs.length))];
        bar.style.transform = `scaleX(${e})`;
        k < 1 ? requestAnimationFrame(f) : res();
      };
      requestAnimationFrame(f);
    });
    await Promise.race([d.fonts?.ready, sleep(800)]);
    await $('.pre-inner', pre).animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(-30px)' }], { duration: 380, easing: EIO, fill: 'forwards' }).finished;
    // the caller opens the first section now; the panels part over it
    return () => Promise.all([
      $('.pre-a', pre).animate([{ transform: 'none' }, { transform: 'translateY(-101%)' }], { duration: 950, easing: EIO, fill: 'forwards' }).finished,
      $('.pre-b', pre).animate([{ transform: 'none' }, { transform: 'translateY(101%)' }], { duration: 950, easing: EIO, fill: 'forwards' }).finished
    ]).then(() => pre.remove());
  };

  if (!isHome) { runIntro().then((part) => part?.()); return; }

  const secs = $$('main > .sec');
  const ids = secs.map((s) => s.id);
  const n = secs.length;
  const bar = $('.progress span'), hudNum = $('.hud-count b'), hudBtns = $$('.hud [data-go]'), wipe = $('.wipe');
  const foot = $('.foot');
  if (foot) $('#contact')?.append(foot);
  let cur = -1, busy = false;

  const chrome = (i) => {
    const s = secs[i];
    body.dataset.tone = s.dataset.tone || 'light';
    setCurrent(s.id);
    bar.style.setProperty('--p', (i / (n - 1)).toFixed(4));
    hudNum.textContent = String(i).padStart(2, '0');
    hudBtns[0].disabled = i === 0;
    hudBtns[1].disabled = i === n - 1;
    history.replaceState(null, '', s.id === 'home' ? location.pathname : '#' + s.id);
  };
  const open = (s) => {
    s.scrollTop = 0;
    s.style.setProperty('--sd', reduce ? '0ms' : '380ms');
    s.classList.add('is-active');
    s.dispatchEvent(new Event('sec:enter'));
    tick();
  };
  const close = (s) => { s.classList.remove('is-active', 'is-entering'); replay(s); };

  const slats = async (swap) => {
    const bars = [...wipe.children];
    const go = (from, to, origin) => Promise.all(bars.map((b, k) => b.animate([{ transform: `scaleY(${from})`, transformOrigin: origin }, { transform: `scaleY(${to})`, transformOrigin: origin }], { duration: 480, delay: k * 45, easing: EIO, fill: 'forwards' }).finished));
    await go(0, 1, 'top');
    swap();
    await go(1, 0, 'bottom');
    bars.forEach((b) => b.getAnimations().forEach((a) => a.cancel()));
  };

  const go = async (target) => {
    const i = typeof target === 'string' ? ids.indexOf(target) : target;
    if (busy || i === cur || i < 0 || i >= n) return;
    const from = secs[cur], to = secs[i], dir = i > cur ? 1 : -1;
    const fx = FX[to.dataset.enter] || FX.zoom;
    busy = true;
    cur = i;
    chrome(i);
    if (reduce || !from) { from && close(from); open(to); }
    else if (fx.overlay) await slats(() => { close(from); open(to); });
    else {
      const dur = fx.dur || 1000;
      to.classList.add('is-entering');
      open(to);
      const a = to.animate(fx.in(dir), { duration: dur, easing: EIO });
      const b = from.animate((fx.out || OUT)(dir), { duration: dur, easing: EIO, fill: 'forwards' });
      await a.finished.catch(() => {});
      close(from);
      b.cancel();
      to.classList.remove('is-entering');
    }
    setTimeout(() => { busy = false; }, 120);
  };
  stage.go = go;

  // ── input ──
  const canScroll = (s, dir) => (dir > 0 ? s.scrollTop + s.clientHeight < s.scrollHeight - 2 : s.scrollTop > 1);
  const blocked = () => isMenuOpen() || $('.lightbox')?.open;
  let lastWheel = 0;
  addEventListener('wheel', (e) => {
    const now = performance.now(), gap = now - lastWheel;
    lastWheel = now;
    if (blocked() || busy || cur < 0 || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
    const dir = Math.sign(e.deltaY);
    if (!dir || canScroll(secs[cur], dir)) return;
    if (gap < 180) return; // trackpad momentum from the last gesture — wait for a fresh one
    go(cur + dir);
  }, { passive: true });

  let tx = 0, ty = 0, edgeUp = false, edgeDown = false;
  addEventListener('touchstart', (e) => {
    if (cur < 0) return;
    tx = e.touches[0].clientX; ty = e.touches[0].clientY;
    edgeUp = !canScroll(secs[cur], -1); edgeDown = !canScroll(secs[cur], 1);
  }, { passive: true });
  addEventListener('touchend', (e) => {
    if (blocked() || busy || cur < 0) return;
    const dx = tx - e.changedTouches[0].clientX, dy = ty - e.changedTouches[0].clientY;
    if (Math.abs(dy) < 56 || Math.abs(dx) > Math.abs(dy)) return;
    if (dy > 0 && edgeDown && !canScroll(secs[cur], 1)) go(cur + 1);
    else if (dy < 0 && edgeUp && !canScroll(secs[cur], -1)) go(cur - 1);
  }, { passive: true });

  addEventListener('keydown', (e) => {
    if (blocked() || cur < 0 || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.target.closest('input, textarea, select, [contenteditable], summary, button, .cert-rail')) return;
    const k = e.key;
    let dir = 0;
    if (k === 'ArrowDown' || k === 'PageDown' || (k === ' ' && !e.shiftKey)) dir = 1;
    else if (k === 'ArrowUp' || k === 'PageUp' || (k === ' ' && e.shiftKey)) dir = -1;
    else if (k === 'Home') { e.preventDefault(); go(0); return; }
    else if (k === 'End') { e.preventDefault(); go(n - 1); return; }
    if (!dir) return;
    const s = secs[cur];
    if (canScroll(s, dir)) { if (d.activeElement === body || !s.contains(d.activeElement)) { e.preventDefault(); s.scrollBy({ top: dir * s.clientHeight * 0.8, behavior: 'smooth' }); } return; }
    e.preventDefault();
    go(cur + dir);
  });
  hudBtns.forEach((b) => b.addEventListener('click', () => go(cur + +b.dataset.go)));
  addEventListener('hashchange', () => { const id = location.hash.slice(1); if (ids.includes(id)) go(id); });

  // ── boot ──
  const startId = ids.includes(location.hash.slice(1)) ? location.hash.slice(1) : ids[0];
  runIntro().then((part) => {
    go(startId);
    part?.();
  });
})();
