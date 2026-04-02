import { Palette, Sparkles } from 'lucide-react';
import { useConfigControls } from './hooks/useConfigControls';
import { PresetSelector } from './sections/PresetSelector';
import { TypographySection } from './sections/TypographySection';
import { LayoutSection } from './sections/LayoutSection';
import { EffectsSection } from './sections/EffectsSection';
import { GeometrySection } from './sections/GeometrySection';
import { OpacitySection } from './sections/OpacitySection';

export const ConfigControls = () => {
  const { collapsedSections, toggleSection, applyPreset, handleRandomStyles } = useConfigControls();

  return (
    <div className="flex flex-col gap-6 h-full overflow-y-auto pb-6">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold tracking-tight mb-1 flex items-center gap-2">
          <Palette className="w-4 h-4 text-blue-400" /> Component Config
        </h2>
        <p className="text-xs text-zinc-500">Customize typography, geometry, spacing, and effects.</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={handleRandomStyles}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-xl shadow-lg transition-all group"
        >
          <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" /> Random Theme
        </button>
        <PresetSelector onApplyPreset={applyPreset} />
      </div>

      <hr className="border-white/5" />

      {/* Sections */}
      <TypographySection
        collapsed={collapsedSections.typography}
        onToggle={() => toggleSection('typography')}
      />

      <hr className="border-white/5" />

      <LayoutSection
        collapsed={collapsedSections.layout}
        onToggle={() => toggleSection('layout')}
      />

      <hr className="border-white/5" />

      <EffectsSection
        collapsed={collapsedSections.effects}
        onToggle={() => toggleSection('effects')}
      />

      <hr className="border-white/5" />

      <GeometrySection
        collapsed={collapsedSections.geometry}
        onToggle={() => toggleSection('geometry')}
      />

      <hr className="border-white/5" />

      <OpacitySection
        collapsed={collapsedSections.opacity}
        onToggle={() => toggleSection('opacity')}
      />
    </div>
  );
};