import type {
  BorderRadiusSize,
  FontSize,
  LineHeightType,
  LetterSpacingType,
  BorderWidthType,
  ShadowSize,
  DensityType,
  OpacityType,
  BlurSize,
} from '../../../../types/index';

export const radiusOptions: { label: string; value: BorderRadiusSize }[] = [
  { label: 'None', value: 'none' },
  { label: 'XS', value: 'xs' },
  { label: 'Sm', value: 'sm' },
  { label: 'Md', value: 'md' },
  { label: 'Lg', value: 'lg' },
  { label: 'XL', value: 'xl' },
  { label: '2XL', value: '2xl' },
  { label: '3XL', value: '3xl' },
  { label: 'Full', value: 'full' },
];

export const fontSizeOptions: { label: string; value: FontSize }[] = [
  { label: 'XS', value: 'xs' },
  { label: 'Sm', value: 'sm' },
  { label: 'Base', value: 'base' },
  { label: 'Lg', value: 'lg' },
  { label: 'XL', value: 'xl' },
  { label: '2XL', value: '2xl' },
  { label: '3XL', value: '3xl' },
  { label: '4XL', value: '4xl' },
  { label: '5XL', value: '5xl' },
];

export const lineHeightOptions: { label: string; value: LineHeightType }[] = [
  { label: 'Compact', value: 'compact' },
  { label: 'Normal', value: 'normal' },
  { label: 'Relaxed', value: 'relaxed' },
  { label: 'Loose', value: 'loose' },
];

export const letterSpacingOptions: { label: string; value: LetterSpacingType }[] = [
  { label: 'Tighter', value: 'tighter' },
  { label: 'Tight', value: 'tight' },
  { label: 'Normal', value: 'normal' },
  { label: 'Wide', value: 'wide' },
  { label: 'Wider', value: 'wider' },
  { label: 'Widest', value: 'widest' },
];

export const borderWidthOptions: { label: string; value: BorderWidthType }[] = [
  { label: '0', value: '0' },
  { label: '1px', value: '1' },
  { label: '2px', value: '2' },
  { label: '4px', value: '4' },
  { label: '8px', value: '8' },
  { label: '12px', value: '12' },
];

export const shadowOptions: { label: string; value: ShadowSize }[] = [
  { label: 'None', value: 'none' },
  { label: 'Sm', value: 'sm' },
  { label: 'Md', value: 'md' },
  { label: 'Lg', value: 'lg' },
  { label: 'Xl', value: 'xl' },
  { label: '2XL', value: '2xl' },
];

export const densityOptions: { label: string; value: DensityType }[] = [
  { label: 'Compact', value: 'compact' },
  { label: 'Normal', value: 'normal' },
  { label: 'Spacious', value: 'spacious' },
];

export const fontWeightOptions = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];
export const bodyWeightOptions = ['300', '400', '500', '600', '700'];

export const opacityOptions: { label: string; value: OpacityType }[] = [
  { label: '0%',   value: '0' },
  { label: '25%',  value: '25' },
  { label: '50%',  value: '50' },
  { label: '75%',  value: '75' },
  { label: '100%', value: '100' },
];

export const blurOptions: { label: string; value: BlurSize }[] = [
  { label: 'None', value: 'none' },
  { label: 'Sm (4px)', value: 'sm' },
  { label: 'Md (8px)', value: 'md' },
  { label: 'Lg (12px)', value: 'lg' },
  { label: 'XL (20px)', value: 'xl' },
];