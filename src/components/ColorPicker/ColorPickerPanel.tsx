import { ColorWheel } from './ColorWheel';
import { TemperatureSelector } from './TemperatureSelector';
import { ColorCategories } from './ColorCategories';

export const ColorPickerPanel = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-6 tracking-tight">Configure Theme</h2>
        <ColorWheel />
      </div>

      <div className="h-px w-full bg-black/5 dark:bg-white/5" />

      <TemperatureSelector />

      <div className="h-px w-full bg-black/5 dark:bg-white/5" />

      <ColorCategories />
    </div>
  );
};
