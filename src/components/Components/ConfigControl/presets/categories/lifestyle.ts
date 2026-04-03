import type { Preset } from '../../../../../types';

export const lifestylePresets: Preset[] = [
  // ==================== WARM CATEGORY ====================
  {
    name: 'Sunset Glow', baseColor: '#F97316', temperature: 'warmer', category: 'warm',
    description: 'Golden hour warmth',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Open Sans',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Terracotta', baseColor: '#C85A37', temperature: 'warmer', category: 'warm',
    description: 'Earthy clay tones',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },


  // ==================== COOL CATEGORY ====================
  {
    name: 'Arctic Frost', baseColor: '#38BDF8', temperature: 'cooler', category: 'cool',
    description: 'Icy blue clarity',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Lavender Haze', baseColor: '#A78BFA', temperature: 'cooler', category: 'cool',
    description: 'Soft purple calm',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Open Sans',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'md', density: 'spacious', borderWidth: '1',
    },
  },


  // ==================== MONOCHROME CATEGORY ====================
  {
    name: 'Ink & Paper', baseColor: '#000000', temperature: 'natural', category: 'monochrome',
    description: 'Pure black & white',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'DM Sans',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'sm', inputRadius: 'sm',
      shadow: 'none', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Silver Chrome', baseColor: '#71717A', temperature: 'cooler', category: 'monochrome',
    description: 'Metallic monochrome',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'tight',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },


  // ==================== MORE WARM THEMES ====================
  {
    name: 'Amber Glow', baseColor: '#F59E0B', temperature: 'warmer', category: 'warm',
    description: 'Warm amber light',
    componentConfig: {
      headingFont: 'Poppins', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Spice Route', baseColor: '#C05621', temperature: 'warmer', category: 'warm',
    description: 'Rustic spice palette',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Warm Ivory', baseColor: '#FFFBEB', temperature: 'warmer', category: 'warm',
    description: 'Soft ivory warmth',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'sm', density: 'spacious', borderWidth: '0',
    },
  },
  {
    name: 'Copper', baseColor: '#B87333', temperature: 'warmer', category: 'warm',
    description: 'Rich copper tones',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'md', density: 'normal', borderWidth: '2',
    },
  },
  {
    name: 'Sandstone', baseColor: '#D4B896', temperature: 'warmer', category: 'warm',
    description: 'Natural sandy warmth',
    componentConfig: {
      headingFont: 'Nunito', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'sm', density: 'spacious', borderWidth: '1',
    },
  },


  // ==================== MORE COOL THEMES ====================
  {
    name: 'Glacier', baseColor: '#B0D4E3', temperature: 'cooler', category: 'cool',
    description: 'Cold glacier blue',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'sm', density: 'spacious', borderWidth: '0',
    },
  },
  {
    name: 'Steel Blue', baseColor: '#4682B4', temperature: 'cooler', category: 'cool',
    description: 'Industrial steel',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Icy Mint', baseColor: '#C2F0E8', temperature: 'cooler', category: 'cool',
    description: 'Cool fresh mint',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'full',
      shadow: 'sm', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Teal Ocean', baseColor: '#008080', temperature: 'cooler', category: 'cool',
    description: 'Deep teal waters',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },


  // ==================== MORE MONOCHROME THEMES ====================
  {
    name: 'Charcoal', baseColor: '#36454F', temperature: 'natural', category: 'monochrome',
    description: 'Warm charcoal tones',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Graphite', baseColor: '#5C5C5C', temperature: 'natural', category: 'monochrome',
    description: 'Smooth graphite grey',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'sm', inputRadius: 'sm',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Ash Gray', baseColor: '#B2BEB5', temperature: 'cooler', category: 'monochrome',
    description: 'Muted ash tones',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'none', density: 'spacious', borderWidth: '0',
    },
  },


  // ==================== MORE WARM THEMES ====================
  {
    name: 'Candlelight', baseColor: '#F6A623', temperature: 'warmer', category: 'warm',
    description: 'Flickering warm glow',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Lato',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'sm', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Caramel', baseColor: '#8B5E3C', temperature: 'warmer', category: 'warm',
    description: 'Sweet caramel toffee',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'md', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Ember', baseColor: '#C2410C', temperature: 'warmer', category: 'warm',
    description: 'Glowing fire embers',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'lg', density: 'normal', borderWidth: '2',
    },
  },
  {
    name: 'Golden Hour', baseColor: '#D97706', temperature: 'warmer', category: 'warm',
    description: 'Magic hour sunlight',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'xl', cardRadius: '2xl', inputRadius: 'xl',
      shadow: 'md', density: 'spacious', borderWidth: '1',
    },
  },


  // ==================== MORE COOL THEMES ====================
  {
    name: 'Deep Space', baseColor: '#0F172A', temperature: 'cooler', category: 'cool',
    description: 'Interstellar dark void',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'wider',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'xl', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Sapphire Sky', baseColor: '#2563EB', temperature: 'cooler', category: 'cool',
    description: 'Brilliant clear sky',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Midnight Blue', baseColor: '#1E3A8A', temperature: 'cooler', category: 'cool',
    description: 'Deep midnight blue calm',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'md', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Aquamarine', baseColor: '#00B4D8', temperature: 'cooler', category: 'cool',
    description: 'Tropical sea clarity',
    componentConfig: {
      headingFont: 'Poppins', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: '2xl', inputRadius: 'full',
      shadow: 'md', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Periwinkle', baseColor: '#818CF8', temperature: 'cooler', category: 'cool',
    description: 'Soft periwinkle haze',
    componentConfig: {
      headingFont: 'Nunito', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'xl', cardRadius: '2xl', inputRadius: 'xl',
      shadow: 'sm', density: 'spacious', borderWidth: '1',
    },
  },


  // ==================== MORE MONOCHROME THEMES ====================
  {
    name: 'White Noise', baseColor: '#FAFAFA', temperature: 'natural', category: 'monochrome',
    description: 'Pure white minimalism',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '300',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'widest',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'spacious', borderWidth: '0',
    },
  },
  {
    name: 'Slate Stone', baseColor: '#475569', temperature: 'cooler', category: 'monochrome',
    description: 'Balanced slate palette',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },

];
