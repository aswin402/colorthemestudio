import { useThemeStore } from '../../store/useThemeStore';
import { Layers } from 'lucide-react';

export const ColorCategories = () => {
  const { theme, mode } = useThemeStore();
  const currentTheme = theme[mode];

  const categories = [
    { label: 'Background', color: currentTheme.background.hexValue, role: 'Surface' },
    { label: 'Text', color: currentTheme.foreground.hexValue, role: 'Content' },
    { label: 'Primary', color: currentTheme.primary.hexValue, role: 'Action' },
    { label: 'Secondary', color: currentTheme.secondary.hexValue, role: 'Support' },
    { label: 'Border', color: currentTheme.border.hexValue, role: 'Divider' },
    { label: 'Muted', color: currentTheme.muted.hexValue, role: 'Subtle' },
    { label: 'Destructive', color: currentTheme.destructive.hexValue, role: 'Alert' },
    { label: 'Accent', color: currentTheme.accent.hexValue, role: 'Highlight' },
  ];

  return (
    <div className="space-y-3">
      <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
        <Layers className="w-3.5 h-3.5" /> Theme Roles
      </label>
      <div className="space-y-2.5 font-mono text-sm">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="flex items-center justify-between py-1.5 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-lg border border-black/10 dark:border-white/10 shadow-sm transition-transform hover:scale-110"
                style={{ backgroundColor: cat.color }}
              />
              <div>
                <span className="text-zinc-700 dark:text-zinc-300 text-xs font-medium">{cat.label}</span>
                <span className="block text-[10px] text-zinc-400">{cat.role}</span>
              </div>
            </div>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100 text-xs">
              {cat.color.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};