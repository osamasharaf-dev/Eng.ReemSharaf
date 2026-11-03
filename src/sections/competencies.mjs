// 02 · Core competencies — dark. Transition in: an iris opens from the centre.
import { COMPETENCIES } from '../content.mjs';
import { esc, pad, heading } from '../lib.mjs';
import { skillIcon } from '../icons.mjs';

const GROUPS = [['ai', 'AI & LLMs'], ['eng', 'Engineering'], ['acad', 'Academic']];

export default (p, { h }) => {
  let n = 0;
  return `
<section id="competencies" class="sec sec--competencies" data-tone="dark" data-enter="iris" aria-labelledby="t-competencies">
  <p class="comp-ghost" aria-hidden="true" data-scroll="drift">COMPETENCIES · COMPETENCIES</p>
  <div class="wrap">
    ${heading({ key: 'competencies', num: '02', kicker: `${COMPETENCIES.length} areas`, title: 'Core <span class="rose">Competencies</span>', h })}
    <div class="comp-cols">
      ${GROUPS.map(([g, label], gi) => {
        const items = COMPETENCIES.filter((c) => c.group === g);
        return `<div class="comp-col" data-r="rise" style="--d:${gi * 120}">
        <h3 class="comp-group"><span>${esc(label)}</span><small>${pad(items.length)}</small></h3>
        <ul>${items.map((c) => `<li class="comp"><span class="comp-num">${pad(++n)}</span><span class="comp-ico">${skillIcon(c.name)}</span><span class="comp-name">${esc(c.name)}</span></li>`).join('')}</ul>
      </div>`;
      }).join('')}
    </div>
  </div>
</section>`;
};
