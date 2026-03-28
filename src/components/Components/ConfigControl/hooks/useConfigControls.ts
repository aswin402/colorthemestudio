import { useState } from 'react';
import { useThemeStore } from '../../../../store/useThemeStore';
import type { Preset } from '../../../../types';
import { generateRandomStyles } from '../../../../utils/randomTheme';


export const useConfigControls = () => {
  const { setBaseColor, setTemperature, setComponentConfig } = useThemeStore();
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const applyPreset = (preset: Preset) => {
    setBaseColor(preset.baseColor);
    setTemperature(preset.temperature);
    setComponentConfig(preset.componentConfig);
  };

  const handleRandomStyles = () => {
    const random = generateRandomStyles();
    setBaseColor(random.baseColor);
    setTemperature(random.temperature);
    setComponentConfig(random.componentConfig);
  };

  return {
    collapsedSections,
    toggleSection,
    applyPreset,
    handleRandomStyles,
  };
};