import type { Preset } from '../../../../../types';

export const devtoolsPresets: Preset[] = [
  // ==================== SYSTEM / OS CATEGORY ====================
  {
    name: 'macOS Ventura', baseColor: '#2E2E2E', temperature: 'natural', category: 'system',
    description: 'macOS-inspired clean UI',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'tight',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'lg', density: 'normal', borderWidth: '0',
    },
  },
  {
    name: 'Windows 11', baseColor: '#0078D4', temperature: 'cooler', category: 'system',
    description: 'Windows 11 Fluent style',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '500', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'xl', inputRadius: 'md',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Ubuntu Yaru', baseColor: '#E95420', temperature: 'warmer', category: 'system',
    description: 'Ubuntu Yaru GTK theme',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Open Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Android Dynamic', baseColor: '#6750A4', temperature: 'cooler', category: 'system',
    description: 'Android Material You palette',
    componentConfig: {
      headingFont: 'Nunito', bodyFont: 'Nunito',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'full', cardRadius: 'xl', inputRadius: 'full',
      shadow: 'sm', density: 'normal', borderWidth: '0',
    },
  },
  {
    name: 'GNOME Shell', baseColor: '#3584E4', temperature: 'cooler', category: 'system',
    description: 'GNOME desktop inspired',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },


  // ==================== DEVELOPER TOOLS CATEGORY ====================
  {
    name: 'VS Code Dark+', baseColor: '#1E1E1E', temperature: 'cooler', category: 'devtools',
    description: 'VS Code dark theme',
    componentConfig: {
      headingFont: 'Roboto Mono', bodyFont: 'Roboto Mono',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'sm', inputRadius: 'sm',
      shadow: 'none', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'JetBrains Dark', baseColor: '#2B2B2B', temperature: 'natural', category: 'devtools',
    description: 'JetBrains IDE aesthetic',
    componentConfig: {
      headingFont: 'Roboto Mono', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'sm', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Terminal Green', baseColor: '#00FF41', temperature: 'cooler', category: 'devtools',
    description: 'Classic terminal hacker',
    componentConfig: {
      headingFont: 'Roboto Mono', bodyFont: 'Roboto Mono',
      headingWeight: '700', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'sm', lineHeight: 'normal',
      letterSpacing: 'wider',
      buttonRadius: 'none', cardRadius: 'none', inputRadius: 'none',
      shadow: 'none', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'API Dashboard', baseColor: '#0F766E', temperature: 'cooler', category: 'devtools',
    description: 'Clean API monitoring UI',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Roboto Mono',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'compact',
      letterSpacing: 'tight',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'sm', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'One Dark Pro', baseColor: '#282C34', temperature: 'cooler', category: 'devtools',
    description: 'Atom One Dark color scheme',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Roboto Mono',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'md', inputRadius: 'md',
      shadow: 'sm', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Solarized Dark', baseColor: '#002B36', temperature: 'cooler', category: 'devtools',
    description: 'Classic Solarized scheme',
    componentConfig: {
      headingFont: 'Roboto Mono', bodyFont: 'DM Sans',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: 'xl', fontSizeBody: 'sm', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'sm', cardRadius: 'md', inputRadius: 'sm',
      shadow: 'none', density: 'compact', borderWidth: '1',
    },
  },
  {
    name: 'Catppuccin Mocha', baseColor: '#1E1E2E', temperature: 'cooler', category: 'devtools',
    description: 'Catppuccin Mocha palette',
    componentConfig: {
      headingFont: 'DM Sans', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'relaxed',
      letterSpacing: 'normal',
      buttonRadius: 'lg', cardRadius: 'xl', inputRadius: 'lg',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },
  {
    name: 'Tokyo Night', baseColor: '#1A1B26', temperature: 'cooler', category: 'devtools',
    description: 'Tokyo Night VSCode theme',
    componentConfig: {
      headingFont: 'Inter', bodyFont: 'Inter',
      headingWeight: '600', bodyWeight: '400',
      fontSizeHeading: '2xl', fontSizeBody: 'base', lineHeight: 'normal',
      letterSpacing: 'normal',
      buttonRadius: 'md', cardRadius: 'lg', inputRadius: 'md',
      shadow: 'md', density: 'normal', borderWidth: '1',
    },
  },

];
