// 03 · Experience — light. Transition in: unfolds from the top-left corner. The timeline line fills as you scroll.
import { EXPERIENCE } from '../content.mjs';
import { esc, pad, heading } from '../lib.mjs';

const years = (e) => [String(e.start), e.end ? String(e.end) : 'Now'];

export default (p, { h }) => `
<section id="experience" class="sec sec--experience" data-tone="light" data-enter="corner" aria-labelledby="t-experience">
  <div class="wrap">
    ${heading({ key: 'experience', num: '03', kicker: 'Career timeline', title: 'Experi<span class="wine">ence</span>', h })}
    <ol class="tl" data-scroll="line">
      <li class="tl-track" aria-hidden="true"><span class="tl-fill"></span></li>
      ${EXPERIENCE.map((e) => {
        const [a, b] = years(e);
        return `<li class="tl-item">
        <div class="tl-when" data-r="left"><span class="tl-years">${a}<i>→</i>${b}</span><span class="tl-period">${esc(e.period)}</span><span class="tl-place">${esc(e.mode)} · ${esc(e.place)}</span></div>
        <span class="tl-node" data-r="pop" aria-hidden="true"></span>
        <article class="tl-body" data-r="right">
          <h3 class="tl-role">${esc(e.role)}</h3>
          <p class="tl-org">${esc(e.org)}</p>
          <ul class="tl-points">${e.points.map((pt, j) => `<li><span aria-hidden="true">${pad(j + 1)}</span>${esc(pt)}</li>`).join('')}</ul>
          ${e.courses.length ? `<p class="tl-courses"><span class="mini">Courses taught</span>${e.courses.map((c) => `<span class="tag">${esc(c)}</span>`).join('')}</p>` : ''}
        </article>
      </li>`;
      }).join('')}
    </ol>
  </div>
</section>`;
