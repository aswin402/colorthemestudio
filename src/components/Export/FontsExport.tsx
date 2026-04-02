import { useThemeStore } from '../../store/useThemeStore';
import { FileText, DownloadCloud, Package, Globe, Smartphone } from 'lucide-react';
import { useState } from 'react';
import JSZip from 'jszip';

// ─── Font list & file manifest ────────────────────────────────────────────────
const allFontOptions = [
  'Inter', 'Poppins', 'Montserrat', 'Manrope', 'Oswald', 'Bebas Neue',
  'Playfair Display', 'Fraunces', 'DM Sans', 'Raleway', 'Roboto', 'Open Sans',
  'Lato', 'Nunito', 'Karla', 'Rubik', 'Source Sans 3', 'Mulish', 'Noto Sans',
  'IBM Plex Sans',
];

// Weight labels used in the filenames (must match what download-fonts.ts generates)
const weightNames = ['Thin', 'ExtraLight', 'Light', 'Regular', 'Medium', 'SemiBold', 'Bold', 'ExtraBold', 'Black'];

// Build a list of candidate file names for a given font (web = woff2, flutter = ttf)
function getCandidateFiles(font: string, ext: 'woff2' | 'ttf'): string[] {
  const safe = font.replace(/ /g, '');
  const files: string[] = [];
  for (const w of weightNames) {
    files.push(`${safe}-${w}.${ext}`);
    if (ext === 'ttf') files.push(`${safe}-${w}Italic.${ext}`);
  }
  return files;
}

// ─── Download helpers ─────────────────────────────────────────────────────────
async function downloadFontZip(
  font: string,
  format: 'web' | 'flutter',
): Promise<{ ok: number; skipped: number }> {
  const ext = format === 'web' ? 'woff2' : 'ttf';
  const basePath = format === 'web' ? `/fonts/${font}` : `/flutter-fonts/${font}`;
  const candidates = getCandidateFiles(font, ext);
  const zip = new JSZip();
  const folder = zip.folder(font.replace(/ /g, ''))!;

  let ok = 0;
  let skipped = 0;

  await Promise.all(
    candidates.map(async (filename) => {
      try {
        const res = await fetch(`${basePath}/${filename}`);
        if (!res.ok) { skipped++; return; }
        const buf = await res.arrayBuffer();
        folder.file(filename, buf);
        ok++;
      } catch {
        skipped++;
      }
    }),
  );

  if (ok === 0) throw new Error('No font files found');

  const blob = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${font.replace(/ /g, '')}-${format === 'web' ? 'web' : 'flutter'}.zip`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);

  return { ok, skipped };
}

// ─── Font card with two download buttons ──────────────────────────────────────
const FontCard = ({ font, isThemeFont }: { font: string; isThemeFont: boolean }) => {
  const [webState, setWebState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [flutterState, setFlutterState] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  const handleDownload = async (format: 'web' | 'flutter') => {
    const setState = format === 'web' ? setWebState : setFlutterState;
    setState('loading');
    try {
      const { ok } = await downloadFontZip(font, format);
      setState(ok > 0 ? 'done' : 'error');
    } catch {
      setState('error');
    }
    setTimeout(() => setState('idle'), 3000);
  };

  const btnLabel = (state: typeof webState, label: string) => {
    if (state === 'loading') return '…';
    if (state === 'done') return '✓ Done';
    if (state === 'error') return '✗ Error';
    return label;
  };

  return (
    <div
      className={`relative p-4 rounded-xl border transition-all flex flex-col gap-3 overflow-hidden
        ${isThemeFont
          ? 'border-primary/40 bg-primary/5 ring-2 ring-primary/20'
          : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
        }`}
    >
      {isThemeFont && (
        <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
          Active
        </span>
      )}

      {/* Font preview */}
      <div className="min-h-[3rem]">
        <p className="text-base font-semibold leading-tight text-white line-clamp-1">{font}</p>
        <p className="text-xs text-white/40 mt-0.5" style={{ fontFamily: `'${font}', sans-serif` }}>
          Aa Bb Cc 1 2 3
        </p>
      </div>

      {/* Download buttons */}
      <div className="flex gap-2">
        {/* Web woff2 */}
        <button
          id={`dl-web-${font.replace(/ /g, '-').toLowerCase()}`}
          onClick={() => handleDownload('web')}
          disabled={webState === 'loading'}
          title="Download Web fonts (.woff2 zip)"
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all
            ${webState === 'done' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
              webState === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
              webState === 'loading' ? 'bg-white/5 text-white/40 border border-white/10 cursor-wait' :
              'bg-blue-500/10 text-blue-300 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/40 hover:text-blue-200'}`}
        >
          <Globe className="w-3 h-3 shrink-0" />
          {btnLabel(webState, 'Web')}
        </button>

        {/* Flutter ttf */}
        <button
          id={`dl-flutter-${font.replace(/ /g, '-').toLowerCase()}`}
          onClick={() => handleDownload('flutter')}
          disabled={flutterState === 'loading'}
          title="Download Flutter fonts (.ttf zip)"
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium transition-all
            ${flutterState === 'done' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
              flutterState === 'error' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
              flutterState === 'loading' ? 'bg-white/5 text-white/40 border border-white/10 cursor-wait' :
              'bg-violet-500/10 text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 hover:border-violet-400/40 hover:text-violet-200'}`}
        >
          <Smartphone className="w-3 h-3 shrink-0" />
          {btnLabel(flutterState, 'Flutter')}
        </button>
      </div>
    </div>
  );
};

// ─── Code snippet component ───────────────────────────────────────────────────
const CodeSnippet = ({ filename, code }: { filename: string; code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-950 p-5 rounded-xl border border-white/10 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-white font-medium text-sm">{filename}</h4>
        <button
          onClick={handleCopy}
          className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md flex items-center gap-2 text-xs transition-all"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto text-zinc-300 text-sm font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

// ─── Main export ──────────────────────────────────────────────────────────────
export const FontsExport = () => {
  const { componentConfig } = useThemeStore();
  const headingFont = componentConfig.headingFont || 'Inter';
  const bodyFont = componentConfig.bodyFont || 'Inter';
  const themeFonts = Array.from(new Set([headingFont, bodyFont]));

  const cssFontFace = themeFonts.map(font => {
    const safe = font.replace(/ /g, '');
    return weightNames.map(w => `@font-face {
  font-family: '${font}';
  src: url('/fonts/${safe}/${safe}-${w}.woff2') format('woff2');
  font-weight: ${getWeightNum(w)};
  font-display: swap;
}`).join('\n');
  }).join('\n\n');

  const flutterPubspec = `flutter:
  fonts:
