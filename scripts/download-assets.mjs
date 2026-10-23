// Downloads every image/SVG listed in scripts/assets-manifest.json
// into public/assets/. Run once on your machine: `npm run assets`.
// Figma asset links are temporary (about 7 days after they were generated).
import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await readFile(join(root, 'scripts/assets-manifest.json'), 'utf8'));
const force = process.argv.includes('--force');

const entries = Object.entries(manifest).filter(([key]) => !key.startsWith('_'));
let ok = 0;
let skipped = 0;
const failed = [];

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function download([file, url]) {
  const target = join(root, 'public/assets', file);
  if (!force && (await exists(target))) {
    skipped++;
    return;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, buf);
    ok++;
    console.log(`✔ ${file}`);
  } catch (err) {
    failed.push(file);
    console.log(`✘ ${file} — ${err.message}`);
  }
}

// small concurrency pool
const queue = [...entries];
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (queue.length) await download(queue.shift());
  }),
);

console.log(`\nDone: ${ok} downloaded, ${skipped} already present, ${failed.length} failed.`);
if (failed.length) {
  console.log('Failed files (links may have expired — re-export them from Figma):');
  failed.forEach((f) => console.log('  - ' + f));
  process.exitCode = 1;
}
