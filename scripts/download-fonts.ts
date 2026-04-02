import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG
// Get a free API key at: https://developers.google.com/fonts/docs/developer_api
// Then either:
//   export GOOGLE_FONTS_API_KEY=your_key_here
//   or paste it directly below
// ─────────────────────────────────────────────────────────────────────────────
const API_KEY = process.env.GOOGLE_FONTS_API_KEY ?? 'PASTE_YOUR_KEY_HERE';

// ─── Font list ────────────────────────────────────────────────────────────────
const FONT_NAMES = [
  'Inter',
  'Poppins',
  'Montserrat',
  'Manrope',
  'Oswald',
  'Bebas Neue',
  'Playfair Display',
  'Fraunces',
  'DM Sans',
  'Raleway',
  'Roboto',
  'Open Sans',
  'Lato',
  'Nunito',
  'Karla',
  'Rubik',
  'Source Sans 3',
  'Mulish',
  'Noto Sans',
  'IBM Plex Sans',
];

// ─── Output dirs ──────────────────────────────────────────────────────────────
const WEB_FONTS_DIR     = path.join(__dirname, '..', 'public', 'fonts');
// TTF files go into public/flutter-fonts/ so they can be served by the dev
// server and downloaded in-browser for the Flutter kit button.
// A copy also goes to assets/fonts/ to keep the pubspec snippet generator happy.
const FLUTTER_FONTS_DIR         = path.join(__dirname, '..', 'public', 'flutter-fonts');
const FLUTTER_FONTS_ASSETS_DIR  = path.join(__dirname, '..', 'assets', 'fonts');

// Chrome 120 → woff2
const UA_WOFF2 = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// ─── Weight map ───────────────────────────────────────────────────────────────
const WEIGHT_NAME: Record<number, string> = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
};

// ─── Google Fonts API v1 response types ──────────────────────────────────────
interface GFontItem {
  family: string;
  variants: string[];
  files: Record<string, string>; // variant → direct TTF URL
}

