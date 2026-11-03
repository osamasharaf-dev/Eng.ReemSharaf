// Static site generator — zero dependencies.  `node build.mjs`  →  ./dist
import { mkdirSync, writeFileSync, readFileSync, readdirSync, cpSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderPage, render404, PAGES, pageUrl } from './src/templates.mjs';
import { submitIndexNow } from './indexnow.mjs';
import { SITE, PERSON, SUMMARY, COMPETENCIES, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS, RECOGNITION, LETTERS, LANGUAGES, FAQ, AR } from './src/content.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'dist');
const today = new Date().toISOString().slice(0, 10);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

// static files
if (existsSync(join(ROOT, 'public'))) cpSync(join(ROOT, 'public'), OUT, { recursive: true });

const write = (file, data) => { const p = join(OUT, file); mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, data); console.log('  ✓', file); };

// CSS: base layers, then one file per section in page order → one stylesheet
const read = (p) => readFileSync(join(ROOT, p), 'utf8');
const css = [...['base', 'chrome', 'motion', 'stage'].map((n) => `src/styles/${n}.css`), ...PAGES.map((p) => `src/styles/sections/${p.key}.css`)]
  .filter((p) => existsSync(join(ROOT, p)))
  .map(read).join('\n')
  .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\n\s*\n/g, '\n');
write('assets/css/site.css', css);

// JS: every module in src/scripts (sorted, core first) → one deferred script
const scripts = readdirSync(join(ROOT, 'src/scripts')).filter((f) => f.endsWith('.js')).sort();
const js = scripts.map((f) => '// ── ' + f + '\n' + read('src/scripts/' + f)).join('\n');
write('assets/js/app.js', "(() => {\n'use strict';\n" + js + '\n})();\n');

// pages
for (const p of PAGES) write(p.slug ? `${p.slug}/index.html` : 'index.html', renderPage(p));
write('404.html', render404());

// sitemap.xml (with image + hreflang annotations)
const img = (loc, title) => `<image:image><image:loc>${SITE.url}${loc}</image:loc><image:title>${title}</image:title></image:image>`;
const urls = [
  ...PAGES.map((p, i) => ({ loc: pageUrl(p), pr: i === 0 ? '1.0' : p.key === 'faq' ? '0.9' : '0.8', freq: i === 0 ? 'weekly' : 'monthly', alt: i === 0, imgs: i === 0 || p.key === 'about' || p.key === 'contact' ? [img(SITE.image, 'Reem Sharaf — Software Engineer, AI Researcher and University Lecturer')] : p.key === 'certifications' ? [...CERTIFICATIONS.filter((c) => c.img), ...RECOGNITION].map((c) => img(`/assets/img/certificates/${c.img}.webp`, `${c.title} — Reem Sharaf`.replace(/&/g, '&amp;'))) : [] }))
];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.pr}</priority>${u.alt ? `
    <xhtml:link rel="alternate" hreflang="en" href="${SITE.url}/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}/"/>` : ''}${u.imgs.map((x) => '\n    ' + x).join('')}
  </url>`).join('\n')}
</urlset>
`);

