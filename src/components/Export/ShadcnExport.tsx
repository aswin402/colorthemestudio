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
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
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
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground; }
}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCss());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative group flex flex-col bg-zinc-950 p-5 rounded-xl border border-white/10 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-white font-medium text-base">shadcn/ui v4</h3>
            <p className="text-zinc-400 text-xs">Copy to globals.css</p>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-md transition-all flex items-center gap-1.5 text-xs font-medium"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre className="overflow-x-auto overflow-y-auto max-h-[calc(100vh-320px)] text-zinc-300 text-xs font-mono leading-relaxed scrollbar-thin">
          <code>{generateCss()}</code>
        </pre>
      </div>
    </div>
  );
};