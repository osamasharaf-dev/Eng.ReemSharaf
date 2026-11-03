// 01 · Summary — light. Transition in: drops from the top. Inside, the lead statement lights up word by word.
import { SUMMARY, LANGUAGES, KEY_STRENGTHS, PERSON } from '../content.mjs';
import { esc, pad, words, portrait, heading } from '../lib.mjs';

export default (p, { h }) => {
  const lead = words(SUMMARY.lead);
  return `
<section id="about" class="sec sec--about" data-tone="light" data-enter="drop" aria-labelledby="t-about">
  <div class="wrap">
    ${heading({ key: 'about', num: '01', kicker: 'About Reem Sharaf', title: 'Professional <span class="wine">Summary</span>', h })}
    <p class="statement" style="--n:${lead.n}" data-scroll="words">${lead.html}</p>
    <div class="about-grid">
      <aside class="about-side">
        <div class="about-photo" data-r="scale">${portrait({ cls: 'about-img', sizes: '(max-width: 900px) 40vw, 20vw' })}<span class="about-years" aria-hidden="true">${PERSON.years}<small>years</small></span></div>
        <div class="langs" data-r="rise">
          <h3 class="mini">Languages</h3>
          ${LANGUAGES.map((l) => `<div class="lang"><p><strong>${esc(l.name)}</strong><span>${esc(l.level)}</span></p><span class="meter" style="--w:${l.pct}%"></span></div>`).join('')}
        </div>
      </aside>
      <div class="about-main">
        <p class="about-body" data-r="rise">${esc(SUMMARY.body)}</p>
        <h3 class="mini" data-r="fade">Key strengths</h3>
        <ol class="strengths">
          ${KEY_STRENGTHS.map(([t, d], i) => `<li data-r="rise" style="--d:${(i % 3) * 80}"><span class="strength-num">${pad(i + 1)}</span><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join('')}
        </ol>
      </div>
    </div>
  </div>
</section>`;
};
