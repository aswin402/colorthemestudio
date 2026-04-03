import type { Preset } from '../../../../../types';

export const professionalPresets: Preset[] = [
  // ==================== PROFESSIONAL CATEGORY ====================
  {
    name: 'Corporate Blue', baseColor: '#2563EB', temperature: 'cooler', category: 'professional',
    description: 'Trustworthy and clean',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Executive', baseColor: '#0F172A', temperature: 'natural', category: 'professional',
    description: 'Sophisticated authority',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'md', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'SaaS Modern', baseColor: '#6366F1', temperature: 'cooler', category: 'professional',
    description: 'Tech-forward',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Finance', baseColor: '#047857', temperature: 'cooler', category: 'professional',
    description: 'Stable and reliable',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'compact',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Consultant', baseColor: '#5B21B6', temperature: 'cooler', category: 'professional',
    description: 'Wise and strategic',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Law Firm', baseColor: '#1E293B', temperature: 'natural', category: 'professional',
    description: 'Authoritative tradition',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '2',
    },
  },
  {
    name: 'Tech Startup', baseColor: '#06B6D4', temperature: 'cooler', category: 'professional',
    description: 'Innovative and fresh',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'lg', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Healthcare', baseColor: '#0891B2', temperature: 'cooler', category: 'professional',
    description: 'Calm and caring',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: 'lg', inputRadius: 'full',
      shadow: 'sm', density: 'spacious', borderWidth: '1',
    },
  },
  {
    name: 'Education', baseColor: '#EAB308', temperature: 'warmer', category: 'professional',
    description: 'Warm and approachable',
    componentConfig: {
      headingFont: 'Nunito', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Agency', baseColor: '#EC4899', temperature: 'warmer', category: 'professional',
    description: 'Creative agency style',
    componentConfig: {
      headingFont: 'Poppins', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'lg', inputRadius: 'lg',
      shadow: 'lg', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Enterprise Gray', baseColor: '#374151', temperature: 'natural', category: 'professional',
    description: 'Serious business UI',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'sm', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Fintech Pro', baseColor: '#6366F1', temperature: 'cooler', category: 'professional',
    description: 'Modern fintech look',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'tight',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },


  // ==================== MORE PROFESSIONAL THEMES ====================
  {
    name: 'Consulting Firm', baseColor: '#1E3A5F', temperature: 'cooler', category: 'professional',
    description: 'McKinsey-style authority',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Inter',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Medical Blue', baseColor: '#1D4ED8', temperature: 'cooler', category: 'professional',
    description: 'Clinical medical interface',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'VC Pitch', baseColor: '#0F172A', temperature: 'natural', category: 'professional',
    description: 'Investor pitch deck style',
    componentConfig: {
      headingFont: 'Manrope', bodyFont: 'Inter',
      headingWeight: '800', bodyWeight: '400',
      fontSizeHeading: '4xl', fontSizeBody: 'base', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'lg', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Logistics Pro', baseColor: '#059669', temperature: 'cooler', category: 'professional',
    description: 'Supply chain dashboard',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Real Estate', baseColor: '#78350F', temperature: 'warmer', category: 'professional',
    description: 'Premium property listing',
    componentConfig: {
      headingFont: 'Playfair Display', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '3xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'xl', inputRadius: 'md',
      shadow: 'lg', density: 'spacious', borderWidth: '1',
    },
  },

];
