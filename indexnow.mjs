// IndexNow: tell Bing (and Yandex, Seznam, Naver…) that the site's pages changed,
// so they recrawl right away instead of waiting. Bing feeds ChatGPT search and Copilot.
//   npm run indexnow          → submit every page now
//   production builds on Vercel call submitIndexNow() automatically (see build.mjs)
import { pathToFileURL } from 'node:url';
import { SITE, PAGES } from './src/content.mjs';
import { pageUrl } from './src/lib.mjs';

export async function submitIndexNow({ timeout = 8000 } = {}) {
  const key = SITE.indexNowKey;
  if (!key) return console.log('  · IndexNow: no key set, skipped');
  const host = new URL(SITE.url).host;
  const body = { host, key, keyLocation: `${SITE.url}/${key}.txt`, urlList: [...PAGES.map(pageUrl), `${SITE.url}/llms.txt`, `${SITE.url}/llms-full.txt`] };
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(timeout)
    });
    // 200 = accepted, 202 = accepted (key check pending); anything else is reported but never fails the build
    console.log(`  · IndexNow: ${res.status} ${res.statusText} — ${body.urlList.length} URLs`);
  } catch (e) {
    console.log(`  · IndexNow: not sent (${e.message})`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) await submitIndexNow();
