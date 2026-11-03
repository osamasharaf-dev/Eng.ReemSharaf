// 08 · FAQ — light. Transition in: zooms through.
import { FAQ } from '../content.mjs';
import { esc, pad, heading } from '../lib.mjs';

export default (p, { h }) => `
<section id="faq" class="sec sec--faq" data-tone="light" data-enter="zoom" aria-labelledby="t-faq">
  <div class="wrap faq">
    <div class="faq-side">
      ${heading({ key: 'faq', num: '08', kicker: 'Frequently asked questions', title: 'Who is <span class="wine">Reem Sharaf?</span>', h })}
      <p class="faq-note" data-r="fade">Short, factual answers — straight from the CV.</p>
      <span class="faq-mark" aria-hidden="true">?</span>
    </div>
    <div class="faq-list">
      ${FAQ.map((f, i) => {
        const ar = /[؀-ۿ]/.test(f.q);
        return `<details class="qa" data-r="rise" style="--d:${i * 60}"${i === 0 ? ' open' : ''}${ar ? ' lang="ar" dir="rtl"' : ''}><summary><span class="qa-num">${pad(i + 1)}</span><h3 class="qa-q">${esc(f.q)}</h3><span class="qa-icon" aria-hidden="true"></span></summary><div class="qa-a"><p>${esc(f.a)}</p></div></details>`;
      }).join('')}
    </div>
  </div>
</section>`;
