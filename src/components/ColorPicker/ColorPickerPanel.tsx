import { ColorWheel } from './ColorWheel';
import { TemperatureSelector } from './TemperatureSelector';
import { ColorCategories } from './ColorCategories';
import { useThemeStore } from '../../store/useThemeStore';
import { generateRandomTheme } from '../../utils/randomTheme';

export const ColorPickerPanel = () => {
  const { setBaseColor, setTemperature } = useThemeStore();

  const handleRandom = () => {
    const { baseColor, temperature } = generateRandomTheme();
    setBaseColor(baseColor);
    setTemperature(temperature);
  };

  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-6 tracking-tight">Configure Theme</h2>
        
        <div className="flex justify-center mb-6">
          <button
            onClick={handleRandom}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-blue-600/50"
            title="Generate random theme colors"
          >
            Random Theme
          </button>
        </div>
        <ColorWheel /> 
      </div>

      <div className="h-px w-full bg-black/5 dark:bg-white/5" />

      <TemperatureSelector />

      <div className="h-px w-full bg-black/5 dark:bg-white/5" />

      <ColorCategories />
    </div>
  );
};
