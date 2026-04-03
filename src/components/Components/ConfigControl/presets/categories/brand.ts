import type { Preset } from '../../../../../types';

export const brandPresets: Preset[] = [
  // ==================== SEASONAL CATEGORY ====================
  {
    name: 'Spring Bloom', baseColor: '#34D399', temperature: 'natural', category: 'seasonal',
    description: 'Fresh spring awakening',
    componentConfig: {
      headingFont: 'Nunito', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'lg', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'full',
      shadow: 'sm', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Summer Heat', baseColor: '#F97316', temperature: 'warmer', category: 'seasonal',
    description: 'Scorching summer energy',
    componentConfig: {
      headingFont: 'Poppins', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'lg', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'lg', density: 'normal', borderWidth: '2',
    },
  },
  {
    name: 'Autumn Harvest', baseColor: '#B45309', temperature: 'warmer', category: 'seasonal',
    description: 'Rich autumn warmth',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Lato',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Winter Snow', baseColor: '#E0F2FE', temperature: 'cooler', category: 'seasonal',
    description: 'Crisp winter frost',
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
    name: 'Cherry Blossom', baseColor: '#FDA4AF', temperature: 'warmer', category: 'seasonal',
    description: 'Japanese spring festival',
    componentConfig: {
      headingFont: 'Noto Sans', bodyFont: 'Nunito',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: '2xl', inputRadius: 'full',
      shadow: 'sm', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Holiday Cheer', baseColor: '#DC2626', temperature: 'warmer', category: 'seasonal',
    description: 'Festive holiday warmth',
    componentConfig: {
      headingFont: 'Nunito', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '2',
    },
  },


  // ==================== BRAND CATEGORY ====================
  {
    name: 'Notion Dark', baseColor: '#2F2F2F', temperature: 'natural', category: 'brand',
    description: 'Notion dark workspace',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'sm', inputRadius: 'sm',
      shadow: 'none', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Figma Purple', baseColor: '#A259FF', temperature: 'cooler', category: 'brand',
    description: 'Figma design tool palette',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'tight',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'sm', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Discord Blurple', baseColor: '#5865F2', temperature: 'cooler', category: 'brand',
    description: 'Discord-inspired chat UI',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'md', density: 'compact', borderWidth: '0',
    },
  },
  {
    name: 'Slack Aubergine', baseColor: '#4A154B', temperature: 'cooler', category: 'brand',
    description: 'Slack team workspace',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Lato',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Spotify Green', baseColor: '#1DB954', temperature: 'natural', category: 'brand',
    description: 'Spotify music player style',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'sm', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'full', cardRadius: 'md', inputRadius: 'full',
      shadow: 'none', density: 'compact', borderWidth: '0',
    },
  },
  {
    name: 'Netflix Red', baseColor: '#E50914', temperature: 'warmer', category: 'brand',
    description: 'Netflix streaming dark UI',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'none', density: 'normal', borderWidth: '0',
    },
  },
  {
    name: 'X Dark', baseColor: '#15202B', temperature: 'cooler', category: 'brand',
    description: 'X (Twitter) dark mode',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'full',
      shadow: 'none', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Twitch Purple', baseColor: '#9146FF', temperature: 'cooler', category: 'brand',
    description: 'Twitch live streaming UI',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'md', density: 'compact', borderWidth: '0',
    },
  },

];
