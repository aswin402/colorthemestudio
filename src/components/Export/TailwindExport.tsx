import { useThemeStore } from '../../store/useThemeStore';
import { CodeSnippet } from './CodeSnippet';
import type { BorderRadiusSize } from '../../types';

export const TailwindExport = () => {
  const { theme, componentConfig } = useThemeStore();

  const radiusMap: Record<BorderRadiusSize, string> = {
    none: '0',
    xs: '0.0625',
    sm: '0.125',
    md: '0.375',
    lg: '0.5',
    xl: '0.75',
    '2xl': '1',
    '3xl': '1.5',
    full: '9999',
  };

  const getFontWeights = (weight: string) => {
    const baseWeights = ['400', '500', '600', '700'];
    const index = baseWeights.indexOf(weight || '400');
    return baseWeights.slice(index).join(';') || '400;500;600;700';
  };

  const lightVars = Object.values(theme.light)
    .map((token) => `    ${token.cssVar}: ${token.oklchValue};`)
    .join('\n');

  const darkVars = Object.values(theme.dark)
    .map((token) => `    ${token.cssVar}: ${token.oklchValue};`)
    .join('\n');

  const headingFont = componentConfig.headingFont || 'Manrope';
  const bodyFont = componentConfig.bodyFont || 'Geist';
  const radius = radiusMap[componentConfig.cardRadius || 'lg'];

  const content = `@import url('https://fonts.googleapis.com/css2?family=${headingFont.replace(/ /g, '+')}:wght@${getFontWeights(componentConfig.headingWeight)}&family=${bodyFont.replace(/ /g, '+')}:wght@${getFontWeights(componentConfig.bodyWeight)}&display=swap');
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
  * { @apply border-border; }
  body { @apply bg-background text-foreground; }
  h1 { @apply font-heading text-4xl font-bold; }
  h2 { @apply font-heading text-3xl font-bold; }
  h3 { @apply font-heading text-2xl font-semibold; }
  p { @apply font-body text-base; }
}`;

  return (
    <div className="flex flex-col gap-4 pb-12">
      <CodeSnippet filename="src/styles/globals.css" code={content} />
    </div>
  );
};