interface GFontsResponse {
  items: GFontItem[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function fileExists(p: string): Promise<boolean> {
  try { await fs.access(p); return true; } catch { return false; }
}

async function downloadBytes(url: string, ua?: string, retries = 3): Promise<Buffer> {
  for (let i = 0; i < retries; i++) {
    try {
      const headers: Record<string, string> = ua ? { 'User-Agent': ua } : {};
      const res = await fetch(url, { headers });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      if (i === retries - 1) throw err;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
  throw new Error('unreachable');
}

// ─── Parse variant string → weight + style ───────────────────────────────────
// API v1 variants look like: "100", "200", "regular", "700", "italic", "700italic"
function parseVariant(variant: string): { weight: number; style: string } | null {
  if (variant === 'regular') return { weight: 400, style: 'normal' };
  if (variant === 'italic')  return { weight: 400, style: 'italic' };
  const m = variant.match(/^(\d+)(italic)?$/);
  if (!m) return null;
  return { weight: parseInt(m[1]), style: m[2] ? 'italic' : 'normal' };
}

function getFileName(fontName: string, weight: number, style: string, ext: string): string {
  const safe   = fontName.replace(/ /g, '');
  const wLabel = WEIGHT_NAME[weight] ?? `w${weight}`;
  const suffix = style === 'italic' ? `${wLabel}Italic` : wLabel;
  return `${safe}-${suffix}.${ext}`;
}

// ─── Fetch full font catalog from API v1 (one call, all fonts) ───────────────
async function fetchFontCatalog(): Promise<Map<string, GFontItem>> {
  const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&capability=CAPABILITY_UNSPECIFIED`;
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Google Fonts API error ${res.status}: ${body}`);
  }
  const data = (await res.json()) as GFontsResponse;
  const map  = new Map<string, GFontItem>();
  for (const item of data.items) {
    map.set(item.family.toLowerCase(), item);
  }
  return map;
}

// ─── Download woff2 for web (CSS API still works perfectly for this) ──────────
async function downloadWebFonts(
  fontName: string,
  family: string,
): Promise<{ ok: number; fail: number; skipped: number }> {
  const stats  = { ok: 0, fail: 0, skipped: 0 };
  const apiUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}&display=swap`;

  let css: string;
  try {
    const res = await fetch(apiUrl, { headers: { 'User-Agent': UA_WOFF2 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    css = await res.text();
  } catch (err) {
    console.log(`   ❌ [web] CSS fetch failed: ${err}`);
    stats.fail = 1;
    return stats;
  }

  const blocks  = css.match(/@font-face\s*\{[^}]+\}/g) ?? [];
  const seen    = new Set<string>();
  const fontDir = path.join(WEB_FONTS_DIR, fontName);
  await ensureDir(fontDir);

  for (const block of blocks) {
    const wm  = block.match(/font-weight:\s*([\d\s]+)/);
    const sm  = block.match(/font-style:\s*(normal|italic)/);
    const um  = block.match(/url\((https:\/\/[^)]+\.woff2[^)]*)\)/);
    if (!wm || !um) continue;

    const parts  = wm[1].trim().split(/\s+/).map(Number);
    const style  = sm?.[1] ?? 'normal';
    const rawUrl = um[1];

    // Variable font → enumerate standard weight stops within the range
    const weights = parts.length === 2
      ? [100,200,300,400,500,600,700,800,900].filter(w => w >= parts[0] && w <= parts[1])
      : [parts[0]];

    for (const weight of weights) {
      const key = `${weight}-${style}`;
      if (seen.has(key)) continue;
      seen.add(key);

      const filename = getFileName(fontName, weight, style, 'woff2');
      const dest     = path.join(fontDir, filename);
      if (await fileExists(dest)) { stats.skipped++; continue; }

      try {
        const buf = await downloadBytes(rawUrl, UA_WOFF2);
        await fs.writeFile(dest, buf);
        stats.ok++;
      } catch (err) {
        console.log(`   ❌ [web] ${filename}: ${err}`);
        stats.fail++;
      }
    }
  }

  return stats;
}

// ─── Download TTF for Flutter using API v1 direct file URLs ──────────────────
async function downloadFlutterFonts(
  fontName: string,
  item: GFontItem,
): Promise<{ ok: number; fail: number; skipped: number }> {
  const stats      = { ok: 0, fail: 0, skipped: 0 };
  const fontDir    = path.join(FLUTTER_FONTS_DIR, fontName);         // public/flutter-fonts/
  const assetDir   = path.join(FLUTTER_FONTS_ASSETS_DIR, fontName); // assets/fonts/ (pubspec)
  await ensureDir(fontDir);
  await ensureDir(assetDir);

  const entries     = Object.entries(item.files); // [variant, directUrl]
  const CONCURRENCY = 5;

  while (entries.length > 0) {
    const batch = entries.splice(0, CONCURRENCY);

    await Promise.all(batch.map(async ([variant, url]) => {
      const parsed = parseVariant(variant);
      if (!parsed) return;

      const { weight, style } = parsed;
      const filename = getFileName(fontName, weight, style, 'ttf');
      const dest     = path.join(fontDir, filename);
      const assetDst = path.join(assetDir, filename);

      if (await fileExists(dest)) { stats.skipped++; return; }

      try {
        // API v1 gives direct TTF download URLs — no user-agent tricks needed
        const buf = await downloadBytes(url);
        await fs.writeFile(dest, buf);
        // Mirror to assets/fonts/ for the pubspec snippet generator
        await fs.writeFile(assetDst, buf);
        stats.ok++;
      } catch (err) {
        console.log(`   ❌ [flutter] ${filename}: ${err}`);
        stats.fail++;
      }
    }));
  }

  return stats;
}

// ─── Generate Flutter pubspec snippet ────────────────────────────────────────
async function generatePubspecSnippet() {
  const lines: string[] = ['flutter:', '  fonts:'];
  let hasFonts = false;

  for (const name of FONT_NAMES) {
    const fontDir = path.join(FLUTTER_FONTS_DIR, name);
    let files: string[] = [];
    try { files = await fs.readdir(fontDir); } catch { continue; }

    const ttfFiles = files.filter(f => f.endsWith('.ttf')).sort();
    if (ttfFiles.length === 0) continue;

    hasFonts = true;
    lines.push(`    - family: ${name}`);
    lines.push(`      fonts:`);

    for (const file of ttfFiles) {
      const m          = file.match(/-(\w+?)(?:Italic)?\.ttf$/);
      const weightName = m?.[1];
      const weightMap: Record<string, number> = {
        Thin: 100, ExtraLight: 200, Light: 300, Regular: 400,
        Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900,
      };
      const weightNum = weightName ? weightMap[weightName] : undefined;
      const isItalic  = file.includes('Italic');

      lines.push(`        - asset: assets/fonts/${name}/${file}`);
      if (weightNum && weightNum !== 400) lines.push(`          weight: ${weightNum}`);
      if (isItalic)                       lines.push(`          style: italic`);
    }
  }

  if (!hasFonts) lines.push('    # No fonts downloaded yet.');

  const dest = path.join(FLUTTER_FONTS_ASSETS_DIR, 'pubspec_fonts.yaml');
  await ensureDir(FLUTTER_FONTS_ASSETS_DIR);
  await fs.writeFile(dest, lines.join('\n'), 'utf8');
  console.log('\n📄 pubspec snippet → assets/fonts/pubspec_fonts.yaml\n');
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  if (API_KEY === 'PASTE_YOUR_KEY_HERE') {
    console.error(`
❌  No API key found!

   Google Fonts no longer serves TTF via CSS — a free API key is required.

   Steps to get one (takes ~1 minute):
   1. Go to https://developers.google.com/fonts/docs/developer_api
   2. Click "Get a Key" → create or select a Google Cloud project
   3. Copy the generated key, then either:

        export GOOGLE_FONTS_API_KEY=your_key_here   ← recommended
        bun run scripts/download-fonts.ts

      or paste it directly in the script at the top where it says PASTE_YOUR_KEY_HERE
`);
    process.exit(1);
  }

  console.log('🚀 Downloading fonts…\n');
  console.log(`   Web     (.woff2) → ${path.relative(process.cwd(), WEB_FONTS_DIR)}`);
  console.log(`   Flutter (.ttf)   → ${path.relative(process.cwd(), FLUTTER_FONTS_DIR)} (served)`);
  console.log(`                    → ${path.relative(process.cwd(), FLUTTER_FONTS_ASSETS_DIR)} (pubspec)\n`);

  await ensureDir(WEB_FONTS_DIR);
  await ensureDir(FLUTTER_FONTS_DIR);
  await ensureDir(FLUTTER_FONTS_ASSETS_DIR);

  // Fetch the full catalog once — API v1 returns every font + direct file URLs
  console.log('🔍 Fetching font catalog from Google Fonts API v1…');
  let catalog: Map<string, GFontItem>;
  try {
    catalog = await fetchFontCatalog();
    console.log(`   ✅ Catalog loaded (${catalog.size} fonts available)\n`);
  } catch (err) {
    console.error(`❌ Failed to fetch catalog: ${err}`);
    process.exit(1);
  }

  const total = { ok: 0, fail: 0, skipped: 0 };

  for (const name of FONT_NAMES) {
    console.log(`📥 ${name}`);

    // Web fonts via CSS API (woff2 works fine this way)
    const familyParam = name.replace(/ /g, '+') + ':wght@100..900';
    const webStats    = await downloadWebFonts(name, familyParam);

    // Flutter TTFs via API v1 direct file URLs
    const item         = catalog.get(name.toLowerCase());
    const flutterStats = item
      ? await downloadFlutterFonts(name, item)
      : { ok: 0, fail: 1, skipped: 0 };

    if (!item) console.log(`   ⚠️  [flutter] "${name}" not found in catalog — check spelling`);

    total.ok      += webStats.ok      + flutterStats.ok;
    total.fail    += webStats.fail    + flutterStats.fail;
    total.skipped += webStats.skipped + flutterStats.skipped;

    if (webStats.ok > 0 || webStats.skipped > 0)
      console.log(`   ✅ Web:     ${webStats.ok} downloaded, ${webStats.skipped} cached`);
    if (flutterStats.ok > 0 || flutterStats.skipped > 0)
      console.log(`   ✅ Flutter: ${flutterStats.ok} downloaded, ${flutterStats.skipped} cached`);
    if (webStats.fail + flutterStats.fail > 0)
      console.log(`   ⚠️  Failed:  ${webStats.fail + flutterStats.fail}`);
  }

  console.log('\n' + '─'.repeat(50));
  console.log(`✅ ${total.ok} files downloaded`);
  console.log(`📦 ${total.skipped} files already cached`);
  if (total.fail > 0) console.log(`❌ ${total.fail} files failed`);

  await generatePubspecSnippet();

  console.log('Next steps:');
  console.log('  Web    → bun run dev');
  console.log('  Flutter → copy assets/fonts/pubspec_fonts.yaml into pubspec.yaml');
}

main().catch(err => {
  console.error('❌ Fatal:', err);
  process.exit(1);
});