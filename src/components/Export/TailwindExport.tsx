import { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import { Copy, Check } from 'lucide-react';

export const TailwindExport = () => {
    const { theme } = useThemeStore();
    const [copiedCss, setCopiedCss] = useState(false);
    const [copiedConfig, setCopiedConfig] = useState(false);

    const generateCssVariables = () => {
        let css = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n`;
        
        css += `@layer base {\n  :root {\n`;
        Object.entries(theme.light).forEach(([_, token]) => {
             // Handle border-radius separately if stored, but it's hardcoded here
            css += `    ${token.cssVar}: ${token.oklchValue};\n`;
        });
        css += `    --radius: 0.5rem;\n`;
        css += `  }\n\n`;

        css += `  .dark {\n`;
        Object.entries(theme.dark).forEach(([_, token]) => {
            css += `    ${token.cssVar}: ${token.oklchValue};\n`;
        });
        css += `  }\n}\n`;

        css += `\n@layer base {\n  * {\n    @apply border-border;\n  }\n  body {\n    @apply bg-background text-foreground;\n  }\n}\n`;
        return css;
    };

    const tailwindConfigStr = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;

    const handleCopyCss = () => {
        navigator.clipboard.writeText(generateCssVariables());
        setCopiedCss(true);
        setTimeout(() => setCopiedCss(false), 2000);
    };

    const handleCopyConfig = () => {
        navigator.clipboard.writeText(tailwindConfigStr);
        setCopiedConfig(true);
        setTimeout(() => setCopiedConfig(false), 2000);
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-280px)]">
                {/* CSS Variables Section */}
                <div className="relative group flex flex-col h-full bg-zinc-950 p-6 rounded-xl border border-white/10 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white font-medium">1. index.css / global.css</h3>
                        <button
                            onClick={handleCopyCss}
                            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-md transition-all shadow-sm flex items-center gap-2 text-sm font-medium"
                        >
                            {copiedCss ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            {copiedCss ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                    <pre className="flex-1 overflow-x-auto overflow-y-auto w-full text-zinc-300 text-sm font-mono leading-relaxed scrollbar-hide pb-4">
                        <code>{generateCssVariables()}</code>
                    </pre>
                </div>

                {/* Tailwind Config Section */}
                <div className="relative group flex flex-col h-full bg-zinc-950 p-6 rounded-xl border border-white/10 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white font-medium">2. tailwind.config.js</h3>
                        <button
                            onClick={handleCopyConfig}
                            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-md backdrop-blur-md transition-all shadow-sm flex items-center gap-2 text-sm font-medium"
                        >
                            {copiedConfig ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            {copiedConfig ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                    <pre className="flex-1 overflow-x-auto overflow-y-auto w-full text-zinc-300 text-sm font-mono leading-relaxed scrollbar-hide pb-4">
                        <code>{tailwindConfigStr}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};
