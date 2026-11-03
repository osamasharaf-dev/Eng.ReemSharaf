// 07 · Certifications & recognition — dark gallery. Transition in: a shutter opens from the centre line; frames swing in on a 3D axis.
import { CERTIFICATIONS, RECOGNITION, LETTERS } from '../content.mjs';
import { esc, pad, certImg, heading } from '../lib.mjs';
import { icon } from '../icons.mjs';

const item = (c, { badge = '' } = {}) => `<li class="cert${c.img ? '' : ' cert--text'}">
  ${c.img
    ? `<button type="button" class="cert-frame" data-full="${certImg(c.img)}" data-caption="${esc(c.title)} — ${esc(c.issuer)} · ${esc(c.date)}" aria-label="Enlarge: ${esc(c.title)}"><img src="${certImg(c.img, true)}" width="640" height="485" alt="${esc(c.title)} — ${esc(c.issuer)}, issued to Reem Sharaf" loading="lazy" decoding="async"><span class="cert-zoom">${icon('zoom')}</span></button>`
    : `<div class="cert-frame cert-frame--text" aria-hidden="true">${icon('award')}<span>${esc(c.date.split(' ')[1])}</span></div>`}
  <div class="cert-cap">
    <p class="cert-meta">${badge ? `<b>${badge}</b> · ` : ''}${esc(c.issuer)} · ${esc(c.date)}</p>
    <h3 class="cert-title">${esc(c.title)}</h3>
    ${c.verify ? `<a class="link-out" href="${c.verify}" target="_blank" rel="noopener">Verify on Coursera ${icon('out')}</a>` : ''}
  </div>
</li>`;

export default (p, { h }) => `
<section id="certifications" class="sec sec--certifications" data-tone="dark" data-enter="shutter" aria-labelledby="t-certifications">
  <div class="wrap cert-top">
    ${heading({ key: 'certifications', num: '07', kicker: `${pad(CERTIFICATIONS.length)} certifications · ${pad(RECOGNITION.length)} recognition`, title: 'Certifications <span class="rose">&amp; Recognition</span>', h })}
    <div class="cert-nav"><button type="button" class="round" data-step="-1" aria-label="Previous">${icon('arrow', 'i flip')}</button><button type="button" class="round" data-step="1" aria-label="Next">${icon('arrow')}</button></div>
  </div>
  <ul class="cert-rail" data-r="flip" tabindex="0" aria-label="Certificates gallery">
    ${RECOGNITION.map((r) => item(r, { badge: 'Recognition' })).join('')}
    ${LETTERS.map((l) => item(l, { badge: 'Official letter' })).join('')}
    ${CERTIFICATIONS.filter((c) => c.img).map((c) => item(c)).join('')}
    ${CERTIFICATIONS.filter((c) => !c.img).map((c) => item(c)).join('')}
  </ul>
</section>`;
