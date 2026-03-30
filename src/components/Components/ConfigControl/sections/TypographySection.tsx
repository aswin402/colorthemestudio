import { Type, Italic } from 'lucide-react';
import {
  fontSizeOptions,
  lineHeightOptions,
  letterSpacingOptions,
  fontWeightOptions,
  bodyWeightOptions,
  allFontOptions,
} from '../constants';
import { useThemeStore } from '../../../../store/useThemeStore';
import type { ComponentConfig } from '../../../../types';
import { SectionHeader } from './SectionHeader';
import { renderPillSelector, renderSelect } from '../../../../utils/configHelpers';


interface TypographySectionProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const TypographySection = ({ collapsed, onToggle }: TypographySectionProps) => {
  const { componentConfig, setComponentConfig } = useThemeStore();

  const updateConfig = (key: keyof ComponentConfig, value: string) => {
    setComponentConfig({ [key]: value });
  };

  return (
    <div className="flex flex-col gap-5">
      <SectionHeader
        title="Typography"
        icon={<Type className="w-3.5 h-3.5" />}
        sectionKey="typography"
        collapsed={collapsed}
        onToggle={onToggle}
      />
      {!collapsed && (
        <>
          <div className="grid grid-cols-2 gap-3">
            {renderSelect('Heading Font', null, 'headingFont', allFontOptions, componentConfig, updateConfig)}
            {renderSelect('Body Font', null, 'bodyFont', allFontOptions, componentConfig, updateConfig)}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {renderSelect('Heading Weight', null, 'headingWeight', fontWeightOptions, componentConfig, updateConfig)}
            {renderSelect('Body Weight', null, 'bodyWeight', bodyWeightOptions, componentConfig, updateConfig)}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {renderPillSelector('Heading Size', null, 'fontSizeHeading', fontSizeOptions, componentConfig, updateConfig)}
            {renderPillSelector('Body Size', null, 'fontSizeBody', fontSizeOptions, componentConfig, updateConfig)}
          </div>
          {renderPillSelector('Line Height', null, 'lineHeight', lineHeightOptions, componentConfig, updateConfig)}
          {renderPillSelector('Letter Spacing', <Italic className="w-3 h-3" />, 'letterSpacing', letterSpacingOptions, componentConfig, updateConfig)}

        </>
      )}
    </div>
  );
};