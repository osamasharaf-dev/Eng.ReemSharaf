/* Reveal: [data-r] elements get .in when they come into view. On the home stage a section
   that is not on screen is display:none, so its elements reveal as soon as it opens —
   and replay() resets them when it closes, so every visit animates again. */
const revealIO = new IntersectionObserver((es) => {
  for (const e of es) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('in');
    revealIO.unobserve(e.target);
  }
}, { rootMargin: '0px 0px -8% 0px' });
$$('[data-r]').forEach((el) => revealIO.observe(el));
$$('.cert').forEach((c, i) => c.style.setProperty('--k', i));
const replay = (sec) => $$('[data-r].in', sec).forEach((el) => { el.classList.remove('in'); revealIO.observe(el); });
