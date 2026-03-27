import { useThemeStore } from '../../store/useThemeStore';
import type { ThemeTemperature } from '../../types';
import { Thermometer } from 'lucide-react';

export const TemperatureSelector = () => {
  const { temperature, setTemperature } = useThemeStore();

  const options: { value: ThemeTemperature; label: string; icon: string }[] = [
    { value: 'cooler', label: 'Cooler', icon: '❄️' },
    { value: 'natural', label: 'Natural', icon: '🌿' },
    { value: 'warmer', label: 'Warmer', icon: '🔥' },
  ];

  return (
    <div className="space-y-3">
      <label className="text-[11px] font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-1.5">
        <Thermometer className="w-3.5 h-3.5" /> Theme Temperature
      </label>
      <div className="flex bg-black/5 dark:bg-white/[0.04] p-1 rounded-xl border border-black/5 dark:border-white/[0.06]">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setTemperature(opt.value)}
            className={`flex-1 text-sm py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 ${
              temperature === opt.value
                ? 'bg-white dark:bg-zinc-800 shadow-sm font-medium text-black dark:text-white'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300'
            }`}
          >
            <span className="text-xs">{opt.icon}</span>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};