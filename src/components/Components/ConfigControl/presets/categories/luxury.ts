import type { Preset } from '../../../../../types';

export const luxuryPresets: Preset[] = [
  // ==================== LUXURY CATEGORY ====================
  {
    name: 'Gold Leaf', baseColor: '#B8860B', temperature: 'warmer', category: 'luxury',
    description: 'Opulent elegance',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'lg', lineHeight: 'loose',
      letterSpacing: 'wide',
      buttonRadius: 'md', cardRadius: 'xl', inputRadius: 'md',
      shadow: 'xl', density: 'spacious', borderWidth: '2',
    },
  },
  {
    name: 'Platinum', baseColor: '#E5E4E2', temperature: 'cooler', category: 'luxury',
    description: 'Premium metallic',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'lg', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Royal', baseColor: '#6C3483', temperature: 'cooler', category: 'luxury',
    description: 'Regal purple',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'xl', inputRadius: 'md',
      shadow: 'xl', density: 'normal', borderWidth: '2',
    },
  },
  {
    name: 'Diamond', baseColor: '#F8F9FA', temperature: 'cooler', category: 'luxury',
    description: 'Diamond brilliance',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'xl', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Sapphire', baseColor: '#0F52BA', temperature: 'cooler', category: 'luxury',
    description: 'Deep sapphire blue',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'lg', density: 'normal', borderWidth: '2',
    },
  },
  {
    name: 'Emerald', baseColor: '#50C878', temperature: 'cooler', category: 'luxury',
    description: 'Luxurious emerald green',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'lg', density: 'spacious', borderWidth: '2',
    },
  },
  {
    name: 'Noir Luxury', baseColor: '#1A1A2E', temperature: 'cooler', category: 'luxury',
    description: 'Dark luxury fashion',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'wider',
      buttonRadius: 'none', cardRadius: 'sm', inputRadius: 'none',
      shadow: 'none', density: 'spacious', borderWidth: '1',
    },
  },


  // ==================== MORE LUXURY THEMES ====================
  {
    name: 'Black Diamond', baseColor: '#0A0A0A', temperature: 'natural', category: 'luxury',
    description: 'Ultimate dark luxury',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '300',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'widest',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'xl', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Rose Quartz', baseColor: '#B76E79', temperature: 'warmer', category: 'luxury',
    description: 'Feminine luxury gemstone',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'wide',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'full',
      shadow: 'lg', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Onyx', baseColor: '#3D3635', temperature: 'natural', category: 'luxury',
    description: 'Deep onyx stone',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'wide',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'xl', density: 'spacious', borderWidth: '1',
    },
  },

];
