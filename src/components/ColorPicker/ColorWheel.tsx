import { HexColorPicker } from 'react-colorful';
import { useThemeStore } from '../../store/useThemeStore';
import { hexToHslString, hexToOklchString } from '../../utils/colorConversions';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const ColorWheel = () => {
  const { baseColor, setBaseColor } = useThemeStore();
  const oklch = hexToOklchString(baseColor);
  const hsl = hexToHslString(baseColor);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyValue = (field: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1500);
  };

  const colorRows = [
    { label: 'HEX', value: baseColor.toUpperCase() },
    { label: 'HSL', value: hsl },
    { label: 'OKLCH', value: oklch },
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="w-full flex justify-center">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .custom-picker { width: 100% !important; max-width: 240px; }
              .custom-picker .react-colorful__pointer { width: 18px; height: 18px; border-width: 2px; }
              .custom-picker .react-colorful__hue { height: 14px; border-radius: 7px; margin-top: 10px; }
              .custom-picker .react-colorful__saturation { border-radius: 12px; }
            `,
          }}
        />
        <HexColorPicker color={baseColor} onChange={setBaseColor} className="custom-picker" />
      </div>

      <div className="flex items-center gap-2">
        <label className="text-xs font-medium text-zinc-500">HEX Input:</label>
        <input
          type="text"
          value={baseColor}
          onChange={(e) => {
            const val = e.target.value;
            if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) setBaseColor(val);
          }}
          className="flex-1 px-3 py-1.5 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          maxLength={7}
        />
      </div>

      <div className="bg-black/5 dark:bg-white/[0.04] p-4 rounded-xl space-y-2.5 font-mono text-sm border border-black/5 dark:border-white/[0.06]">
        {colorRows.map((row) => (
          <div key={row.label} className="flex items-center justify-between group">
            <span className="text-zinc-500 text-xs">{row.label}:</span>
            <button
              onClick={() => copyValue(row.label, row.value)}
              className="flex items-center gap-1.5 font-semibold hover:text-emerald-500 transition-colors"
            >
              {row.value}
              {copiedField === row.label ? (
                <Check className="w-3 h-3 text-emerald-500" />
              ) : (
                <Copy className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};