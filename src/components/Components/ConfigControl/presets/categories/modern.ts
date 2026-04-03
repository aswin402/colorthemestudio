import type { Preset } from '../../../../../types';

export const modernPresets: Preset[] = [
  // ==================== MODERN CATEGORY ====================
  {
    name: 'Modern Minimal', baseColor: '#0F172A', temperature: 'cooler', category: 'modern',
    description: 'Clean and contemporary',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'tight',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Glassmorphism', baseColor: '#3B82F6', temperature: 'natural', category: 'modern',
    description: 'Frosted glass effect',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'xl', inputRadius: 'md',
      shadow: 'xl', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Neubrutalism', baseColor: '#171717', temperature: 'natural', category: 'modern',
    description: 'Bold and raw',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '800', bodyWeight: '500',
      fontSizeHeading: '4xl', fontSizeBody: 'lg', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '4',
    },
  },
  {
    name: 'Rose Gold', baseColor: '#BE185D', temperature: 'warmer', category: 'modern',
    description: 'Elegant and refined',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Nordic Frost', baseColor: '#E2E8F0', temperature: 'cooler', category: 'modern',
    description: 'Scandinavian simplicity',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'spacious', borderWidth: '0',
    },
  },
  {
    name: 'Tech Noir', baseColor: '#1A1A2E', temperature: 'cooler', category: 'modern',
    description: 'Cyberpunk minimalism',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'sm', inputRadius: 'sm',
      shadow: 'lg', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Aurora', baseColor: '#0F2027', temperature: 'cooler', category: 'modern',
    description: 'Northern lights inspiration',
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
    name: 'Monochrome', baseColor: '#2D2D2D', temperature: 'natural', category: 'modern',
    description: 'Black and white elegance',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Vaporwave', baseColor: '#FF71CE', temperature: 'cooler', category: 'modern',
    description: '80s vaporwave aesthetic',
    componentConfig: {
      headingFont: 'Bebas Neue', bodyFont: 'DM Sans',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'lg', lineHeight: 'compact',
      letterSpacing: 'wide',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'xl', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Brutalism', baseColor: '#000000', temperature: 'natural', category: 'modern',
    description: 'Raw brutalist design',
    componentConfig: {
      headingFont: 'Oswald', bodyFont: 'Inter',
      headingWeight: '900', bodyWeight: '500',
      fontSizeHeading: '4xl', fontSizeBody: 'lg', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '8',
    },
  },
  {
    name: 'Vercel Dark', baseColor: '#000000', temperature: 'natural', category: 'modern',
    description: 'Vercel-inspired dark UI',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'tight',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'none', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Linear Style', baseColor: '#5E6AD2', temperature: 'cooler', category: 'modern',
    description: 'Linear-app inspired',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'sm', density: 'compact', borderWidth: '1',
    },
  },


  // ==================== APP-INSPIRED THEMES ====================
  {
    name: 'Notion Style', baseColor: '#191919', temperature: 'natural', category: 'minimal',
    description: 'Notion-inspired clean UI',
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
    name: 'GitHub Dark', baseColor: '#0D1117', temperature: 'cooler', category: 'dark',
    description: 'GitHub-inspired dark mode',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'none', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Stripe UI', baseColor: '#635BFF', temperature: 'cooler', category: 'professional',
    description: 'Stripe-inspired modern UI',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'tight',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Apple HIG', baseColor: '#007AFF', temperature: 'cooler', category: 'modern',
    description: 'Apple Human Interface style',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'tight',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'xl',
      shadow: 'sm', density: 'spacious', borderWidth: '0',
    },
  },
  {
    name: 'Material You', baseColor: '#6750A4', temperature: 'cooler', category: 'modern',
    description: 'Google Material Design 3',
    componentConfig: {
      headingFont: 'Nunito', bodyFont: 'Nunito',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'full',
      shadow: 'md', density: 'normal', borderWidth: '0',
    },
  },
  {
    name: 'Fluent Design', baseColor: '#0078D4', temperature: 'cooler', category: 'modern',
    description: 'Microsoft Fluent UI style',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'none', density: 'normal', borderWidth: '0',
    },
  },

];
