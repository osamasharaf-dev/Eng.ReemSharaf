// <head> and schema.org JSON-LD for every page.
import { SITE, PERSON, SUMMARY, COMPETENCIES, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS, RECOGNITION, FAQ } from './content.mjs';
import { esc, abs, pageUrl } from './lib.mjs';

const personLD = () => ({
  '@type': 'Person',
  '@id': SITE.url + '/#person',
  name: PERSON.name,
  givenName: 'Reem',
  familyName: 'Sharaf',
  additionalName: 'Abdulhalim',
  alternateName: PERSON.alternateNames,
  honorificPrefix: 'Eng.',
  jobTitle: PERSON.roles,
  description: SUMMARY.lead + ' ' + SUMMARY.body,
  url: SITE.url + '/',
  image: abs(SITE.image),
  email: 'mailto:' + PERSON.email,
  telephone: PERSON.phoneHref,
  address: { '@type': 'PostalAddress', addressLocality: 'Damascus', addressCountry: 'SY' },
  nationality: { '@type': 'Country', name: 'Syria' },
  knowsLanguage: [{ '@type': 'Language', name: 'Arabic', alternateName: 'ar' }, { '@type': 'Language', name: 'English', alternateName: 'en' }],
  worksFor: { '@type': 'CollegeOrUniversity', name: 'Al-Kalamoon Private University', alternateName: ['University of Kalamoon', 'جامعة القلمون الخاصة'], address: { '@type': 'PostalAddress', addressCountry: 'SY' } },
  hasOccupation: [
    { '@type': 'Occupation', name: 'University Lecturer', occupationLocation: { '@type': 'Country', name: 'Syria' }, skills: EXPERIENCE[0].courses.join(', ') },
    { '@type': 'Occupation', name: 'Software Engineer' },
    { '@type': 'Occupation', name: 'AI Researcher & Developer' }
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Damascus University', alternateName: 'جامعة دمشق' },
    { '@type': 'CollegeOrUniversity', name: 'Syrian Virtual University', alternateName: 'الجامعة الافتراضية السورية' }
  ],
  knowsAbout: [...new Set([...COMPETENCIES.map((c) => c.name), ...SKILLS.flatMap((s) => s.items)])],
  hasCredential: [
    ...EDUCATION.map((e) => ({ '@type': 'EducationalOccupationalCredential', name: e.degree + ' — ' + e.spec, credentialCategory: 'degree', recognizedBy: { '@type': 'CollegeOrUniversity', name: e.school } })),
    ...CERTIFICATIONS.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c.title, credentialCategory: 'certificate', dateCreated: c.iso, recognizedBy: { '@type': 'Organization', name: c.issuer }, ...(c.verify ? { url: c.verify } : {}) }))
  ],
  award: RECOGNITION.map((r) => `${r.title} — ${r.issuer} (${r.date})`),
  sameAs: [PERSON.linkedin.replace('https://', 'https://www.')]
});

const websiteLD = () => ({
  '@type': 'WebSite', '@id': SITE.url + '/#website', url: SITE.url + '/', name: 'Reem Sharaf', alternateName: ['ريم شرف', 'Reem Sharaf Portfolio'],
  inLanguage: ['en', 'ar'], publisher: { '@id': SITE.url + '/#person' }, about: { '@id': SITE.url + '/#person' }
});

const breadcrumbLD = (p) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Reem Sharaf', item: SITE.url + '/' },
    ...(p.slug ? [{ '@type': 'ListItem', position: 2, name: p.label || p.title, item: pageUrl(p) }] : [])
  ]
});

