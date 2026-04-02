import { Layers, Sparkles } from 'lucide-react';
import { opacityOptions, blurOptions } from '../constants';
import { useThemeStore } from '../../../../store/useThemeStore';
import type { ComponentConfig } from '../../../../types';
import { SectionHeader } from './SectionHeader';
import { renderPillSelector } from '../../../../utils/configHelpers';

interface OpacitySectionProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const OpacitySection = ({ collapsed, onToggle }: OpacitySectionProps) => {
  const { componentConfig, setComponentConfig } = useThemeStore();

  const updateConfig = (key: keyof ComponentConfig, value: string) => {
    setComponentConfig({ [key]: value });
  };

  return (
    <div className="flex flex-col gap-5">
      <SectionHeader
        title="Glass & Opacity"
        icon={<Layers className="w-3.5 h-3.5" />}
        sectionKey="opacity"
        collapsed={collapsed}
        onToggle={onToggle}
      />
      {!collapsed && (
        <div className="flex flex-col gap-6">
          <div className="p-3 rounded-xl bg-blue-500/5 border border-blue-500/10 mb-2">
            <p className="text-[10px] text-blue-400 font-medium uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Tip
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Lower the background opacity and add blur to create a premium <b>glassmorphism</b> look.
            </p>
          </div>

          {renderPillSelector('Backdrop Blur', null, 'blurAmount', blurOptions, componentConfig, updateConfig)}
          
          <div className="h-px bg-zinc-800/50 my-1" />

          {renderPillSelector('Button Background', null, 'buttonOpacity', opacityOptions, componentConfig, updateConfig)}
          {renderPillSelector('Card Background', null, 'cardOpacity', opacityOptions, componentConfig, updateConfig)}
          {renderPillSelector('Navbar Background', null, 'navbarOpacity', opacityOptions, componentConfig, updateConfig)}
          {renderPillSelector('Input Background', null, 'inputOpacity', opacityOptions, componentConfig, updateConfig)}
          {renderPillSelector('Badge Background', null, 'badgeOpacity', opacityOptions, componentConfig, updateConfig)}
          {renderPillSelector('Overlay Background', null, 'overlayOpacity', opacityOptions, componentConfig, updateConfig)}
        </div>
      )}
    </div>
  );
};

