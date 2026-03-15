import { HexColorPicker } from 'react-colorful';
import { useThemeStore } from '../../store/useThemeStore';
import { hexToHslString, hexToOklchString } from '../../utils/colorConversions';

export const ColorWheel = () => {
    const { baseColor, setBaseColor } = useThemeStore();
    const oklch = hexToOklchString(baseColor);
    const hsl = hexToHslString(baseColor);

    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="w-full flex justify-center">
                <style dangerouslySetInnerHTML={{
                    __html: `
          .custom-picker { width: 100% !important; max-width: 250px; }
          .custom-picker .react-colorful__pointer { width: 20px; height: 20px; }
          .custom-picker .react-colorful__hue { height: 16px; border-radius: 8px; margin-top: 12px; }
        `}} />
                <HexColorPicker color={baseColor} onChange={setBaseColor} className="custom-picker" />
            </div>

            <div className="bg-black/5 dark:bg-white/5 p-4 rounded-xl space-y-2 font-mono text-sm">
                <div className="flex items-center justify-between">
                    <span className="text-zinc-500">HEX:</span>
                    <span className="font-semibold">{baseColor.toUpperCase()}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-zinc-500">HSL:</span>
                    <span className="font-semibold">{hsl}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-zinc-500">OKLCH:</span>
                    <span className="font-semibold">{oklch}</span>
                </div>
            </div>
        </div>
    );
};
