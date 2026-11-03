// 05 · Technical skills — light, dotted. No cards: every skill is an icon + label that
// floats on the background. Transition in: slats sweep across; icons then fly in and assemble.
import { SKILLS } from '../content.mjs';
import { esc, pad, heading } from '../lib.mjs';
import { icon, skillIcon, CATEGORY_ICON } from '../icons.mjs';

// deterministic scatter so the build output is stable
const scatter = (i) => {
  const a = (i * 137.508) % 360, r = 40 + ((i * 53) % 70);
  return `--dx:${Math.round(Math.cos((a * Math.PI) / 180) * r)}px;--dy:${Math.round(Math.sin((a * Math.PI) / 180) * r)}px;--rot:${((i * 47) % 50) - 25}deg`;
};

export default (p, { h }) => {
  const total = SKILLS.reduce((s, c) => s + c.items.length, 0);
  let n = 0;
  return `
<section id="skills" class="sec sec--skills" data-tone="light" data-enter="slats" aria-labelledby="t-skills">
  <div class="wrap">
    ${heading({ key: 'skills', num: '05', kicker: `${total} skills · ${SKILLS.length} areas`, title: 'Technical <span class="wine">Skills</span>', h })}
    <div class="skill-areas">
      ${SKILLS.map((s, i) => `<section class="skill-area" aria-labelledby="sk-${s.id}">
        <header class="skill-head" data-r="fade">
          <span class="skill-badge">${icon(CATEGORY_ICON[s.id] || 'spark')}</span>
          <h3 id="sk-${s.id}"><small>${pad(i + 1)}</small>${esc(s.title)}</h3>
          <span class="skill-count">${pad(s.items.length)}</span>
        </header>
        <ul class="skill-list" data-r="assemble">${s.items.map((it, j) => `<li class="skill" style="${scatter(n++)};--j:${j}">${skillIcon(it)}<span>${esc(it)}</span></li>`).join('')}</ul>
      </section>`).join('')}
    </div>
  </div>
</section>`;
};
