import type { Preset } from '../../../../../types';

export const gamingPresets: Preset[] = [
  // ==================== GAMING CATEGORY ====================
  {
    name: 'Game HUD', baseColor: '#00D4FF', temperature: 'cooler', category: 'gaming',
    description: 'Heads-up display UI',
    componentConfig: {
      headingFont: 'Bebas Neue', bodyFont: 'Manrope',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'wider',
      buttonRadius: 'none', cardRadius: 'sm', inputRadius: 'none',
      shadow: 'xl', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Pixel Quest', baseColor: '#7C3AED', temperature: 'cooler', category: 'gaming',
    description: '8-bit RPG aesthetics',
    componentConfig: {
      headingFont: 'Roboto Mono', bodyFont: 'Roboto Mono',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Gamer Dark', baseColor: '#0F0F23', temperature: 'cooler', category: 'gaming',
    description: 'Midnight gaming rig',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'lg', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Loot Box', baseColor: '#F59E0B', temperature: 'warmer', category: 'gaming',
    description: 'Treasure chest energy',
    componentConfig: {
      headingFont: 'Bebas Neue', bodyFont: 'DM Sans',
      headingWeight: '700', bodyWeight: '500',
      fontSizeHeading: '4xl', fontSizeBody: 'lg', lineHeight: 'compact',
      letterSpacing: 'wide',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'xl', density: 'normal', borderWidth: '2',
    },
  },
  {
    name: 'Esports Arena', baseColor: '#E11D48', temperature: 'cooler', category: 'gaming',
    description: 'Competitive esports stage',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'Manrope',
      headingWeight: '800', bodyWeight: '500',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'none', cardRadius: 'sm', inputRadius: 'none',
      shadow: 'lg', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Stealth Mode', baseColor: '#1C1C1C', temperature: 'natural', category: 'gaming',
    description: 'Tactical stealth UI',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'wider',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Fantasy RPG', baseColor: '#6B21A8', temperature: 'cooler', category: 'gaming',
    description: 'Mystical fantasy dungeon',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'DM Sans',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'xl', inputRadius: 'md',
      shadow: 'xl', density: 'normal', borderWidth: '2',
    },
  },


  // ==================== GLASSMORPHISM CATEGORY ====================
  {
    name: 'Frosted Glass', baseColor: '#6366F1', temperature: 'cooler', category: 'glassmorphism',
    description: 'Translucent frosted surface',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'xl', cardRadius: '2xl', inputRadius: 'xl',
      shadow: 'xl', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Glass Blue', baseColor: '#0EA5E9', temperature: 'cooler', category: 'glassmorphism',
    description: 'Crystal blue glass',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'xl', cardRadius: '2xl', inputRadius: 'xl',
      shadow: 'xl', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Glass Violet', baseColor: '#8B5CF6', temperature: 'cooler', category: 'glassmorphism',
    description: 'Ethereal violet glass',
    componentConfig: {
      headingFont: 'Poppins', bodyFont: 'Open Sans',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'normal',
      buttonRadius: 'xl', cardRadius: '2xl', inputRadius: 'xl',
      shadow: 'xl', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Glass Dark', baseColor: '#18181B', temperature: 'cooler', category: 'glassmorphism',
    description: 'Dark tinted glass panels',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'tight',
      buttonRadius: 'xl', cardRadius: '2xl', inputRadius: 'xl',
      shadow: 'xl', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Crystal Pink', baseColor: '#EC4899', temperature: 'warmer', category: 'glassmorphism',
    description: 'Pink crystal morphism',
    componentConfig: {
      headingFont: 'Poppins', bodyFont: 'Nunito',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: '2xl', inputRadius: 'full',
      shadow: 'xl', density: 'spacious', borderWidth: '1',
    },
  },

];
