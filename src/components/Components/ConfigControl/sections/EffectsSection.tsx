import { Zap } from 'lucide-react';

import { shadowOptions } from '../constants';
import { useThemeStore } from '../../../../store/useThemeStore';
import type { ComponentConfig } from '../../../../types';
import { SectionHeader } from './SectionHeader';
import { renderPillSelector } from '../../../../utils/configHelpers';


interface EffectsSectionProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const EffectsSection = ({ collapsed, onToggle }: EffectsSectionProps) => {
  const { componentConfig, setComponentConfig } = useThemeStore();

  const updateConfig = (key: keyof ComponentConfig, value: string) => {
    setComponentConfig({ [key]: value });
  };

  return (
    <div className="flex flex-col gap-5">
      <SectionHeader
        title="Effects"
        icon={<Zap className="w-3.5 h-3.5" />}
        sectionKey="effects"
        collapsed={collapsed}
        onToggle={onToggle}
      />
      {!collapsed && (
        <>
          {renderPillSelector('Shadow', null, 'shadow', shadowOptions, componentConfig, updateConfig)}
        </>
      )}
    </div>
  );
};