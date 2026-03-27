import { useThemeStore } from '../../store/useThemeStore';
import type {
  BorderRadiusSize, ComponentConfig, ShadowSize, DensityType,
  ThemeTemperature, AnimationType,
} from '../../types';
import { generateRandomStyles } from '../../utils/randomTheme';
import { useState } from 'react';
import { Sparkles, Palette, Layout, Type, Box, Zap } from 'lucide-react';

type Preset = {
  name: string;
  baseColor: string;
  temperature: ThemeTemperature;
  componentConfig: Partial<ComponentConfig>;
  category: string;
  description?: string;
};

const presets: Preset[] = [
  // Modern Category (Expanded)
  { name: 'Modern Minimal', baseColor: '#0F172A', temperature: 'cooler', category: 'modern', componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'sm', density: 'normal', borderWidth: '1', animation: 'smooth' }, description: 'Clean and contemporary' },
  { name: 'Glassmorphism', baseColor: '#3B82F6', temperature: 'natural', category: 'modern', componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'md', shadow: 'xl', borderWidth: '1', density: 'spacious', animation: 'smooth' }, description: 'Frosted glass effect' },
  { name: 'Neubrutalism', baseColor: '#171717', temperature: 'natural', category: 'modern', componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '800', buttonRadius: 'none', shadow: 'none', borderWidth: '4', density: 'compact', animation: 'none' }, description: 'Bold and raw' },
  { name: 'Rose Gold', baseColor: '#BE185D', temperature: 'warmer', category: 'modern', componentConfig: { headingFont: 'Outfit', bodyFont: 'DM Sans', headingWeight: '600', buttonRadius: 'lg', shadow: 'md', borderWidth: '1', animation: 'smooth' }, description: 'Elegant and refined' },
  { name: 'Nordic Frost', baseColor: '#E2E8F0', temperature: 'cooler', category: 'modern', componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'md', shadow: 'sm', borderWidth: '0', density: 'spacious', animation: 'smooth' }, description: 'Scandinavian simplicity' },
  { name: 'Tech Noir', baseColor: '#1A1A2E', temperature: 'cooler', category: 'modern', componentConfig: { headingFont: 'Plus Jakarta Sans', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'sm', shadow: 'lg', borderWidth: '1', density: 'normal', animation: 'quick' }, description: 'Cyberpunk minimalism' },
  { name: 'Aurora', baseColor: '#0F2027', temperature: 'cooler', category: 'modern', componentConfig: { headingFont: 'Poppins', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'md', borderWidth: '1', density: 'normal', animation: 'smooth' }, description: 'Northern lights inspiration' },
  { name: 'Monochrome', baseColor: '#2D2D2D', temperature: 'natural', category: 'modern', componentConfig: { headingFont: 'Work Sans', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'none', shadow: 'none', borderWidth: '1', density: 'compact', animation: 'none' }, description: 'Black and white elegance' },

  // Minimal Category (Expanded)
  { name: 'Pure Minimal', baseColor: '#111827', temperature: 'natural', category: 'minimal', componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'none', shadow: 'none', borderWidth: '1', density: 'spacious', animation: 'none' }, description: 'Less is more' },
  { name: 'Zen White', baseColor: '#FFFFFF', temperature: 'natural', category: 'minimal', componentConfig: { headingFont: 'Figtree', bodyFont: 'DM Sans', headingWeight: '400', buttonRadius: 'md', shadow: 'none', borderWidth: '0', density: 'spacious', animation: 'none' }, description: 'Peaceful simplicity' },
  { name: 'Calm Gray', baseColor: '#6B7280', temperature: 'natural', category: 'minimal', componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '400', buttonRadius: 'md', shadow: 'none', borderWidth: '1', density: 'normal', animation: 'quick' }, description: 'Understated elegance' },
  { name: 'Soft Touch', baseColor: '#F3F4F6', temperature: 'warmer', category: 'minimal', componentConfig: { headingFont: 'Nunito', bodyFont: 'Inter', headingWeight: '400', buttonRadius: 'full', shadow: 'sm', borderWidth: '0', density: 'spacious', animation: 'smooth' }, description: 'Gentle and welcoming' },
  { name: 'Architect', baseColor: '#4A4A4A', temperature: 'natural', category: 'minimal', componentConfig: { headingFont: 'Manrope', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'none', shadow: 'none', borderWidth: '2', density: 'compact', animation: 'none' }, description: 'Clean architectural lines' },

  // Dark Category (Expanded)
  { name: 'Dark Matter', baseColor: '#0A0A0A', temperature: 'cooler', category: 'dark', componentConfig: { headingFont: 'Manrope', bodyFont: 'Karla', headingWeight: '500', buttonRadius: 'md', shadow: 'sm', borderWidth: '0', animation: 'smooth' }, description: 'Deep space aesthetic' },
  { name: 'Cyberpunk', baseColor: '#FF00FF', temperature: 'cooler', category: 'dark', componentConfig: { headingFont: 'Outfit', bodyFont: 'Space Grotesk', headingWeight: '800', buttonRadius: 'sm', shadow: 'lg', borderWidth: '2', density: 'compact', animation: 'bounce' }, description: 'Neon-drenched future' },
  { name: 'Midnight Indigo', baseColor: '#1E1B4B', temperature: 'cooler', category: 'dark', componentConfig: { headingFont: 'Plus Jakarta Sans', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'xl', borderWidth: '1', animation: 'smooth' }, description: 'Deep purple night' },
  { name: 'Obsidian', baseColor: '#000000', temperature: 'cooler', category: 'dark', componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '400', buttonRadius: 'md', shadow: 'md', borderWidth: '0', density: 'compact', animation: 'quick' }, description: 'Pure black elegance' },
  { name: 'Deep Ocean', baseColor: '#001F3F', temperature: 'cooler', category: 'dark', componentConfig: { headingFont: 'Lexend', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'lg', shadow: 'lg', borderWidth: '1', animation: 'smooth' }, description: 'Mysterious depths' },
  { name: 'Purple Haze', baseColor: '#2E1A47', temperature: 'cooler', category: 'dark', componentConfig: { headingFont: 'Poppins', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'xl', borderWidth: '1', animation: 'smooth' }, description: 'Mystical purple tones' },
  { name: 'Matrix', baseColor: '#003B00', temperature: 'cooler', category: 'dark', componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'none', shadow: 'sm', borderWidth: '1', animation: 'quick' }, description: 'Digital rain aesthetic' },
  { name: 'Void', baseColor: '#121212', temperature: 'cooler', category: 'dark', componentConfig: { headingFont: 'Rubik', bodyFont: 'Inter', headingWeight: '400', buttonRadius: 'md', shadow: 'none', borderWidth: '0', density: 'normal', animation: 'none' }, description: 'Minimal darkness' },
  { name: 'Nightfall', baseColor: '#1A1F2E', temperature: 'cooler', category: 'dark', componentConfig: { headingFont: 'DM Sans', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'lg', shadow: 'md', borderWidth: '1', animation: 'smooth' }, description: 'Twilight hues' },

  // Playful Category (Expanded)
  { name: 'Bubblegum', baseColor: '#EC4899', temperature: 'warmer', category: 'playful', componentConfig: { headingFont: 'Poppins', bodyFont: 'Nunito', headingWeight: '800', buttonRadius: 'full', shadow: 'sm', borderWidth: '2', animation: 'bounce' }, description: 'Sweet and fun' },
  { name: 'Pastel Dreams', baseColor: '#C4B5FD', temperature: 'cooler', category: 'playful', componentConfig: { headingFont: 'DM Sans', bodyFont: 'Nunito', headingWeight: '400', buttonRadius: 'lg', shadow: 'none', borderWidth: '1', density: 'spacious', animation: 'smooth' }, description: 'Soft and dreamy' },
  { name: 'Candy Crush', baseColor: '#FF6B6B', temperature: 'warmer', category: 'playful', componentConfig: { headingFont: 'Quicksand', bodyFont: 'Nunito', headingWeight: '700', buttonRadius: 'full', shadow: 'md', borderWidth: '2', animation: 'bounce' }, description: 'Sweet treats' },
  { name: 'Neon Pop', baseColor: '#00FF87', temperature: 'cooler', category: 'playful', componentConfig: { headingFont: 'Bebas Neue', bodyFont: 'Montserrat', headingWeight: '700', buttonRadius: 'sm', shadow: 'lg', borderWidth: '2', density: 'compact', animation: 'pulse' }, description: 'Electric energy' },
  { name: 'Sunset Vibes', baseColor: '#FF9A8B', temperature: 'warmer', category: 'playful', componentConfig: { headingFont: 'Poppins', bodyFont: 'Quicksand', headingWeight: '600', buttonRadius: 'lg', shadow: 'md', borderWidth: '1', animation: 'smooth' }, description: 'Warm and vibrant' },
  { name: 'Tropical', baseColor: '#FF6B6B', temperature: 'warmer', category: 'playful', componentConfig: { headingFont: 'Poppins', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'full', shadow: 'md', borderWidth: '2', animation: 'bounce' }, description: 'Island paradise' },
  { name: 'Galaxy Candy', baseColor: '#FF69B4', temperature: 'warmer', category: 'playful', componentConfig: { headingFont: 'Outfit', bodyFont: 'Nunito', headingWeight: '800', buttonRadius: 'full', shadow: 'xl', borderWidth: '2', animation: 'pulse' }, description: 'Cosmic sweetness' },

  // Professional Category (Expanded)
  { name: 'Corporate Blue', baseColor: '#2563EB', temperature: 'cooler', category: 'professional', componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '1', density: 'normal', animation: 'quick' }, description: 'Trustworthy and clean' },
  { name: 'Executive', baseColor: '#0F172A', temperature: 'natural', category: 'professional', componentConfig: { headingFont: 'Manrope', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'md', shadow: 'md', borderWidth: '1', density: 'compact', animation: 'none' }, description: 'Sophisticated authority' },
  { name: 'SaaS Modern', baseColor: '#6366F1', temperature: 'cooler', category: 'professional', componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'md', borderWidth: '1', density: 'normal', animation: 'smooth' }, description: 'Tech-forward' },
  { name: 'Finance', baseColor: '#047857', temperature: 'cooler', category: 'professional', componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'md', shadow: 'sm', borderWidth: '1', density: 'compact', animation: 'quick' }, description: 'Stable and reliable' },
  { name: 'Consultant', baseColor: '#5B21B6', temperature: 'cooler', category: 'professional', componentConfig: { headingFont: 'DM Sans', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '1', density: 'normal', animation: 'smooth' }, description: 'Wise and strategic' },
  { name: 'Law Firm', baseColor: '#1E293B', temperature: 'natural', category: 'professional', componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'none', shadow: 'none', borderWidth: '2', density: 'compact', animation: 'none' }, description: 'Authoritative tradition' },
  { name: 'Tech Startup', baseColor: '#06B6D4', temperature: 'cooler', category: 'professional', componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'lg', borderWidth: '1', density: 'normal', animation: 'smooth' }, description: 'Innovative and fresh' },

  // Nature Category (Expanded)
  { name: 'Forest', baseColor: '#059669', temperature: 'natural', category: 'nature', componentConfig: { headingFont: 'Lexend', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'lg', shadow: 'md', borderWidth: '1', animation: 'smooth' }, description: 'Woodland retreat' },
  { name: 'Ocean Breeze', baseColor: '#0891B2', temperature: 'cooler', category: 'nature', componentConfig: { headingFont: 'Lato', bodyFont: 'Open Sans', headingWeight: '600', buttonRadius: 'full', shadow: 'md', animation: 'smooth' }, description: 'Coastal calm' },
  { name: 'Sage Garden', baseColor: '#84A98C', temperature: 'natural', category: 'nature', componentConfig: { headingFont: 'Nunito', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'lg', shadow: 'sm', borderWidth: '1', density: 'spacious', animation: 'smooth' }, description: 'Herbal serenity' },
  { name: 'Desert Rose', baseColor: '#E6B17E', temperature: 'warmer', category: 'nature', componentConfig: { headingFont: 'Poppins', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'lg', shadow: 'md', borderWidth: '1', animation: 'smooth' }, description: 'Warm sands' },
  { name: 'Moss', baseColor: '#2C5F2D', temperature: 'natural', category: 'nature', componentConfig: { headingFont: 'Inter', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '1', density: 'normal', animation: 'quick' }, description: 'Lush green' },
  { name: 'Lavender Field', baseColor: '#967AA1', temperature: 'cooler', category: 'nature', componentConfig: { headingFont: 'Quicksand', bodyFont: 'Nunito', headingWeight: '500', buttonRadius: 'full', shadow: 'md', borderWidth: '1', animation: 'smooth' }, description: 'Soothing purple' },
  { name: 'Sunflower', baseColor: '#F4D03F', temperature: 'warmer', category: 'nature', componentConfig: { headingFont: 'Poppins', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'lg', shadow: 'lg', borderWidth: '2', animation: 'bounce' }, description: 'Bright and cheerful' },

  // Vintage Category (Expanded)
  { name: 'Vintage Paper', baseColor: '#D4A373', temperature: 'warmer', category: 'vintage', componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'sm', borderWidth: '1', animation: 'none' }, description: 'Aged parchment' },
  { name: 'Sunset', baseColor: '#EA580C', temperature: 'warmer', category: 'vintage', componentConfig: { headingFont: 'Bebas Neue', bodyFont: 'Montserrat', headingWeight: '800', buttonRadius: 'lg', shadow: 'lg', animation: 'pulse' }, description: 'Golden hour glow' },
  { name: 'Retro Wave', baseColor: '#FF6B35', temperature: 'warmer', category: 'vintage', componentConfig: { headingFont: 'Bebas Neue', bodyFont: 'Montserrat', headingWeight: '700', buttonRadius: 'md', shadow: 'md', borderWidth: '2', density: 'compact', animation: 'quick' }, description: '80s aesthetic' },
  { name: 'Sepia', baseColor: '#C06C4F', temperature: 'warmer', category: 'vintage', componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'md', shadow: 'sm', borderWidth: '1', animation: 'none' }, description: 'Old photograph' },
  { name: 'Art Deco', baseColor: '#D4AF37', temperature: 'warmer', category: 'vintage', componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'none', shadow: 'lg', borderWidth: '1', density: 'compact', animation: 'none' }, description: 'Gatsby era' },
  { name: 'Mid-Century', baseColor: '#E07A5F', temperature: 'warmer', category: 'vintage', componentConfig: { headingFont: 'Outfit', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'md', borderWidth: '1', animation: 'smooth' }, description: '1950s modern' },

  // New Categories
  // Futuristic
  { name: 'Hologram', baseColor: '#00F5FF', temperature: 'cooler', category: 'futuristic', componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'sm', shadow: 'xl', borderWidth: '2', density: 'compact', animation: 'pulse' }, description: 'Holographic interface' },
  { name: 'Neo Tokyo', baseColor: '#FF0055', temperature: 'cooler', category: 'futuristic', componentConfig: { headingFont: 'Outfit', bodyFont: 'Space Grotesk', headingWeight: '800', buttonRadius: 'none', shadow: 'lg', borderWidth: '2', density: 'compact', animation: 'bounce' }, description: 'Cyberpunk city' },
  { name: 'Digital', baseColor: '#00F260', temperature: 'cooler', category: 'futuristic', componentConfig: { headingFont: 'Space Grotesk', bodyFont: 'Inter', headingWeight: '600', buttonRadius: 'md', shadow: 'lg', borderWidth: '1', animation: 'quick' }, description: 'Digital interface' },

  // Luxury
  { name: 'Gold Leaf', baseColor: '#B8860B', temperature: 'warmer', category: 'luxury', componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'md', shadow: 'xl', borderWidth: '2', density: 'spacious', animation: 'smooth' }, description: 'Opulent elegance' },
  { name: 'Platinum', baseColor: '#E5E4E2', temperature: 'cooler', category: 'luxury', componentConfig: { headingFont: 'Manrope', bodyFont: 'Inter', headingWeight: '400', buttonRadius: 'lg', shadow: 'lg', borderWidth: '1', density: 'spacious', animation: 'smooth' }, description: 'Premium metallic' },
  { name: 'Royal', baseColor: '#6C3483', temperature: 'cooler', category: 'luxury', componentConfig: { headingFont: 'Playfair Display', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'md', shadow: 'xl', borderWidth: '2', density: 'normal', animation: 'smooth' }, description: 'Regal purple' },

  // Artistic
  { name: 'Watercolor', baseColor: '#A6C1E0', temperature: 'cooler', category: 'artistic', componentConfig: { headingFont: 'Poppins', bodyFont: 'Nunito', headingWeight: '400', buttonRadius: 'full', shadow: 'md', borderWidth: '1', density: 'spacious', animation: 'smooth' }, description: 'Soft brush strokes' },
  { name: 'Sketch', baseColor: '#2C3E50', temperature: 'natural', category: 'artistic', componentConfig: { headingFont: 'Poppins', bodyFont: 'Inter', headingWeight: '500', buttonRadius: 'none', shadow: 'none', borderWidth: '1', density: 'normal', animation: 'none' }, description: 'Hand-drawn style' },
  { name: 'Bauhaus', baseColor: '#E31B23', temperature: 'warmer', category: 'artistic', componentConfig: { headingFont: 'Bebas Neue', bodyFont: 'Inter', headingWeight: '700', buttonRadius: 'none', shadow: 'md', borderWidth: '2', density: 'compact', animation: 'quick' }, description: 'Bold primary colors' },
];