${themeFonts.map(font => {
    const safe = font.replace(/ /g, '');
    return `    - family: ${font}
      fonts:
${weightNames.map(w => `        - asset: assets/fonts/${font}/${safe}-${w}.ttf
          weight: ${getWeightNum(w)}`).join('\n')}`;
  }).join('\n\n')}`;

  return (
    <div className="space-y-8">
      {/* ── Active theme fonts ─────────────────────────────────────── */}
      <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10">
        <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
          <Package className="w-5 h-5 text-primary" />
          Your Theme Fonts
        </h3>
        <div className="grid md:grid-cols-2 gap-5">
          {themeFonts.map(font => (
            <FontCard key={font} font={font} isThemeFont />
          ))}
        </div>
      </div>

      {/* ── All fonts grid ────────────────────────────────────────────── */}
      <section>
        <h3 className="text-base font-semibold mb-4 flex items-center gap-2 text-white/80">
          <FileText className="w-4 h-4" />
          All Available Fonts
          <span className="ml-1 text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/50">
            {allFontOptions.length}
          </span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {allFontOptions.map(font => (
            <FontCard key={font} font={font} isThemeFont={themeFonts.includes(font)} />
          ))}
        </div>
      </section>

      {/* ── Code snippets ──────────────────────────────────────────── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-semibold text-sm text-white/70">
            <Globe className="w-4 h-4 text-blue-400" /> Web – @font-face CSS
          </h4>
          <CodeSnippet filename="@font-face (add to globals.css)" code={cssFontFace} />
        </div>
        <div>
          <h4 className="mb-3 flex items-center gap-2 font-semibold text-sm text-white/70">
            <Smartphone className="w-4 h-4 text-violet-400" /> Flutter – pubspec.yaml
          </h4>
          <CodeSnippet filename="pubspec.yaml — fonts:" code={flutterPubspec} />
        </div>
      </section>

      {/* ── Quick-start guide ─────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 bg-white/[0.03] rounded-2xl border border-white/10">
        <div className="text-center">
          <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <h5 className="font-semibold mb-1 text-sm">Web Setup</h5>
          <p className="text-xs text-white/40">
            Unzip to <code className="bg-white/10 px-1 rounded">public/fonts/</code> → paste @font-face CSS
          </p>
        </div>
        <div className="text-center">
          <Smartphone className="w-8 h-8 text-violet-400 mx-auto mb-2" />
          <h5 className="font-semibold mb-1 text-sm">Flutter Setup</h5>
          <p className="text-xs text-white/40">
            Unzip to <code className="bg-white/10 px-1 rounded">assets/fonts/</code> → paste pubspec snippet
          </p>
        </div>
        <div className="text-center">
          <DownloadCloud className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
          <h5 className="font-semibold mb-1 text-sm">What's Included</h5>
          <p className="text-xs text-white/40">
            WOFF2 for web · TTF for Flutter · All weights + italics
          </p>
        </div>
      </section>
    </div>
  );
};

// ─── Helper ───────────────────────────────────────────────────────────────────
function getWeightNum(name: string): number {
  const map: Record<string, number> = {
    Thin: 100, ExtraLight: 200, Light: 300, Regular: 400,
    Medium: 500, SemiBold: 600, Bold: 700, ExtraBold: 800, Black: 900,
  };
  return map[name] ?? 400;
}
