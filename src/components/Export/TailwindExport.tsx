import { useThemeStore } from '../../store/useThemeStore';
import { CodeSnippet } from './CodeSnippet';
import type { BorderRadiusSize } from '../../types';

export const TailwindExport = () => {
    const { theme, componentConfig } = useThemeStore();

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

    const lightVars = Object.values(theme.light)
        .map((token) => `    ${token.cssVar}: ${token.oklchValue};`)
        .join('\n');

    const darkVars = Object.values(theme.dark)
        .map((token) => `    ${token.cssVar}: ${token.oklchValue};`)
        .join('\n');

    const headingFont = componentConfig.headingFont || 'Manrope';
    const bodyFont = componentConfig.bodyFont || 'Geist';
    const headingWeights = getFontWeights(componentConfig.headingWeight);
    const bodyWeights = getFontWeights(componentConfig.bodyWeight);
    const radius = radiusMap[componentConfig.cardRadius || 'lg'];

    const files = [
        {
            name: 'src/styles/globals.css',
            content: `@import url('https://fonts.googleapis.com/css2?family=${headingFont.replace(/ /g, '+')}:wght@${headingWeights}&family=${bodyFont.replace(/ /g, '+')}:wght@${bodyWeights}&display=swap');
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
}
`,
        },
    ];

    return (
        <div className="flex flex-col gap-6 h-[calc(100vh-280px)]">
            <h3 className="text-white font-medium text-lg mb-2">Tailwind CSS Setup</h3>
            <div className="flex-1 overflow-y-auto">
                {files.map((file) => (
                    <CodeSnippet key={file.name} filename={file.name} code={file.content} />
                ))}
            </div>
        </div>
    );
};
