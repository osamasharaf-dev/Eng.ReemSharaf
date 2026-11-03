// 09 · Contact — wine. Transition in: a rounded window blooms to full screen.
import { PERSON, SITE } from '../content.mjs';
import { esc } from '../lib.mjs';
import { icon } from '../icons.mjs';

const row = (ico, label, value, href, extra = '') => `<li class="crow" data-r="rise">
  <span class="crow-ico">${icon(ico)}</span>
  <span class="crow-label">${label}</span>
  ${href ? `<a class="crow-value" href="${href}"${href.startsWith('http') ? ' target="_blank" rel="me noopener"' : ''}>${esc(value)}</a>` : `<span class="crow-value">${esc(value)}</span>`}
  ${extra || (href ? `<span class="crow-go" aria-hidden="true">${icon('out')}</span>` : '')}
</li>`;

export default (p, { h }) => `
<section id="contact" class="sec sec--contact" data-tone="wine" data-enter="bloom" aria-labelledby="t-contact">
  <div class="wrap contact">
    <p class="kicker" data-r="fade"><span class="kicker-num">09</span><span class="kicker-line" aria-hidden="true"></span>Contact</p>
    <${h} class="contact-title" id="t-contact"><span class="line" data-r="rise">Let's</span><span class="line line--out" data-r="rise" style="--d:120">connect</span></${h}>
    <p class="contact-lead" data-r="fade">Research collaborations, teaching, AI and software engineering — reach Eng. Reem Sharaf directly.</p>
    <ul class="crows">
      ${row('mail', 'Email', PERSON.email, 'mailto:' + PERSON.email, `<button type="button" class="round round--sm" data-copy="${PERSON.email}" aria-label="Copy email address">${icon('copy')}</button>`)}
      ${row('in', 'LinkedIn', PERSON.linkedinLabel, PERSON.linkedin)}
      ${row('phone', 'Phone', PERSON.phone, 'tel:' + PERSON.phoneHref)}
      ${row('pin', 'Location', PERSON.location, '')}
    </ul>
    <div class="cta-row" data-r="rise"><a class="btn btn-light" href="${SITE.cv}" download="Reem_Sharaf_CV.pdf">${icon('dl')}<span>Download CV (PDF)</span></a><a class="btn btn-line" href="/#home"><span>Back to top</span>${icon('up')}</a></div>
  </div>
</section>`;
