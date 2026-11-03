// 06 · Education — blush. Transition in: pushes in sideways.
import { EDUCATION } from '../content.mjs';
import { esc, heading } from '../lib.mjs';
import { icon } from '../icons.mjs';

export default (p, { h }) => `
<section id="education" class="sec sec--education" data-tone="light" data-enter="push" aria-labelledby="t-education">
  <div class="wrap">
    ${heading({ key: 'education', num: '06', kicker: 'Degrees', title: 'Edu<span class="wine">cation</span>', h })}
    <div class="edu-ruler" data-r="draw" aria-hidden="true">
      <span style="--x:0%">2013</span><span style="--x:28%">2018</span><span style="--x:72%">2025</span><span class="now" style="--x:100%">Present</span>
      <i class="seg" style="--a:0%;--b:28%"></i><i class="seg seg--live" style="--a:72%;--b:100%"></i>
    </div>
    <div class="edu-list">
      ${EDUCATION.map((e, i) => `<article class="edu${e.end ? '' : ' edu--live'}" data-r="${i % 2 ? 'right' : 'left'}">
        <span class="edu-big" aria-hidden="true">${esc(e.short)}</span>
        <div class="edu-text">
          <p class="edu-period">${esc(e.period)}<span class="edu-status">${e.end ? icon('check') : '<span class="pulse" aria-hidden="true"></span>'}${esc(e.status)}</span></p>
          <h3 class="edu-degree">${esc(e.degree)}</h3>
          <p class="edu-spec">${esc(e.spec)}</p>
          <p class="edu-school">${icon('cap')}${esc(e.school)}</p>
        </div>
      </article>`).join('')}
    </div>
  </div>
</section>`;
