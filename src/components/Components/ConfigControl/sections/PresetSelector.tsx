import { Palette } from 'lucide-react';
import { useState } from 'react';
import type { Preset } from '../../../../types';
import { presets as allPresets } from '../presets';

interface PresetSelectorProps {
  onApplyPreset: (preset: Preset) => void;
}

export const PresetSelector = ({ onApplyPreset }: PresetSelectorProps) => {
  const [showPresets, setShowPresets] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    'all', 'shadcn', 'daisy', 'modern', 'minimal', 'dark', 'neon', 'playful', 'pastel',
    'professional', 'nature', 'vintage', 'retro', 'editorial', 'brutalist',
    'futuristic', 'luxury', 'artistic', 'warm', 'cool', 'monochrome',
    'gaming', 'glassmorphism', 'system', 'seasonal', 'brand', 'devtools',
  ];

  const filteredPresets = selectedCategory === 'all'
    ? allPresets
    : allPresets.filter((p) => p.category === selectedCategory);


  return (
    <div className="relative">
      <button
        onClick={() => setShowPresets(!showPresets)}
        className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-xl shadow-lg transition-all"
      >
        <Palette className="w-3.5 h-3.5" /> Presets
        <svg
          className={`w-3.5 h-3.5 transition-transform ${showPresets ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {showPresets && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setShowPresets(false)} />
          <div className="absolute left-0 mt-2 w-96 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-50 overflow-hidden">
            <div className="p-3 border-b border-zinc-700">
              <h4 className="font-semibold text-sm text-white">Theme Presets</h4>
              <p className="text-xs text-zinc-400 mt-1">{filteredPresets.length} themes available</p>
              <div className="flex flex-wrap gap-1.5 mt-2 max-h-32 overflow-y-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 text-xs rounded-full capitalize transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-500 text-white'
                        : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div className="py-1 max-h-96 overflow-y-auto scrollbar-thin">
              {filteredPresets.map((preset, i) => (
                <button
                  key={i}
                  onClick={() => {
                    onApplyPreset(preset);
                    setShowPresets(false);
                  }}
                  className="w-full flex items-center gap-2.5 p-2.5 hover:bg-zinc-800 transition-colors text-left"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex-shrink-0 border border-white/10"
                    style={{ backgroundColor: preset.baseColor }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-xs text-white truncate">{preset.name}</div>
                    {preset.description && (
                      <div className="text-[10px] text-zinc-500 truncate">{preset.description}</div>
                    )}
                    <div className="text-[10px] text-zinc-600 truncate mt-0.5">
                      {preset.componentConfig.headingFont} • {preset.componentConfig.fontSizeHeading} • {preset.componentConfig.buttonRadius}
                    </div>
                  </div>
                  <div className="text-[10px] text-zinc-500 capitalize bg-zinc-800 px-1.5 py-0.5 rounded-full">
                    {preset.category}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};