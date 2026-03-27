import { ColorWheel } from './ColorWheel';
import { TemperatureSelector } from './TemperatureSelector';
import { ColorCategories } from './ColorCategories';
import { useThemeStore } from '../../store/useThemeStore';
import { generateRandomTheme } from '../../utils/randomTheme';
import { Dices, Palette } from 'lucide-react';

export const ColorPickerPanel = () => {
  const { setBaseColor, setTemperature } = useThemeStore();

  const handleRandom = () => {
    const { baseColor, temperature } = generateRandomTheme();
    setBaseColor(baseColor);
    setTemperature(temperature);
  };

  return (
    <div className="w-full h-full flex flex-col space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Palette className="w-5 h-5 text-emerald-500" />
          <h2 className="text-lg font-bold tracking-tight">Configure Theme</h2>
        </div>

        <div className="flex justify-center mb-5">
          <button
            onClick={handleRandom}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-200 active:scale-[0.98]"
          >
            <Dices className="w-4 h-4" />
            Random Theme
          </button>
        </div>
        <ColorWheel />
      </div>

      <div className="h-px w-full bg-black/5 dark:bg-white/[0.06]" />
      <TemperatureSelector />
      <div className="h-px w-full bg-black/5 dark:bg-white/[0.06]" />
      <ColorCategories />
    </div>
  );
};