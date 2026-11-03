/* Navigation shared by every page: menu, current-section labels.
   On the home stage, links to /#section call stage.go(); elsewhere the page scrolls normally. */
const menuBtn = $('.menu-btn'), menu = $('#menu'), topbar = $('.topbar');
const isMenuOpen = () => body.classList.contains('menu-open');
const setMenu = (open) => {
  body.classList.toggle('menu-open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menu.inert = !open;
  if (open) $('.menu-list a', menu)?.focus({ preventScroll: true });
};
menu.inert = true;
menuBtn.addEventListener('click', () => setMenu(!isMenuOpen()));
addEventListener('keydown', (e) => { if (e.key === 'Escape' && isMenuOpen()) { setMenu(false); menuBtn.focus(); } });

d.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="/#"]');
  if (!a || !isHome || !stage.go || e.metaKey || e.ctrlKey || e.shiftKey) return;
  const id = a.getAttribute('href').slice(2);
  if (!d.getElementById(id)) return;
  e.preventDefault();
  const wasOpen = isMenuOpen();
  if (wasOpen) setMenu(false);
  setTimeout(() => stage.go(id), wasOpen ? 300 : 0);
});

// current section → menu, rail and the label in the top bar
const nowNum = $('.now-num'), nowLabel = $('.now-label'), now = $('.now');
const labels = Object.fromEntries($$('.menu-list a').map((a, i) => [a.dataset.key, [String(i).padStart(2, '0'), a.querySelector('.menu-label').textContent]]));
let current = null;
const setCurrent = (key) => {
  if (!key || key === current) return;
  current = key;
  $$('.menu-list a, .rail a').forEach((a) => (a.dataset.key === key ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
  if (isHome && labels[key]) {
    nowNum.textContent = labels[key][0];
    nowLabel.textContent = labels[key][1];
    now.classList.remove('swap'); void now.offsetWidth; now.classList.add('swap');
  }
};

// standalone pages scroll normally: header tone follows the section under it, progress bar, auto-hide
if (!isHome) {
  const toneIO = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) body.dataset.tone = e.target.dataset.tone || 'light'; }), { rootMargin: '0px 0px -94% 0px' });
  const foot = $('.foot');
  if (foot) foot.dataset.tone = 'dark';
  [...$$('main > .sec, main > .pager'), foot].forEach((s) => s && toneIO.observe(s));
  const bar = $('.progress span');
  let docH = root.scrollHeight - vh, lastY = scrollY;
  const measure = () => { docH = root.scrollHeight - vh; };
  resizers.push(measure);
  new ResizeObserver(measure).observe(body);
  everyFrame.add(() => {
    const y = scrollY;
    bar.style.setProperty('--p', docH > 0 ? (y / docH).toFixed(4) : 0);
    if (Math.abs(y - lastY) > 6) { topbar.classList.toggle('is-hidden', y > lastY && y > vh * 0.6); lastY = y; }
  });
  tick();
}
