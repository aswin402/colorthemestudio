import type { Preset } from '../../../../../types';

export const vintagePresets: Preset[] = [
  // ==================== VINTAGE CATEGORY ====================
  {
    name: 'Vintage Paper', baseColor: '#D4A373', temperature: 'warmer', category: 'vintage',
    description: 'Aged parchment',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Sunset', baseColor: '#EA580C', temperature: 'warmer', category: 'vintage',
    description: 'Golden hour glow',
    componentConfig: {
      headingFont: 'Bebas Neue', bodyFont: 'DM Sans',
      headingWeight: '800', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'lg', lineHeight: 'compact',
      letterSpacing: 'wide',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'lg', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Retro Wave', baseColor: '#FF6B35', temperature: 'warmer', category: 'vintage',
    description: '80s aesthetic',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'DM Sans',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'lg', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'md', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Sepia', baseColor: '#C06C4F', temperature: 'warmer', category: 'vintage',
    description: 'Old photograph',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Art Deco', baseColor: '#D4AF37', temperature: 'warmer', category: 'vintage',
    description: 'Gatsby era',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Open Sans',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'widest',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'lg', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Mid-Century', baseColor: '#E07A5F', temperature: 'warmer', category: 'vintage',
    description: '1950s modern',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Victorian', baseColor: '#8B5A2B', temperature: 'warmer', category: 'vintage',
    description: 'Classic Victorian style',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },


  // ==================== RETRO CATEGORY ====================
  {
    name: 'DOS Terminal', baseColor: '#00FF00', temperature: 'cooler', category: 'retro',
    description: 'Green phosphor monitor',
    componentConfig: {
      headingFont: 'Roboto Mono', bodyFont: 'Roboto Mono',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'wider',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Tape Deck', baseColor: '#1A1A1A', temperature: 'warmer', category: 'retro',
    description: 'Mixtape era design',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'Lato',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'wide',
      buttonRadius: 'sm', cardRadius: 'sm', inputRadius: 'sm',
      shadow: 'md', density: 'normal', borderWidth: '2',
    },
  },
  {
    name: 'Neon Sign', baseColor: '#FF1493', temperature: 'cooler', category: 'retro',
    description: 'Glowing neon diner sign',
    componentConfig: {
      headingFont: 'Bebas Neue', bodyFont: 'DM Sans',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'wide',
      buttonRadius: 'sm', cardRadius: 'sm', inputRadius: 'sm',
      shadow: 'xl', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Kodak Film', baseColor: '#F4C542', temperature: 'warmer', category: 'retro',
    description: 'Golden film grain',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Lato',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Typewriter', baseColor: '#F5F0E8', temperature: 'warmer', category: 'retro',
    description: 'Classic typewriter feel',
    componentConfig: {
      headingFont: 'Roboto Mono', bodyFont: 'Roboto Mono',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'loose',
      letterSpacing: 'wider',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Polaroid', baseColor: '#FFF9F0', temperature: 'warmer', category: 'retro',
    description: 'Instant camera nostalgia',
    componentConfig: {
      headingFont: 'Nunito', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'none', inputRadius: 'sm',
      shadow: 'xl', density: 'spacious', borderWidth: '8',
    },
  },

];
