import { useThemeStore } from '../../store/useThemeStore';
import type { ThemeColors, BorderRadiusSize, ComponentConfig } from '../../types';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const radiusMap: Record<BorderRadiusSize, string> = {
    'none': '0',
    'sm': '0.125',
    'md': '0.375',
    'lg': '0.5',
    'full': '9999',
};

const getFontWeights = (weight: string) => {
    const baseWeights = ['400', '500', '600', '700'];
    const index = baseWeights.indexOf(weight || '400');
    const weights = baseWeights.slice(index).join(';');
    return weights || '400;500;600;700';
};

const generateCSS = (light: ThemeColors, dark: ThemeColors, config: ComponentConfig) => {
    const headingFont = config.headingFont || 'Manrope';
    const bodyFont = config.bodyFont || 'Geist';
    const headingWeights = getFontWeights(config.headingWeight);
    const bodyWeights = getFontWeights(config.bodyWeight);
    const radius = radiusMap[config.cardRadius || 'lg'];

    const lightVars = Object.values(light)
        .map((token) => `    ${token.cssVar}: ${token.oklchValue};`)
        .join('\n');

    const darkVars = Object.values(dark)
        .map((token) => `    ${token.cssVar}: ${token.oklchValue};`)
        .join('\n');

    return `@import url('https://fonts.googleapis.com/css2?family=${headingFont.replace(/ /g, '+')}:wght@${headingWeights}&family=${bodyFont.replace(/ /g, '+')}:wght@${bodyWeights}&display=swap');
@import "tailwindcss";

@theme {
  --color-background: oklch(var(--background));
  --color-foreground: oklch(var(--foreground));

  --color-primary: oklch(var(--primary));
  --color-primary-foreground: oklch(var(--primary-foreground));

  --color-secondary: oklch(var(--secondary));
  --color-secondary-foreground: oklch(var(--secondary-foreground));

  --color-muted: oklch(var(--muted));
  --color-muted-foreground: oklch(var(--muted-foreground));

  --color-accent: oklch(var(--accent));
  --color-accent-foreground: oklch(var(--accent-foreground));

  --color-destructive: oklch(var(--destructive));
  --color-destructive-foreground: oklch(var(--destructive-foreground));

  --color-border: oklch(var(--border));
  --color-input: oklch(var(--input));
  --color-ring: oklch(var(--ring));

  --radius-lg: ${radius}rem;
  --radius-md: calc(${radius}rem - 2px);
  --radius-sm: calc(${radius}rem - 4px);

  --font-heading: '${headingFont}', sans-serif;
  --font-body: '${bodyFont}', sans-serif;
}

@layer base {
  :root {
${lightVars}
  }

  .dark {
${darkVars}
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }

  /* Displays */
  .display-large { @apply font-heading text-7xl font-light tracking-tighter; }
  .display-medium { @apply font-heading text-6xl font-light tracking-tight; }
  .display-small { @apply font-heading text-5xl font-normal; }

  /* Headlines */
  h1, .headline-large { @apply font-heading text-4xl font-normal; }
  h2, .headline-medium { @apply font-heading text-3xl font-normal; }
  h3, .headline-small { @apply font-heading text-2xl font-normal; }

  /* Titles */
  h4, .title-large { @apply font-heading text-xl font-medium tracking-tight; }
  h5, .title-medium { @apply font-heading text-lg font-medium tracking-tight; }
  h6, .title-small { @apply font-heading text-base font-medium tracking-tight; }

  /* Body */
  p, .body-large { @apply font-body text-lg font-normal; }
  .body-medium { @apply font-body text-base font-normal; }
  .body-small { @apply font-body text-sm font-normal; }

  /* Labels */
  .label-large { @apply font-body text-sm font-medium tracking-wide; }
  .label-medium { @apply font-body text-xs font-medium tracking-wide; }
  .label-small { @apply font-body text-[11px] font-medium tracking-wider; }
}`;
};

export const WebCSS = () => {
    const { theme, componentConfig } = useThemeStore();
    const [copied, setCopied] = useState(false);

    const cssString = generateCSS(theme.light, theme.dark, componentConfig);

    const handleCopy = () => {
        navigator.clipboard.writeText(cssString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group h-full flex flex-col">
            <div className="absolute top-4 right-4 z-10">
                <button
                    onClick={handleCopy}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-md transition-all shadow-sm flex items-center gap-2 text-sm font-medium"
                >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
            </div>

            <pre className="flex-1 bg-zinc-950 text-zinc-300 p-6 rounded-xl overflow-x-auto overflow-y-auto text-sm font-mono leading-relaxed border border-white/10 scrollbar-hide">
                <code>{cssString}</code>
            </pre>
        </div>
    );
};
