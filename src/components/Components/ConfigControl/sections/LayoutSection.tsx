import { Layout, Ruler } from 'lucide-react';

import { borderWidthOptions, densityOptions } from '../constants';
import { useThemeStore } from '../../../../store/useThemeStore';
import type { ComponentConfig } from '../../../../types';
import { SectionHeader } from './SectionHeader';
import { renderPillSelector } from '../../../../utils/configHelpers';

interface LayoutSectionProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const LayoutSection = ({ collapsed, onToggle }: LayoutSectionProps) => {
  const { componentConfig, setComponentConfig } = useThemeStore();

  const updateConfig = (key: keyof ComponentConfig, value: string) => {
    setComponentConfig({ [key]: value });
  };

  return (
    <div className="flex flex-col gap-5">
      <SectionHeader
        title="Layout & Spacing"
        icon={<Layout className="w-3.5 h-3.5" />}
        sectionKey="layout"
        collapsed={collapsed}
        onToggle={onToggle}
      />
      {!collapsed && (
        <>
          {renderPillSelector('Density', null, 'density', densityOptions, componentConfig, updateConfig)}
          {renderPillSelector('Border Width', <Ruler className="w-3 h-3" />, 'borderWidth', borderWidthOptions, componentConfig, updateConfig)}
        </>
      )}
    </div>
  );
};