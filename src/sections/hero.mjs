// 00 · Hero — only on the one-page home. Transition in: doors part from the centre; letters rise out of a mask.
import { PERSON, SITE, STRENGTHS, AR } from '../content.mjs';
import { esc, chars, portrait } from '../lib.mjs';
import { icon } from '../icons.mjs';

const TYPED = ['training & fine-tuning LLMs', 'fine-tuning Qwen3-8B for Arabic lectures', 'building multi-agent AI workflows', 'teaching Software Engineering & Compiler Design', 'evaluating with ROUGE · METEOR · BERTScore'];

export default () => `
<section id="home" class="sec sec--hero" data-tone="light" data-enter="doors" aria-labelledby="t-home">
  <div class="hero-bg" aria-hidden="true"><span class="hero-grid"></span><span class="hero-glow"></span></div>
  <div class="wrap hero">
    <div class="hero-text">
      <p class="hero-eyebrow"><span class="pulse" aria-hidden="true"></span>${esc(PERSON.location)} · ${PERSON.years} years of academic experience</p>
      <h1 class="hero-name" id="t-home" aria-label="Reem Sharaf">
        <span class="line" aria-hidden="true">${chars('REEM')}</span>
        <span class="line line--wine" aria-hidden="true">${chars('SHARAF', 4)}</span>
      </h1>
      <p class="hero-ar" lang="ar" dir="rtl"><strong>المهندسة ${esc(AR.name)}</strong> · ${esc(AR.summary.split('،')[0])}</p>
      <p class="hero-roles">${PERSON.roles.map((r) => `<span>${esc(r)}</span>`).join('<i aria-hidden="true">/</i>')}</p>
      <p class="hero-typed"><span class="prompt" aria-hidden="true">&gt;_</span> <span class="typed" data-words='${esc(JSON.stringify(TYPED))}'>${esc(TYPED[0])}</span><span class="caret" aria-hidden="true"></span></p>
      <div class="cta-row">
        <a class="btn btn-wine" href="/#projects"><span>Explore Key Projects</span>${icon('arrow')}</a>
        <a class="btn btn-ghost" href="${SITE.cv}" download="Reem_Sharaf_CV.pdf">${icon('dl')}<span>Download CV</span></a>
      </div>
    </div>
    <div class="hero-visual">
      <span class="hero-disc" aria-hidden="true"></span>
      <span class="hero-ring" aria-hidden="true"></span>
      <div class="hero-photo">${portrait({ cls: 'hero-img', eager: true })}</div>
      <span class="chip chip--a" aria-hidden="true">LLMs · Fine-Tuning</span>
      <span class="chip chip--b chip--wine" aria-hidden="true">Qwen3-8B</span>
      <span class="chip chip--c" aria-hidden="true">Multi-Agent AI</span>
      <span class="chip chip--d chip--ink" aria-hidden="true">Python · C# · C++ · Java</span>
    </div>
  </div>
  <ul class="wrap hero-stats">
    ${STRENGTHS.map((s, i) => `<li style="--i:${i}"><strong>${esc(s.n)}</strong><span>${esc(s.l)}</span></li>`).join('')}
  </ul>
  <a class="scroll-cue" href="/#about" aria-label="Scroll to the summary"><span>Scroll</span><i aria-hidden="true"></i></a>
</section>`;