// robots.txt — open to search engines and AI answer engines
const bots = ['Googlebot', 'Bingbot', 'DuckDuckBot', 'YandexBot', 'Applebot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'meta-externalagent', 'Bytespider', 'cohere-ai', 'YouBot', 'DuckAssistBot'];
write('robots.txt', `# Reem Sharaf — ${SITE.url}
User-agent: *
Allow: /

${bots.map((b) => `User-agent: ${b}\nAllow: /`).join('\n\n')}

Sitemap: ${SITE.url}/sitemap.xml
`);

// llms.txt (GEO / AEO — a clean summary for AI assistants)
const pageList = PAGES.map((p) => `- [${p.label}](${pageUrl(p)}): ${p.desc}`).join('\n');
write('llms.txt', `# Reem Sharaf (ريم شرف)

> ${PERSON.headline}. ${SUMMARY.lead} Based in ${PERSON.location}. Official website: ${SITE.url}

Also known as: ${PERSON.alternateNames.join(', ')}.

## Key facts
- Current role: University Lecturer at Al-Kalamoon Private University (on-site, Syria), Sep 2019 – present.
- Teaches: ${EXPERIENCE[0].courses.join(', ')}.
- Research: Master's thesis — "${PROJECTS[0].title}" (fine-tuned and evaluated Qwen3-8B; results being prepared for scientific publication).
- Education: ${EDUCATION.map((e) => `${e.degree}, ${e.spec}, ${e.school} (${e.period})`).join('; ')}.
- Programming languages: Python, C#, C++, Java.
- Languages: ${LANGUAGES.map((l) => `${l.name} (${l.level})`).join(', ')}.
- Contact: ${PERSON.email} · ${PERSON.phone} · ${PERSON.linkedin}

## Pages
${pageList}

## Optional
- [Full profile for LLMs](${SITE.url}/llms-full.txt)
- [CV (PDF)](${SITE.url}${SITE.cv})
`);

write('llms-full.txt', `# Reem Sharaf — full profile
Arabic name: ريم شرف (المهندسة ريم شرف). Full name: ${PERSON.fullName}.
${PERSON.headline}
Location: ${PERSON.location} · Email: ${PERSON.email} · Phone: ${PERSON.phone} · LinkedIn: ${PERSON.linkedin}
Website: ${SITE.url}

## Professional Summary
${SUMMARY.lead} ${SUMMARY.body}

## Core Competencies
${COMPETENCIES.map((c) => '- ' + c.name).join('\n')}

## Experience
${EXPERIENCE.map((e) => `### ${e.role} — ${e.org} (${e.mode}, ${e.place}) · ${e.period}\n${e.points.map((x) => '- ' + x).join('\n')}`).join('\n\n')}

## Key Projects
${PROJECTS.map((x) => `### ${x.title} (${x.kind})\n${x.text}`).join('\n\n')}

## Technical Skills
${SKILLS.map((s) => `- ${s.title}: ${s.items.join(', ')}`).join('\n')}

## Education
${EDUCATION.map((e) => `- ${e.degree} | ${e.spec} | ${e.school} | ${e.period}`).join('\n')}

## Certifications
${CERTIFICATIONS.map((c) => `- ${c.title} | ${c.issuer} | ${c.date}${c.verify ? ' | verify: ' + c.verify : ''}`).join('\n')}

## Recognition
${RECOGNITION.map((r) => `- ${r.title} | ${r.issuer} | ${r.date}`).join('\n')}

## Official letters
${LETTERS.map((l) => `- ${l.title} | ${l.issuer} | ${l.date}`).join('\n')}

## Languages
${LANGUAGES.map((l) => `- ${l.name} (${l.level})`).join('\n')}

## FAQ
${FAQ.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}

## الملف بالعربية
${AR.name} — ${AR.headline} — ${AR.location}
${AR.summary}
`);

write('humans.txt', `/* TEAM */
Owner: Reem Sharaf (ريم شرف)
Role: ${PERSON.headline}
Contact: ${PERSON.email}
From: ${PERSON.location}

/* SITE */
Last update: ${today}
Language: English / Arabic
Standards: HTML5, CSS3, schema.org JSON-LD
`);

write('manifest.webmanifest', JSON.stringify({
  name: 'Reem Sharaf — Software Engineer & AI Researcher', short_name: 'Reem Sharaf', description: PAGES[0].desc,
  start_url: '/', scope: '/', display: 'standalone', background_color: '#EDECED', theme_color: SITE.themeColor, lang: 'en',
  icons: [
    { src: '/assets/img/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/assets/img/icon-512.png', sizes: '512x512', type: 'image/png' },
    { src: '/assets/img/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
  ]
}, null, 2));

// IndexNow key file (proves we own the host when pinging IndexNow)
if (SITE.indexNowKey) write(`${SITE.indexNowKey}.txt`, SITE.indexNowKey);

console.log(`\nBuilt ${PAGES.length + 1} pages → dist/`);

// production deploys on Vercel: ask Bing & co. to recrawl right away
if (process.env.VERCEL_ENV === 'production') await submitIndexNow();