const pageLD = (p) => {
  const home = p.key === 'home';
  const graph = [personLD(), websiteLD()];
  graph.push({
    '@type': home ? 'ProfilePage' : (p.key === 'faq' ? 'FAQPage' : 'WebPage'),
    '@id': pageUrl(p) + '#webpage', url: pageUrl(p), name: p.title, description: p.desc, inLanguage: 'en',
    isPartOf: { '@id': SITE.url + '/#website' }, about: { '@id': SITE.url + '/#person' },
    ...(home ? { mainEntity: { '@id': SITE.url + '/#person' } } : {}),
    primaryImageOfPage: { '@type': 'ImageObject', url: abs(SITE.image) },
    dateModified: new Date().toISOString().slice(0, 10),
    ...(p.key === 'faq' ? { mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) } : {})
  });
  graph.push(breadcrumbLD(p));
  if (p.key === 'projects' || home) {
    graph.push({ '@type': 'Thesis', name: PROJECTS[0].title, description: PROJECTS[0].text, author: { '@id': SITE.url + '/#person' }, inSupportOf: "Master's Degree in Web Science (Artificial Intelligence), Syrian Virtual University", inLanguage: 'en', keywords: PROJECTS[0].tags.join(', '), creativeWorkStatus: 'In preparation for scientific publication' });
    graph.push({ '@type': 'CreativeWork', name: PROJECTS[1].title, description: PROJECTS[1].text, author: { '@id': SITE.url + '/#person' }, keywords: PROJECTS[1].tags.join(', ') });
  }
  if (p.key === 'certifications') {
    graph.push({ '@type': 'ItemList', name: 'Certifications of Reem Sharaf', itemListElement: CERTIFICATIONS.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: `${c.title} — ${c.issuer} (${c.date})`, ...(c.verify ? { url: c.verify } : {}) })) });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
};

export const head = (p, { build, noindex = false } = {}) => `<!doctype html>
<html lang="en" dir="ltr" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.desc)}">
<meta name="author" content="Reem Sharaf">
<meta name="keywords" content="Reem Sharaf, ريم شرف, المهندسة ريم شرف, Eng. Reem Sharaf, Reem Abdulhalim Sharaf, Software Engineer, AI Researcher, University Lecturer, Al-Kalamoon Private University, Large Language Models, LLM fine-tuning, Qwen3-8B, Arabic NLP, Damascus, Syria">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}">
<meta name="theme-color" content="${SITE.themeColor}">
<meta name="color-scheme" content="light">
${noindex ? '' : `<link rel="canonical" href="${pageUrl(p)}">`}
${p.key === 'home' ? `<link rel="alternate" hreflang="en" href="${SITE.url}/">
<link rel="alternate" hreflang="x-default" href="${SITE.url}/">` : ''}
${SITE.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(SITE.googleSiteVerification)}">` : ''}
${SITE.bingSiteVerification ? `<meta name="msvalidate.01" content="${esc(SITE.bingSiteVerification)}">` : ''}
<meta property="og:type" content="profile">
<meta property="og:site_name" content="Reem Sharaf">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.desc)}">
<meta property="og:url" content="${pageUrl(p)}">
<meta property="og:image" content="${abs(SITE.ogImage)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Reem Sharaf — Software Engineer, AI Researcher and University Lecturer">
<meta property="og:locale" content="en_US">
<meta property="profile:first_name" content="Reem">
<meta property="profile:last_name" content="Sharaf">
<meta property="profile:gender" content="female">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.desc)}">
<meta name="twitter:image" content="${abs(SITE.ogImage)}">
<meta name="geo.region" content="SY-DI">
<meta name="geo.placename" content="Damascus">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/img/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="author" href="/humans.txt">
<link rel="alternate" type="text/markdown" title="LLM summary" href="/llms.txt">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="preload" href="/assets/fonts/unbounded-latin-900-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/manrope-latin-600-normal.woff2" as="font" type="font/woff2" crossorigin>
${p.key === 'home' ? `<link rel="preload" as="image" href="/assets/img/reem-sharaf-ai-researcher-lecturer.webp" imagesrcset="/assets/img/reem-sharaf-ai-researcher-lecturer-608.webp 608w, /assets/img/reem-sharaf-ai-researcher-lecturer.webp 960w" imagesizes="(max-width: 900px) 70vw, 34vw" fetchpriority="high">` : ''}
<link rel="stylesheet" href="/assets/css/site.css?v=${build}">
<script>document.documentElement.classList.replace('no-js','js')</script>
<script type="application/ld+json">${pageLD(p)}</script>
</head>`;
