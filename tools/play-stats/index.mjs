// Fetches Google Play install counts and ratings, and writes them as
// shields.io endpoint badges under data/play-stats/ for the profile README.
import { mkdir, writeFile } from 'node:fs/promises';
import gplay from 'google-play-scraper';

const APPS = ['com.forgerwise.wiserlocker', 'com.forgerwise.foodlist'];
const OUT_DIR = new URL('../../data/play-stats/', import.meta.url);

const BADGE = {
  schemaVersion: 1,
  labelColor: '18181b',
  namedLogo: 'googleplay',
  logoColor: 'white',
};

// Rounds down so the badge never overstates the count (1,734 -> "1.7K").
export function formatCount(n) {
  const short = (value, unit) => `${Math.floor(value * 10) / 10}${unit}`;
  if (n >= 1_000_000) return short(n / 1_000_000, 'M');
  if (n >= 10_000) return `${Math.floor(n / 1000)}K`;
  if (n >= 1000) return short(n / 1000, 'K');
  return String(n);
}

export function downloadsBadge(app) {
  const installs = app.maxInstalls ?? app.minInstalls;
  if (!Number.isFinite(installs)) throw new Error('install count missing');
  return { ...BADGE, label: 'Downloads', message: formatCount(installs), color: '34d058' };
}

// Google Play hides the score until an app has enough ratings.
export function ratingBadge(app) {
  if (!app.ratings || !Number.isFinite(app.score)) return null;
  return { ...BADGE, label: 'Rating', message: `${app.score.toFixed(1)} ★ (${app.ratings})`, color: 'fbbf24' };
}

async function writeBadge(name, badge) {
  await writeFile(new URL(name, OUT_DIR), `${JSON.stringify(badge, null, 2)}\n`);
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  let failed = 0;
  for (const appId of APPS) {
    try {
      const app = await gplay.app({ appId, lang: 'en', country: 'us' });
      await writeBadge(`${appId}.downloads.json`, downloadsBadge(app));
      const rating = ratingBadge(app);
      if (rating) await writeBadge(`${appId}.rating.json`, rating);
      console.log(`${appId}: ${app.maxInstalls ?? app.minInstalls} installs, ${app.ratings ?? 0} ratings`);
    } catch (error) {
      // Keep the last published badge when a fetch fails.
      failed += 1;
      console.error(`${appId}: ${error.message}`);
    }
  }
  if (failed) process.exitCode = 1;
}

if (import.meta.url === `file://${process.argv[1]}`) await main();
