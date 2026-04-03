import type { Preset } from '../../../../../types';

export const minimalPresets: Preset[] = [
  // ==================== MINIMAL CATEGORY ====================
  {
    name: 'Pure Minimal', baseColor: '#111827', temperature: 'natural', category: 'minimal',
    description: 'Less is more',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'compact',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Zen White', baseColor: '#FFFFFF', temperature: 'natural', category: 'minimal',
    description: 'Peaceful simplicity',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'DM Sans',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'wide',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'none', density: 'spacious', borderWidth: '0',
    },
  },
  {
    name: 'Calm Gray', baseColor: '#6B7280', temperature: 'natural', category: 'minimal',
    description: 'Understated elegance',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'none', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Soft Touch', baseColor: '#F3F4F6', temperature: 'warmer', category: 'minimal',
    description: 'Gentle and welcoming',
    componentConfig: {
      headingFont: 'Nunito', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: 'lg', inputRadius: 'full',
      shadow: 'sm', density: 'spacious', borderWidth: '0',
    },
  },
  {
    name: 'Architect', baseColor: '#4A4A4A', temperature: 'natural', category: 'minimal',
    description: 'Clean architectural lines',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Whisper', baseColor: '#FAFAF9', temperature: 'warmer', category: 'minimal',
    description: 'Subtle and quiet',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'none', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Bare', baseColor: '#EFEBE9', temperature: 'warmer', category: 'minimal',
    description: 'Bare essentials',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'normal', borderWidth: '0',
    },
  },
  {
    name: 'Muji Inspired', baseColor: '#3C3C3C', temperature: 'natural', category: 'minimal',
    description: 'Japanese minimalism',
    componentConfig: {
      headingFont: 'Noto Sans', bodyFont: 'Noto Sans',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'sm', inputRadius: 'sm',
      shadow: 'none', density: 'spacious', borderWidth: '1',
    },
  },


  // ==================== MORE MINIMAL THEMES ====================
  {
    name: 'Rice Paper', baseColor: '#F2EDE4', temperature: 'warmer', category: 'minimal',
    description: 'Japanese wabi-sabi',
    componentConfig: {
      headingFont: 'Noto Sans', bodyFont: 'Noto Sans',
      headingWeight: '400', bodyWeight: '300',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'wide',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'none', density: 'spacious', borderWidth: '0',
    },
  },
  {
    name: 'Museum', baseColor: '#F7F4EF', temperature: 'natural', category: 'minimal',
    description: 'Art gallery serenity',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '400', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'widest',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Clean Slate', baseColor: '#F1F5F9', temperature: 'cooler', category: 'minimal',
    description: 'Blank canvas freshness',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
];
