import { Box } from 'lucide-react';

import { radiusOptions } from '../constants';
import { useThemeStore } from '../../../../store/useThemeStore';
import type { ComponentConfig } from '../../../../types';
import { SectionHeader } from './SectionHeader';
import { renderPillSelector } from '../../../../utils/configHelpers';


interface GeometrySectionProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const GeometrySection = ({ collapsed, onToggle }: GeometrySectionProps) => {
  const { componentConfig, setComponentConfig } = useThemeStore();

  const updateConfig = (key: keyof ComponentConfig, value: string) => {
    setComponentConfig({ [key]: value });
  };

  return (
    <div className="flex flex-col gap-5">
      <SectionHeader
        title="Geometry"
        icon={<Box className="w-3.5 h-3.5" />}
        sectionKey="geometry"
        collapsed={collapsed}
        onToggle={onToggle}
      />
      {!collapsed && (
        <>
          {renderPillSelector('Button Radius', null, 'buttonRadius', radiusOptions, componentConfig, updateConfig)}
          {renderPillSelector('Card Radius', null, 'cardRadius', radiusOptions, componentConfig, updateConfig)}
          {renderPillSelector('Input Radius', null, 'inputRadius', radiusOptions, componentConfig, updateConfig)}
        
        </>
      )}
    </div>
  );
};