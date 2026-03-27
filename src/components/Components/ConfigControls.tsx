import { useThemeStore } from '../../store/useThemeStore';
import type { BorderRadiusSize, ComponentConfig, ShadowSize, DensityType, ThemeTemperature } from '../../types';
import { generateRandomStyles } from '../../utils/randomTheme';
import { useState } from 'react';

type Preset = {
  name: string;
  baseColor: string;
  temperature: ThemeTemperature;
  componentConfig: Partial<ComponentConfig>;
};

// Full Presets Array with new Modern, Minimal & Simple themes
const presets: Preset[] = [
  // ── Original Shadcn & Basic Presets ──
  { name: 'Shadcn Slate', baseColor: '#475569', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'md' } },
  { name: 'Shadcn Zinc', baseColor: '#71717A', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'none' } },
  { name: 'Modern Blue', baseColor: '#3B82F6', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Poppins', bodyFont: 'Inter', buttonRadius: 'lg' } },
  { name: 'Warm Orange', baseColor: '#F59E0B', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', buttonRadius: 'full' } },
  { name: 'Dark Purple', baseColor: '#8B5CF6', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Roboto Mono', bodyFont: 'Roboto Mono', shadow: 'none' } },
  { name: 'Neutral Gray', baseColor: '#6B7280', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Open Sans', bodyFont: 'Open Sans', density: 'normal' } },
  { name: 'Vibrant Red', baseColor: '#EF4444', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Oswald', bodyFont: 'Inter', fontSizeHeading: '2xl' } },
  { name: 'Cool Mint', baseColor: '#06D6A0', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Lato', bodyFont: 'Lato', lineHeight: 'compact' } },
  { name: 'Pro Indigo', baseColor: '#6366F1', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Raleway', bodyFont: 'Raleway', buttonRadius: 'lg' } },
  { name: 'Sunny Yellow', baseColor: '#FBBF24', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Montserrat', bodyFont: 'Montserrat', shadow: 'xl' } },

  // ── Advanced & Thematic Presets ──
  { name: 'Amethyst Haze', baseColor: '#A855F7', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Lora', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'lg', density: 'spacious' } },
  { name: 'Kodama Grove', baseColor: '#22C55E', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'sm', shadow: 'md', density: 'normal' } },
  { name: 'Quantum Rose', baseColor: '#F43F5E', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Poppins', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'full', shadow: 'md' } },
  { name: 'Caffeine', baseColor: '#9A3412', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Oswald', bodyFont: 'Roboto', headingWeight: '600', buttonRadius: 'none', shadow: 'sm', borderWidth: '2' } },
  { name: 'Neo Brutalism', baseColor: '#EAB308', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'system-ui', headingWeight: '800', buttonRadius: 'none', shadow: 'none', borderWidth: '4' } },
  { name: 'Vintage Paper', baseColor: '#D4A373', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Lora', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '1' } },
  { name: 'Claude', baseColor: '#5E5CE6', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'system-ui', bodyFont: 'system-ui', headingWeight: '500', buttonRadius: 'lg', shadow: 'sm' } },
  { name: 'Mono / Graphite', baseColor: '#52525B', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'ui-monospace', headingWeight: '600', buttonRadius: 'md', shadow: 'none' } },
  { name: 'Ocean Breeze', baseColor: '#14B8A6', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Lato', bodyFont: 'Open Sans', headingWeight: '600', buttonRadius: 'full', shadow: 'md' } },
  { name: 'Solar Dusk', baseColor: '#F97316', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Montserrat', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'lg', density: 'spacious' } },

  // ── Playful & Thematic ──
  { name: 'Bubblegum', baseColor: '#EC4899', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Fredoka', bodyFont: 'Comic Neue', headingWeight: '800', buttonRadius: 'full', shadow: 'sm', borderWidth: '2', fontSizeHeading: '2xl', lineHeight: 'compact' } },
  { name: 'Claymorphism', baseColor: '#D3B89E', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Plus Jakarta Sans', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'xl', borderWidth: '0', fontSizeHeading: 'xl', lineHeight: 'relaxed' } },
  { name: 'Pastel Dreams', baseColor: '#C4B5FD', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Syne', bodyFont: 'Nunito', headingWeight: '400', buttonRadius: 'lg', shadow: 'none', borderWidth: '1', density: 'spacious', lineHeight: 'relaxed', fontSizeHeading: 'xl' } },
  { name: 'Northern Lights', baseColor: '#0D9488', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Orbitron', bodyFont: 'Exo 2', headingWeight: '800', buttonRadius: 'md', shadow: 'lg', fontSizeHeading: '2xl', lineHeight: 'compact' } },
  { name: 'Mocha Mousse', baseColor: '#8C5A3E', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Merriweather', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', lineHeight: 'relaxed' } },
  { name: 'Bold Tech', baseColor: '#06B6D4', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Archivo', bodyFont: 'Inter', headingWeight: '800', buttonRadius: 'sm', shadow: 'sm', borderWidth: '1', fontSizeHeading: '2xl', lineHeight: 'normal' } },
  { name: 'Retro Arcade', baseColor: '#D946EF', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Press Start 2P', bodyFont: 'Rubik', headingWeight: '400', buttonRadius: 'sm', shadow: 'none', borderWidth: '4', density: 'compact', lineHeight: 'compact' } },
  { name: 'Sage Garden', baseColor: '#86EFAC', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Fraunces', bodyFont: 'DM Sans', headingWeight: '500', buttonRadius: 'lg', shadow: 'md', density: 'normal', lineHeight: 'relaxed' } },
  { name: 'Darkmatter', baseColor: '#0A0A0A', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Manrope', bodyFont: 'Karla', headingWeight: '500', buttonRadius: 'md', shadow: 'sm', borderWidth: '0', lineHeight: 'normal' } },
  { name: 'Tangerine', baseColor: '#EA580C', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Bebas Neue', bodyFont: 'Montserrat', headingWeight: '800', buttonRadius: 'lg', shadow: 'lg', fontSizeHeading: '2xl' } },

  // ── DaisyUI Classic Overhauls ──
  { name: 'Daisy Light', baseColor: '#64748B', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Geist', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '1', lineHeight: 'normal' } },
  { name: 'Daisy Dark', baseColor: '#1E293B', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Geist', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'lg', borderWidth: '1', lineHeight: 'normal' } },
  { name: 'Daisy Cupcake', baseColor: '#65C3C8', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'full', shadow: 'sm' } },
  { name: 'Daisy Bumblebee', baseColor: '#EAB308', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Montserrat', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'md', shadow: 'sm', density: 'normal' } },
  { name: 'Daisy Emerald', baseColor: '#10B981', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Syne', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '0' } },
  { name: 'Daisy Corporate', baseColor: '#3B82F6', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Manrope', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'md', shadow: 'sm', borderWidth: '1', density: 'normal' } },
  { name: 'Daisy Forest', baseColor: '#1eb854', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'system-ui', bodyFont: 'system-ui', headingWeight: '600', buttonRadius: 'full', shadow: 'sm' } },
  { name: 'Daisy Lofi', baseColor: '#A1A1AA', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Nunito Sans', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'sm', shadow: 'none', borderWidth: '1', density: 'compact' } },
  { name: 'Daisy Pastel', baseColor: '#C4B5FD', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Nunito', bodyFont: 'Figtree', headingWeight: '600', buttonRadius: 'lg', shadow: 'none', borderWidth: '1', density: 'spacious' } },
  { name: 'Daisy Fantasy', baseColor: '#6e0b75', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Cinzel', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '0' } },
  { name: 'Daisy Black', baseColor: '#333333', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'system-ui', bodyFont: 'system-ui', headingWeight: '700', buttonRadius: 'none', shadow: 'md' } },
  { name: 'Daisy Dracula', baseColor: '#ff79c6', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'lg' } },
  { name: 'Daisy CMYK', baseColor: '#45AEEE', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'system-ui', bodyFont: 'system-ui', headingWeight: '700', buttonRadius: 'none', shadow: 'none', borderWidth: '2' } },
  { name: 'Daisy Acid', baseColor: '#FF00FF', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Rubik', headingWeight: '800', buttonRadius: 'none', shadow: 'sm' } },
  { name: 'Daisy Night', baseColor: '#6366F1', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Manrope', bodyFont: 'Geist', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '0' } },
  { name: 'Daisy Winter', baseColor: '#3B82F6', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Archivo', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'none', borderWidth: '1' } },
  { name: 'Daisy Dim', baseColor: '#0F766E', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Plus Jakarta Sans', bodyFont: 'Karla', headingWeight: '500', buttonRadius: 'md', shadow: 'sm', borderWidth: '0' } },
  { name: 'Daisy Sunset', baseColor: '#F97316', temperature: 'warmer' as ThemeTemperature, componentConfig: { headingFont: 'DM Sans', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'md', density: 'normal' } },

  // ── NEW: Modern Presets ─────────────────────────────────────
  { name: 'Modern Minimal', baseColor: '#0F172A', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'sm', density: 'normal', borderWidth: '1' } },
  { name: 'Modern Glassmorphism', baseColor: '#3B82F6', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'md', shadow: 'xl', borderWidth: '1', density: 'spacious' } },
  { name: 'Modern Neubrutalism', baseColor: '#171717', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '800', buttonRadius: 'none', shadow: 'none', borderWidth: '4', density: 'compact' } },
  { name: 'Modern Swiss', baseColor: '#1E2937', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'md', shadow: 'none', borderWidth: '1', density: 'normal' } },

  // ── NEW: Minimal Presets ────────────────────────────────────
  { name: 'Pure Minimal', baseColor: '#111827', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'none', shadow: 'none', borderWidth: '1', density: 'spacious', lineHeight: 'relaxed' } },
  { name: 'Minimal Light', baseColor: '#64748B', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '400', buttonRadius: 'sm', shadow: 'none', borderWidth: '1', density: 'normal' } },
  { name: 'Minimal Monochrome', baseColor: '#374151', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Geist', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'none', borderWidth: '0', density: 'normal' } },

  // ── NEW: Simple & Clean Presets ─────────────────────────────
  { name: 'Simple Clean', baseColor: '#334155', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '1', density: 'normal', lineHeight: 'normal' } },
  { name: 'Simple Soft', baseColor: '#64748B', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Nunito', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'lg', shadow: 'sm', borderWidth: '1', density: 'spacious' } },
  { name: 'Simple Corporate', baseColor: '#1E40AF', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Manrope', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'md', shadow: 'none', borderWidth: '1', density: 'normal' } },

  // ── NEW: Elegant & Professional ─────────────────────────────
  { name: 'Elegant Luxury', baseColor: '#4338CA', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'md', borderWidth: '1', density: 'spacious', lineHeight: 'relaxed' } },
  { name: 'Sophisticated Dark', baseColor: '#0A0A0A', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Instrument Sans', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'lg', borderWidth: '0', density: 'normal' } },

  // ── NEW: Tech & Futuristic ──────────────────────────────────
  { name: 'Tech Futuristic', baseColor: '#22D3EE', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Orbitron', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'full', shadow: 'xl', borderWidth: '1', density: 'compact', fontSizeHeading: '2xl' } },
  { name: 'Cyber Minimal', baseColor: '#06B6D4', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'none', shadow: 'sm', borderWidth: '2', density: 'normal' } },

  // ── NEW: Soft & Friendly ────────────────────────────────────
  { name: 'Soft Pastel', baseColor: '#A5B4FC', temperature: 'cooler' as ThemeTemperature, componentConfig: { headingFont: 'Nunito', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'full', shadow: 'sm', borderWidth: '1', density: 'spacious' } },
  { name: 'Calm Nature', baseColor: '#10B981', temperature: 'natural' as ThemeTemperature, componentConfig: { headingFont: 'Lora', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'lg', shadow: 'md', borderWidth: '1', density: 'normal' } },
];

export const ConfigControls = () => {
  const { componentConfig, setBaseColor, setTemperature, setComponentConfig } = useThemeStore();
  const [showPresets, setShowPresets] = useState(false);

  const applyPreset = (preset: Preset) => {
    setBaseColor(preset.baseColor);
    setTemperature(preset.temperature);
    setComponentConfig(preset.componentConfig);
  };

  const handleRandomStyles = () => {
    const random = generateRandomStyles();
    setBaseColor(random.baseColor);
    setTemperature(random.temperature);
    setComponentConfig(random.componentConfig);
  };

  const radiusOptions: { label: string; value: BorderRadiusSize }[] = [
    { label: 'None', value: 'none' },
    { label: 'Sm', value: 'sm' },
    { label: 'Md', value: 'md' },
    { label: 'Lg', value: 'lg' },
    { label: 'Full', value: 'full' },
  ];

  const fontOptions = [
    // Sans-serif UI
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Poppins', 'Montserrat', 'Nunito', 
    'Nunito Sans', 'DM Sans', 'Manrope', 'Raleway', 'Rubik', 'Ubuntu', 'Karla', 
    'Figtree', 'Outfit', 'Lexend', 'Work Sans', 'Barlow', 'Archivo', 
    'Plus Jakarta Sans', 'Urbanist', 'Syne', 'Space Grotesk', 'Exo 2',
    // Display / Heading
    'Oswald', 'Bebas Neue', 'Anton', 'Orbitron', 'Instrument Sans',
    // Serif
    'Playfair Display', 'Merriweather', 'Lora', 'Fraunces', 'Cinzel',
    // Decorative & Monospace
    'Fredoka', 'Comic Neue', 'Press Start 2P', 'Space Mono', 'Geist',
    // System
    'system-ui', 'ui-monospace',
  ];

  const weightOptions = [
    { label: 'Regular (400)', value: '400' },
    { label: 'Medium (500)', value: '500' },
    { label: 'Semibold (600)', value: '600' },
    { label: 'Bold (700)', value: '700' },
    { label: 'Extra Bold (800)', value: '800' },
  ];

  const updateConfig = (key: keyof ComponentConfig, value: string) => {
    setComponentConfig({ [key]: value });
  };

  const renderWeightSelector = (title: string, configKey: keyof ComponentConfig) => {
    const currentValue = componentConfig[configKey];
    return (
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">{title}</label>
        <select
          value={currentValue as string}
          onChange={(e) => updateConfig(configKey, e.target.value)}
          className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        >
          {weightOptions.map(opt => (
            <option key={opt.value} value={opt.value} className="bg-background text-foreground">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderRadiusSelector = (title: string, configKey: keyof ComponentConfig) => {
    const currentValue = componentConfig[configKey];
    return (
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">{title}</label>
        <div className="flex flex-wrap gap-2">
          {radiusOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateConfig(configKey, opt.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors border ${
                currentValue === opt.value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-transparent text-foreground border-border hover:border-black/20 dark:hover:border-white/20'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderFontSelector = (title: string, configKey: keyof ComponentConfig) => {
    const currentValue = componentConfig[configKey];
    return (
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">{title}</label>
        <select
          value={currentValue as string}
          onChange={(e) => updateConfig(configKey, e.target.value)}
          className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        >
          {fontOptions.map(font => (
            <option key={font} value={font} className="bg-background text-foreground">
              {font}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderFontSizeSelector = (title: string, configKey: keyof ComponentConfig) => {
    const fontSizeOptions = [
      { label: 'XS', value: 'xs' },
      { label: 'Sm', value: 'sm' },
      { label: 'Base', value: 'base' },
      { label: 'Lg', value: 'lg' },
      { label: 'Xl', value: 'xl' },
      { label: '2Xl', value: '2xl' },
    ];
    const currentValue = componentConfig[configKey];
    return (
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">{title}</label>
        <select
          value={currentValue as string}
          onChange={(e) => updateConfig(configKey, e.target.value)}
          className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        >
          {fontSizeOptions.map(opt => (
            <option key={opt.value} value={opt.value} className="bg-background text-foreground">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderLineHeightSelector = (title: string, configKey: keyof ComponentConfig) => {
    const lineHeightOptions = [
      { label: 'Compact', value: 'compact' },
      { label: 'Normal', value: 'normal' },
      { label: 'Relaxed', value: 'relaxed' },
    ];
    const currentValue = componentConfig[configKey];
    return (
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">{title}</label>
        <select
          value={currentValue as string}
          onChange={(e) => updateConfig(configKey, e.target.value)}
          className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        >
          {lineHeightOptions.map(opt => (
            <option key={opt.value} value={opt.value} className="bg-background text-foreground">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderShadowSelector = (title: string, configKey: keyof ComponentConfig) => {
    const shadowOptions: { label: string; value: ShadowSize }[] = [
      { label: 'None', value: 'none' },
      { label: 'Sm', value: 'sm' },
      { label: 'Md', value: 'md' },
      { label: 'Lg', value: 'lg' },
      { label: 'Xl', value: 'xl' },
    ];
    const currentValue = componentConfig[configKey];
    return (
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">{title}</label>
        <div className="flex flex-wrap gap-2">
          {shadowOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateConfig(configKey, opt.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors border ${
                currentValue === opt.value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-transparent text-foreground border-border hover:border-black/20 dark:hover:border-white/20'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderDensitySelector = (title: string, configKey: keyof ComponentConfig) => {
    const densityOptions: { label: string; value: DensityType }[] = [
      { label: 'Compact', value: 'compact' },
      { label: 'Normal', value: 'normal' },
      { label: 'Spacious', value: 'spacious' },
    ];
    const currentValue = componentConfig[configKey];
    return (
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">{title}</label>
        <div className="flex flex-wrap gap-2">
          {densityOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateConfig(configKey, opt.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors border ${
                currentValue === opt.value
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-transparent text-foreground border-border hover:border-black/20 dark:hover:border-white/20'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderBorderWidthSelector = (title: string, configKey: keyof ComponentConfig) => {
    const borderWidthOptions = [
      { label: '0px', value: '0' },
      { label: '1px', value: '1' },
      { label: '2px', value: '2' },
      { label: '4px', value: '4' },
      { label: '8px', value: '8' },
    ];
    const currentValue = componentConfig[configKey];
    return (
      <div className="flex flex-col gap-3">
        <label className="text-sm font-medium">{title}</label>
        <select
          value={currentValue as string}
          onChange={(e) => updateConfig(configKey, e.target.value)}
          className="px-3 py-2 text-sm bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
        >
          {borderWidthOptions.map(opt => (
            <option key={opt.value} value={opt.value} className="bg-background text-foreground">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 h-full">
      <div>
        <h2 className="text-xl font-bold tracking-tight mb-1">Component Themes</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Customize typography, geometry, layout and effects with live preview.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mb-6 gap-3">
        <button
          onClick={handleRandomStyles}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-emerald-600/50"
          title="Generate random theme + component styles"
        >
          Random Styles
        </button>

        <div className="relative">
          <button
            onClick={() => setShowPresets(!showPresets)}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-blue-600/50"
            title="Browse professional presets"
          >
            Preset Styles
            <svg className={`w-4 h-4 transition-transform ${showPresets ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showPresets && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowPresets(false)} />
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-2xl z-50 overflow-hidden">
                <div className="p-4 border-b border-gray-100 dark:border-zinc-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Professional Presets</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Click any preset to apply</p>
                </div>
                <div className="py-2 max-h-80 overflow-y-auto">
                  {presets.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        applyPreset(preset);
                        setShowPresets(false);
                      }}
                      className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors text-left first:rounded-t-xl last:rounded-b-xl"
                    >
                      <div 
                        className="w-12 h-12 rounded-lg flex-shrink-0 border border-black/10 dark:border-white/10" 
                        style={{ backgroundColor: preset.baseColor }} 
                      />
                      <div className="min-w-0">
                        <div className="font-medium text-sm text-gray-900 dark:text-white truncate">{preset.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          {preset.componentConfig.headingFont || 'Default'} • {preset.componentConfig.buttonRadius || 'md'}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <hr className="border-black/10 dark:border-white/10" />

      {/* Typography Section */}
      <div className="flex flex-col gap-6">
        <h3 className="text-base font-semibold text-primary">Typography</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {renderFontSelector('Heading Font', 'headingFont')}
          {renderFontSelector('Body Font', 'bodyFont')}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {renderWeightSelector('Heading Weight', 'headingWeight')}
          {renderWeightSelector('Body Weight', 'bodyWeight')}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {renderFontSizeSelector('Heading Size', 'fontSizeHeading')}
          {renderFontSizeSelector('Body Size', 'fontSizeBody')}
        </div>
        {renderLineHeightSelector('Line Height', 'lineHeight')}
      </div>

      <hr className="border-black/10 dark:border-white/10" />

      {/* Layout Section */}
      <div className="flex flex-col gap-6">
        <h3 className="text-base font-semibold text-primary">Layout</h3>
        {renderDensitySelector('Density', 'density')}
        {renderBorderWidthSelector('Border Width', 'borderWidth')}
      </div>

      <hr className="border-black/10 dark:border-white/10" />

      {/* Effects */}
      <div className="flex flex-col gap-6">
        <h3 className="text-base font-semibold text-primary">Effects</h3>
        {renderShadowSelector('Shadow', 'shadow')}
      </div>

      <hr className="border-black/10 dark:border-white/10" />

      {/* Geometry */}
      <div className="flex flex-col gap-6">
        <h3 className="text-base font-semibold">Geometry</h3>
        {renderRadiusSelector('Button Radius', 'buttonRadius')}
        {renderRadiusSelector('Card Radius', 'cardRadius')}
        {renderRadiusSelector('Input Radius', 'inputRadius')}
      </div>
    </div>
  );
};