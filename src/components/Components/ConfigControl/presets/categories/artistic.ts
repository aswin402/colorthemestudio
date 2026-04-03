import type { Preset } from '../../../../../types';

export const artisticPresets: Preset[] = [
  // ==================== ARTISTIC CATEGORY ====================
  {
    name: 'Watercolor', baseColor: '#A6C1E0', temperature: 'cooler', category: 'artistic',
    description: 'Soft brush strokes',
    componentConfig: {
      headingFont: 'Poppins', bodyFont: 'Nunito',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'full',
      shadow: 'md', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Sketch', baseColor: '#2C3E50', temperature: 'natural', category: 'artistic',
    description: 'Hand-drawn style',
    componentConfig: {
      headingFont: 'Poppins', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Bauhaus', baseColor: '#E31B23', temperature: 'warmer', category: 'artistic',
    description: 'Bold primary colors',
    componentConfig: {
      headingFont: 'Bebas Neue', bodyFont: 'DM Sans',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'lg', lineHeight: 'compact',
      letterSpacing: 'wide',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'md', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Pop Art', baseColor: '#FF4D4D', temperature: 'warmer', category: 'artistic',
    description: 'Warhol-inspired pop art',
    componentConfig: {
      headingFont: 'Bebas Neue', bodyFont: 'DM Sans',
      headingWeight: '800', bodyWeight: '500',
      fontSizeHeading: '4xl', fontSizeBody: 'lg', lineHeight: 'compact',
      letterSpacing: 'wide',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'lg', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Impressionism', baseColor: '#D4AF37', temperature: 'warmer', category: 'artistic',
    description: 'Soft impressionist style',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'full',
      shadow: 'md', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Abstract', baseColor: '#FF6B6B', temperature: 'warmer', category: 'artistic',
    description: 'Bold abstract shapes',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Open Sans',
      headingWeight: '800', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'lg', cardRadius: '2xl', inputRadius: 'lg',
      shadow: 'lg', density: 'normal', borderWidth: '2',
    },
  },


  // ==================== EDITORIAL CATEGORY ====================
  {
    name: 'Editorial Black', baseColor: '#0A0A0A', temperature: 'natural', category: 'editorial',
    description: 'Magazine-style editorial',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '5xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'tight',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Broadsheet', baseColor: '#F5F0E8', temperature: 'warmer', category: 'editorial',
    description: 'Classic newspaper layout',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Lato',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Magazine Glam', baseColor: '#FF2D55', temperature: 'warmer', category: 'editorial',
    description: 'High-fashion magazine',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '5xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'widest',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'sm',
      shadow: 'none', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Longform', baseColor: '#1A1A1A', temperature: 'natural', category: 'editorial',
    description: 'Long-form content reading',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Lato',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'lg', lineHeight: 'loose',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'sm', inputRadius: 'sm',
      shadow: 'none', density: 'spacious', borderWidth: '0',
    },
  },
  {
    name: 'Substack', baseColor: '#FF6719', temperature: 'warmer', category: 'editorial',
    description: 'Newsletter-first design',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'lg', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'sm', inputRadius: 'none',
      shadow: 'none', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Typographic', baseColor: '#212121', temperature: 'natural', category: 'editorial',
    description: 'Typography-forward design',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'DM Sans',
      headingWeight: '800', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'tighter',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '2',
    },
  },


  // ==================== BRUTALIST CATEGORY ====================
  {
    name: 'Raw Concrete', baseColor: '#808080', temperature: 'natural', category: 'brutalist',
    description: 'Concrete brutalism',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '4',
    },
  },
  {
    name: 'Anti-Design', baseColor: '#FFD700', temperature: 'warmer', category: 'brutalist',
    description: 'Deliberately ugly is beautiful',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'Inter',
      headingWeight: '900', bodyWeight: '700',
      fontSizeHeading: '5xl', fontSizeBody: 'lg', lineHeight: 'compact',
      letterSpacing: 'widest',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '8',
    },
  },
  {
    name: 'Swiss Grid', baseColor: '#E8E8E8', temperature: 'natural', category: 'brutalist',
    description: 'Swiss international style',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '800', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'tighter',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Grunge', baseColor: '#3D2B1F', temperature: 'warmer', category: 'brutalist',
    description: 'Raw grunge aesthetic',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'DM Sans',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'none', cardRadius: 'sm', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '4',
    },
  },

];
