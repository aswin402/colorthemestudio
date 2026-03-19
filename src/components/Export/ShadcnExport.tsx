import { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { Copy, Check } from 'lucide-react';

export const ShadcnExport = () => {
  const { theme } = useThemeStore();
  const [copied, setCopied] = useState(false);

  const generateCss = () => {
    const l = theme.light;
    const d = theme.dark;

    return `@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-sans);
  --font-mono: var(--font-geist-mono);
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

:root {
  --background: oklch(${l.background.oklchValue});
  --foreground: oklch(${l.foreground.oklchValue});
  --card: oklch(${l.card.oklchValue});
  --card-foreground: oklch(${l.cardForeground.oklchValue});
  --popover: oklch(${l.popover.oklchValue});
  --popover-foreground: oklch(${l.popoverForeground.oklchValue});
  --primary: oklch(${l.primary.oklchValue});
  --primary-foreground: oklch(${l.primaryForeground.oklchValue});
  --secondary: oklch(${l.secondary.oklchValue});
  --secondary-foreground: oklch(${l.secondaryForeground.oklchValue});
  --muted: oklch(${l.muted.oklchValue});
  --muted-foreground: oklch(${l.mutedForeground.oklchValue});
  --accent: oklch(${l.accent.oklchValue});
  --accent-foreground: oklch(${l.accentForeground.oklchValue});
  --destructive: oklch(${l.destructive.oklchValue});
  --destructive-foreground: oklch(${l.destructiveForeground.oklchValue});
  --border: oklch(${l.border.oklchValue});
  --input: oklch(${l.input.oklchValue});
  --ring: oklch(${l.ring.oklchValue});
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(${l.card.oklchValue});
  --sidebar-foreground: oklch(${l.cardForeground.oklchValue});
  --sidebar-primary: oklch(${l.primary.oklchValue});
  --sidebar-primary-foreground: oklch(${l.primaryForeground.oklchValue});
  --sidebar-accent: oklch(${l.accent.oklchValue});
  --sidebar-accent-foreground: oklch(${l.accentForeground.oklchValue});
  --sidebar-border: oklch(${l.border.oklchValue});
  --sidebar-ring: oklch(${l.ring.oklchValue});
}

.dark {
  --background: oklch(${d.background.oklchValue});
  --foreground: oklch(${d.foreground.oklchValue});
  --card: oklch(${d.card.oklchValue});
  --card-foreground: oklch(${d.cardForeground.oklchValue});
  --popover: oklch(${d.popover.oklchValue});
  --popover-foreground: oklch(${d.popoverForeground.oklchValue});
  --primary: oklch(${d.primary.oklchValue});
  --primary-foreground: oklch(${d.primaryForeground.oklchValue});
  --secondary: oklch(${d.secondary.oklchValue});
  --secondary-foreground: oklch(${d.secondaryForeground.oklchValue});
  --muted: oklch(${d.muted.oklchValue});
  --muted-foreground: oklch(${d.mutedForeground.oklchValue});
  --accent: oklch(${d.accent.oklchValue});
  --accent-foreground: oklch(${d.accentForeground.oklchValue});
  --destructive: oklch(${d.destructive.oklchValue});
  --destructive-foreground: oklch(${d.destructiveForeground.oklchValue});
  --border: oklch(${d.border.oklchValue});
  --input: oklch(${d.input.oklchValue});
  --ring: oklch(${d.ring.oklchValue});
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(${d.card.oklchValue});
  --sidebar-foreground: oklch(${d.cardForeground.oklchValue});
  --sidebar-primary: oklch(${d.primary.oklchValue});
  --sidebar-primary-foreground: oklch(${d.primaryForeground.oklchValue});
  --sidebar-accent: oklch(${d.accent.oklchValue});
  --sidebar-accent-foreground: oklch(${d.accentForeground.oklchValue});
  --sidebar-border: oklch(${d.border.oklchValue});
  --sidebar-ring: oklch(${d.ring.oklchValue});
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCss());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="relative group flex flex-col h-[calc(100vh-280px)] bg-zinc-950 p-6 rounded-xl border border-white/10 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h3 className="text-white font-medium text-lg">shadcn/ui Setup (v4)</h3>
            <p className="text-zinc-400 text-xs">Copy this to your globals.css file</p>
          </div>
          <button
            onClick={handleCopy}
            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-md transition-all shadow-sm flex items-center gap-2 text-sm font-medium"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied' : 'Copy CSS'}
          </button>
        </div>
        <pre className="flex-1 overflow-x-auto overflow-y-auto w-full text-zinc-300 text-sm font-mono leading-relaxed scrollbar-hide pb-4">
          <code>{generateCss()}</code>
        </pre>
      </div>
    </div>
  );
};
