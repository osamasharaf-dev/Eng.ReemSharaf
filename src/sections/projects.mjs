// 04 · Key projects — wine. Transition in: turns like a magazine page. On large screens the
// section pins and the projects travel sideways as you scroll.
import { PROJECTS } from '../content.mjs';
import { esc, pad, heading } from '../lib.mjs';

const pipeline = (t) => `<figure class="diagram diagram--pipe" aria-label="Thesis pipeline">
  <figcaption class="mini">pipeline · lecture_generation.ar</figcaption>
  <ol>${t.pipeline.map((s, i) => `<li style="--i:${i}"><span class="pipe-node">${pad(i + 1)}</span><span class="pipe-k">${esc(s.k)}</span><span class="pipe-v">${esc(s.v)}</span></li>`).join('')}</ol>
</figure>`;

const arch = (m) => `<figure class="diagram diagram--arch" aria-label="Microservices architecture">
  <figcaption class="mini">architecture · e-commerce</figcaption>
  <div class="arch-client">Client</div>
  <div class="arch-gw">Ocelot API Gateway<small>routing · auth · load balancing</small></div>
  <div class="arch-services">${m.services.map((s, i) => `<span style="--i:${i}">${esc(s)}<small>service</small></span>`).join('')}</div>
  <div class="arch-bus"><span>RabbitMQ · async messaging · Round Robin</span><i></i><i></i><i></i></div>
</figure>`;

export default (p, { h }) => `
<section id="projects" class="sec sec--projects" data-tone="wine" data-enter="page" aria-labelledby="t-projects">
  <div class="proj-pin">
    <div class="proj-stage">
      <div class="wrap proj-top">
        ${heading({ key: 'projects', num: '04', kicker: 'Research & engineering', title: 'Key <span class="rose">Projects</span>', h })}
        <div class="proj-meter" aria-hidden="true"><span class="proj-count"><b>01</b> / ${pad(PROJECTS.length)}</span><span class="proj-bar"><i></i></span></div>
      </div>
      <div class="proj-track">
        ${PROJECTS.map((x, i) => `<article class="proj" aria-labelledby="proj-${x.id}">
          <div class="proj-text" data-r="rise">
            <p class="proj-kind"><span>${pad(i + 1)}</span>${esc(x.kind)}${x.id === 'thesis' ? ` · ${esc(x.status)}` : ''}</p>
            <h3 class="proj-title" id="proj-${x.id}">${esc(x.title)}</h3>
            <p class="proj-body">${esc(x.text)}</p>
            <p class="proj-tags">${x.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</p>
          </div>
          <div class="proj-visual" data-r="fade" style="--d:150">${x.pipeline ? pipeline(x) : arch(x)}</div>
        </article>`).join('')}
      </div>
    </div>
  </div>
</section>`;