export const ConfigControls = () => {
  const { componentConfig, setBaseColor, setTemperature, setComponentConfig } = useThemeStore();
  const [showPresets, setShowPresets] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const applyPreset = (preset: Preset) => {
    setBaseColor(preset.baseColor);
    setTemperature(preset.temperature);
    setComponentConfig(preset.componentConfig);
    setShowPresets(false);
  };

  const handleRandomStyles = () => {
    const random = generateRandomStyles();
    setBaseColor(random.baseColor);
    setTemperature(random.temperature);
    setComponentConfig(random.componentConfig);
  };

  const categories = [
    'all', 'modern', 'minimal', 'dark', 'playful', 
    'professional', 'nature', 'vintage', 'futuristic', 
    'luxury', 'artistic'
  ];

  const filteredPresets = selectedCategory === 'all'
    ? presets
    : presets.filter((p) => p.category === selectedCategory);

  const radiusOptions: { label: string; value: BorderRadiusSize }[] = [
    { label: 'None', value: 'none' }, { label: 'Sm', value: 'sm' },
    { label: 'Md', value: 'md' }, { label: 'Lg', value: 'lg' }, { label: 'Full', value: 'full' },
  ];

  const fontOptions = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Poppins', 'Montserrat', 'Nunito',
    'DM Sans', 'Manrope', 'Raleway', 'Rubik', 'Karla', 'Figtree', 'Outfit',
    'Lexend', 'Work Sans', 'Plus Jakarta Sans', 'Urbanist', 'Space Grotesk',
    'Quicksand', 'Oswald', 'Bebas Neue', 'Playfair Display', 'Syne', 'Figtree',
  ];

  const updateConfig = (key: keyof ComponentConfig, value: string) => {
    setComponentConfig({ [key]: value });
  };

  const renderPillSelector = (label: string, icon: React.ReactNode, configKey: keyof ComponentConfig, options: { label: string; value: string }[]) => (
    <div className="flex flex-col gap-2.5">
      <label className="text-xs font-medium flex items-center gap-1.5">{icon} {label}</label>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => updateConfig(configKey, opt.value)}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors border ${
              componentConfig[configKey] === opt.value
                ? 'bg-blue-500 text-white border-blue-500'
                : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  const renderSelect = (label: string, icon: React.ReactNode, configKey: keyof ComponentConfig, options: string[]) => (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium flex items-center gap-1.5">{icon} {label}</label>
      <select
        value={componentConfig[configKey] as string}
        onChange={(e) => updateConfig(configKey, e.target.value)}
        className="px-3 py-2 text-xs bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-zinc-200"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-zinc-900 text-zinc-200">{opt}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 h-full overflow-y-auto">
      <div>
        <h2 className="text-lg font-bold tracking-tight mb-1 flex items-center gap-2">
          <Palette className="w-4 h-4 text-blue-400" /> Component Config
        </h2>
        <p className="text-xs text-zinc-500">Customize typography, geometry, and effects.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button onClick={handleRandomStyles} className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-xl shadow-lg transition-all group">
          <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" /> Random
        </button>
        <div className="relative">
          <button onClick={() => setShowPresets(!showPresets)} className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-xl shadow-lg transition-all">
            <Palette className="w-3.5 h-3.5" /> Presets
            <svg className={`w-3.5 h-3.5 transition-transform ${showPresets ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showPresets && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowPresets(false)} />
              <div className="absolute left-0 mt-2 w-96 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-50 overflow-hidden">
                <div className="p-3 border-b border-zinc-700">
                  <h4 className="font-semibold text-sm text-white">Theme Presets</h4>
                  <p className="text-xs text-zinc-400 mt-1">{filteredPresets.length} themes available</p>
                  <div className="flex flex-wrap gap-1.5 mt-2 max-h-32 overflow-y-auto">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-2.5 py-1 text-xs rounded-full capitalize transition-colors ${
                          selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="py-1 max-h-96 overflow-y-auto scrollbar-thin">
                  {filteredPresets.map((preset, i) => (
                    <button key={i} onClick={() => applyPreset(preset)} className="w-full flex items-center gap-2.5 p-2.5 hover:bg-zinc-800 transition-colors text-left">
                      <div className="w-8 h-8 rounded-lg flex-shrink-0 border border-white/10" style={{ backgroundColor: preset.baseColor }} />
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-xs text-white truncate">{preset.name}</div>
                        {preset.description && (
                          <div className="text-[10px] text-zinc-500 truncate">{preset.description}</div>
                        )}
                        <div className="text-[10px] text-zinc-600 truncate mt-0.5">{preset.componentConfig.headingFont}</div>
                      </div>
                      <div className="text-[10px] text-zinc-500 capitalize bg-zinc-800 px-1.5 py-0.5 rounded-full">
                        {preset.category}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <hr className="border-white/5" />

      <div className="flex flex-col gap-5">
        <h3 className="text-sm font-semibold flex items-center gap-1.5"><Type className="w-3.5 h-3.5" /> Typography</h3>
        <div className="grid grid-cols-2 gap-3">
          {renderSelect('Heading', null, 'headingFont', fontOptions)}
          {renderSelect('Body', null, 'bodyFont', fontOptions)}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {renderSelect('Head Wt', null, 'headingWeight', ['400', '500', '600', '700', '800'])}
          {renderSelect('Body Wt', null, 'bodyWeight', ['400', '500', '600', '700'])}
        </div>
      </div>

      <hr className="border-white/5" />

      <div className="flex flex-col gap-5">
        <h3 className="text-sm font-semibold flex items-center gap-1.5"><Layout className="w-3.5 h-3.5" /> Layout</h3>
        {renderPillSelector('Density', null, 'density', [
          { label: 'Compact', value: 'compact' }, { label: 'Normal', value: 'normal' }, { label: 'Spacious', value: 'spacious' },
        ] as { label: string; value: DensityType }[])}
      </div>

      <hr className="border-white/5" />

      <div className="flex flex-col gap-5">
        <h3 className="text-sm font-semibold flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> Effects</h3>
        {renderPillSelector('Shadow', null, 'shadow', [
          { label: 'None', value: 'none' }, { label: 'Sm', value: 'sm' }, { label: 'Md', value: 'md' }, { label: 'Lg', value: 'lg' }, { label: 'Xl', value: 'xl' },
        ] as { label: string; value: ShadowSize }[])}
        {renderPillSelector('Animation', null, 'animation', [
          { label: 'None', value: 'none' }, { label: 'Quick', value: 'quick' }, { label: 'Smooth', value: 'smooth' }, { label: 'Bounce', value: 'bounce' }, { label: 'Pulse', value: 'pulse' },
        ] as { label: string; value: AnimationType }[])}
      </div>

      <hr className="border-white/5" />

      <div className="flex flex-col gap-5">
        <h3 className="text-sm font-semibold flex items-center gap-1.5"><Box className="w-3.5 h-3.5" /> Geometry</h3>
        {renderPillSelector('Button Radius', null, 'buttonRadius', radiusOptions)}
        {renderPillSelector('Card Radius', null, 'cardRadius', radiusOptions)}
        {renderPillSelector('Input Radius', null, 'inputRadius', radiusOptions)}
      </div>
    </div>
  );
};