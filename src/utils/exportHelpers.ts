import type { OpacityType, BlurSize } from '../types';

/**
 * Returns a Tailwind class for background opacity based on the OpacityType.
 * Examples: 'bg-opacity-50', or '/50' for modern arbitrary slash syntax.
 * We prefer slash syntax for Shadcn/modern Tailwind.
 */
export const getTwOpacity = (opacity: OpacityType): string => {
  if (opacity === '100') return '';
  return `/${opacity}`; // e.g. bg-primary/50
};

/**
 * Returns a Tailwind class for backdrop blur based on BlurSize.
 */
export const getTwBlur = (blur: BlurSize): string => {
  const map: Record<BlurSize, string> = {
    none: '',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };
  return map[blur] || '';
};

/**
 * Returns a Flutter color opacity snippet.
 */
export const getFlutterOpacity = (opacity: OpacityType): string => {
  const alpha = parseInt(opacity) / 100;
  if (alpha >= 1) return '';
  return `.withOpacity(${alpha})`;
};

/**
 * Returns a Flutter ImageFilter blur snippet.
 */
export const getFlutterBlur = (blur: BlurSize): string => {
  const map: Record<BlurSize, number> = {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 20,
  };
  const val = map[blur] || 0;
  if (val === 0) return '';
  return `ImageFilter.blur(sigmaX: ${val}, sigmaY: ${val})`;
};

/**
 * Standard Glassmorphism Tailwind combination
 */
export const getTwGlassClasses = (opacity: OpacityType, blur: BlurSize): string => {
  const blurClass = getTwBlur(blur);
  const opacitySuffix = getTwOpacity(opacity);
  if (!opacitySuffix && !blurClass) return '';
  return `${blurClass} ${opacitySuffix ? `bg-opacity-[0.${opacity}]` : ''}`.trim(); 
  // Actually, for slash syntax we need to append it to the color class. 
  // We'll handle this in the component templates directly for maximum flexibility.
};
