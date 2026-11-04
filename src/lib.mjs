// Small helpers shared by the layout and every section module.
import { SITE } from './content.mjs';

export const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const pad = (n) => String(n).padStart(2, '0');
export const abs = (p) => SITE.url + p;
export const pageUrl = (p) => SITE.url + (p.slug ? '/' + p.slug : '/');
export const pagePath = (p) => (p.slug ? '/' + p.slug : '/');
// in-page anchor on the one-page experience
export const sectionHref = (p) => (p.key === 'home' ? '/#home' : '/#' + p.key);
export const certImg = (name, thumb = false) => `/assets/img/certificates/${name}${thumb ? '-thumb' : ''}.webp`;

// split text into word spans (used by scroll-linked text reveals); text stays readable for crawlers
export const words = (text) => {
  const list = String(text).split(/\s+/);
  return { n: list.length, html: list.map((w, i) => `<span class="w" style="--i:${i}">${esc(w)}</span>`).join(' ') };
};
// split text into character spans for the hero name
export const chars = (text, offset = 0) => [...text].map((c, i) => `<span class="ch" style="--i:${i + offset}">${esc(c)}</span>`).join('');

export const portrait = ({ cls = '', sizes = '(max-width: 900px) 70vw, 34vw', eager = false } = {}) =>
  `<img class="${cls}" src="/assets/img/reem-sharaf-ai-researcher-lecturer.webp" srcset="/assets/img/reem-sharaf-ai-researcher-lecturer-608.webp 608w, /assets/img/reem-sharaf-ai-researcher-lecturer.webp 960w" sizes="${sizes}" width="960" height="1200" alt="Reem Sharaf (ريم شرف), Software Engineer, AI Researcher and University Lecturer" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

// Section heading used by every section except the hero.
// `h` is 'h1' on the section's own page and 'h2' inside the one-page home.
export const heading = ({ key, num, kicker, title, h = 'h2', cls = '' }) => `
<header class="sec-head ${cls}">
  <p class="kicker" data-r="fade"><span class="kicker-num">${num}</span><span class="kicker-line" aria-hidden="true"></span>${esc(kicker)}</p>
  <${h} class="sec-title" id="t-${key}" data-r="rise">${title}</${h}>
</header>`;
