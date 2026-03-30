import { useThemeStore } from '../../store/useThemeStore';
import React, { useState } from 'react';
import type {
  BorderRadiusSize,
  FontSize,
  LineHeightType,
  ShadowSize,
  DensityType,
  BorderWidthType,
} from '../../types';
import {
  Info, X, Check, ChevronDown, Sun, Moon, AlertCircle,
  Mail, MessageSquare, User, Settings, BarChart3,
  Save, XCircle, Tag, Star, Heart, Bell, 
  ChevronUp, Home,
  
  Link, 
  
  FileText,
  
  Activity, Palette, HelpCircle, Code
} from 'lucide-react';

interface WebPreviewProps {
  showAll?: boolean;
  layout?: string;
}

export const WebPreview = (_props?: WebPreviewProps) => {
  const { theme, mode, componentConfig } = useThemeStore();
  const currentTheme = theme[mode];
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [switchOn, setSwitchOn] = useState(true);
  const [sliderValue] = useState(65);
  const [selectedTab, setSelectedTab] = useState(0);

  const getDensityPadding = (density: DensityType) => {
    const paddings: Record<DensityType, string> = {
      compact: 'p-3',
      normal: 'p-5',
      spacious: 'p-7',
    };
    return paddings[density] || 'p-5';
  };

  const getRadiusClass = (size: BorderRadiusSize) => {
    const map: Record<BorderRadiusSize, string> = {
      none: 'rounded-none',
      xs: 'rounded-xs',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    };
    return map[size] || 'rounded-md';
  };

  const getShadowClass = (size: ShadowSize) => {
    const map: Record<ShadowSize, string> = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
    };
    return map[size] || '';
  };

  const getFontSizeClass = (size: FontSize) => {
    const map: Record<FontSize, string> = {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
    };
    return map[size] || 'text-base';
  };

  const getLineHeightClass = (lh: LineHeightType) => {
    const map: Record<LineHeightType, string> = {
      compact: 'leading-tight',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    };
    return map[lh] || 'leading-normal';
  };

  const getBorderWidthStyle = (width: BorderWidthType) => ({
    borderWidth: `${parseInt(width)}px`,
  });

  const dynamicStyles = {
    '--background': currentTheme.background.hexValue,
    '--foreground': currentTheme.foreground.hexValue,
    '--primary': currentTheme.primary.hexValue,
    '--primary-foreground': currentTheme.primaryForeground.hexValue,
    '--secondary': currentTheme.secondary.hexValue,
    '--secondary-foreground': currentTheme.secondaryForeground.hexValue,
    '--destructive': currentTheme.destructive.hexValue,
    '--destructive-foreground': currentTheme.destructiveForeground.hexValue,
    '--border': currentTheme.border.hexValue,
    '--input': currentTheme.input.hexValue,
    '--ring': currentTheme.ring.hexValue,
    '--card': currentTheme.card.hexValue,
    '--card-foreground': currentTheme.cardForeground.hexValue,
    '--muted': currentTheme.muted.hexValue,
    '--muted-foreground': currentTheme.mutedForeground.hexValue,
    '--popover': currentTheme.popover.hexValue,
    '--popover-foreground': currentTheme.popoverForeground.hexValue,
  } as React.CSSProperties;

  const cfg = componentConfig;

  return (
    <div
      className={`flex flex-col gap-5 ${getDensityPadding(cfg.density)} ${getRadiusClass('lg')} border transition-all ${getShadowClass(cfg.shadow)}`}
      style={{
        ...dynamicStyles,
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
        borderColor: 'var(--border)',
        ...getBorderWidthStyle(cfg.borderWidth),
        fontFamily: `"${cfg.bodyFont}", sans-serif`,
        fontWeight: cfg.bodyWeight,
      }}
    >
      {/* Header */}
      <div
        style={{
          fontFamily: `"${cfg.headingFont}", sans-serif`,
          fontWeight: cfg.headingWeight,
        }}
      >
        <h3 className={`${getFontSizeClass(cfg.fontSizeHeading)} font-bold mb-1 flex items-center gap-2`}>
          <Palette className="w-5 h-5" style={{ color: 'var(--primary)' }} />
          Tailwind / CSS Components
        </h3>
        <p
          className={`${getFontSizeClass('sm')} opacity-60 ${getLineHeightClass(cfg.lineHeight)}`}
        >
          Interactive preview with real-time theming
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: 'Primary', bg: 'var(--primary)', fg: 'var(--primary-foreground)', icon: Save },
          { label: 'Secondary', bg: 'var(--secondary)', fg: 'var(--secondary-foreground)', icon: Star },
          { label: 'Destructive', bg: 'var(--destructive)', fg: 'var(--destructive-foreground)', icon: XCircle },
        ].map((btn) => (
          <button
            key={btn.label}
            className={`py-2 px-5 font-medium text-sm transition-all hover:opacity-90 active:scale-[0.97] ${getRadiusClass(cfg.buttonRadius)} ${getShadowClass(cfg.shadow)} flex items-center gap-2`}
            style={{
              backgroundColor: btn.bg,
              color: btn.fg,
              fontFamily: `"${cfg.headingFont}", sans-serif`,
              fontWeight: cfg.headingWeight,
              ...getBorderWidthStyle(cfg.borderWidth),
              borderColor: 'transparent',
            }}
          >
            <btn.icon size={16} />
            {btn.label}
          </button>
        ))}
        <button
          className={`py-2 px-5 font-medium text-sm transition-all hover:opacity-90 border ${getRadiusClass(cfg.buttonRadius)} flex items-center gap-2`}
          style={{
            backgroundColor: 'transparent',
            color: 'var(--primary)',
            borderColor: 'var(--border)',
            ...getBorderWidthStyle(cfg.borderWidth),
            fontFamily: `"${cfg.headingFont}", sans-serif`,
          }}
        >
          <Link size={16} />
          Outline
        </button>
        <button
          className={`py-2 px-5 font-medium text-sm transition-all hover:opacity-80 ${getRadiusClass(cfg.buttonRadius)} flex items-center gap-2`}
          style={{
            backgroundColor: 'transparent',
            color: 'var(--foreground)',
            fontFamily: `"${cfg.headingFont}", sans-serif`,
          }}
        >
          <Heart size={16} />
          Ghost
        </button>
      </div>

      {/* Card */}
      <div
        className={`${getDensityPadding(cfg.density)} ${getRadiusClass(cfg.cardRadius)} border ${getShadowClass(cfg.shadow)}`}
        style={{
          backgroundColor: 'var(--card)',
          color: 'var(--card-foreground)',
          borderColor: 'var(--border)',
          ...getBorderWidthStyle(cfg.borderWidth),
        }}
      >
        <h4
          className={`${getFontSizeClass(cfg.fontSizeHeading)} font-semibold mb-2 flex items-center gap-2`}
          style={{
            fontFamily: `"${cfg.headingFont}", sans-serif`,
            fontWeight: cfg.headingWeight,
          }}
        >
          <FileText size={18} />
          Card Component
        </h4>
        <p
          className={`${getFontSizeClass(cfg.fontSizeBody)} ${getLineHeightClass(cfg.lineHeight)}`}
          style={{ color: 'var(--muted-foreground)', fontFamily: `"${cfg.bodyFont}", sans-serif` }}
        >
          A responsive card component with customizable density, radius, shadows, and typography. Adapts to light/dark modes.
        </p>
        <div className="flex gap-2 mt-4">
          <button
            className={`py-1.5 px-4 text-xs font-medium ${getRadiusClass(cfg.buttonRadius)} flex items-center gap-1.5`}
            style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
          >
            <Save size={12} />
            Save
          </button>
          <button
            className={`py-1.5 px-4 text-xs font-medium border ${getRadiusClass(cfg.buttonRadius)} flex items-center gap-1.5`}
            style={{ borderColor: 'var(--border)', color: 'var(--foreground)', backgroundColor: 'transparent' }}
          >
            <XCircle size={12} />
            Cancel
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div
        className={`${getRadiusClass(cfg.cardRadius)} border overflow-hidden ${getShadowClass('sm')}`}
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          ...getBorderWidthStyle(cfg.borderWidth),
        }}
      >
        <div className="flex border-b" style={{ borderColor: 'var(--border)' }}>
          {[
            { label: 'Overview', icon: Home },
            { label: 'Analytics', icon: BarChart3 },
            { label: 'Settings', icon: Settings }
          ].map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setSelectedTab(i)}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                selectedTab === i ? 'border-b-2' : 'opacity-50 hover:opacity-75'
              }`}
              style={{
                borderColor: selectedTab === i ? 'var(--primary)' : 'transparent',
                color: selectedTab === i ? 'var(--primary)' : 'var(--foreground)',
                fontFamily: `"${cfg.bodyFont}", sans-serif`,
              }}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4">
          <p
            className={`${getFontSizeClass('sm')} ${getLineHeightClass(cfg.lineHeight)}`}
            style={{ color: 'var(--muted-foreground)', fontFamily: `"${cfg.bodyFont}", sans-serif` }}
          >
            {selectedTab === 0 && 'Overview tab content with your custom theme tokens.'}
            {selectedTab === 1 && 'Analytics dashboard with data visualizations.'}
            {selectedTab === 2 && 'Settings panel for configuration options.'}
          </p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {[
          { label: 'Default', bg: 'var(--primary)', fg: 'var(--primary-foreground)', icon: Tag },
          { label: 'Secondary', bg: 'var(--secondary)', fg: 'var(--secondary-foreground)', icon: Star },
          { label: 'Destructive', bg: 'var(--destructive)', fg: 'var(--destructive-foreground)', icon: AlertCircle },
          { label: 'Outline', bg: 'transparent', fg: 'var(--foreground)', border: true, icon: Link },
          { label: 'Success', bg: '#22c55e', fg: '#ffffff', icon: Check },
          { label: 'Warning', bg: '#f59e0b', fg: '#ffffff', icon: AlertCircle },
        ].map((badge) => (
          <span
            key={badge.label}
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-medium ${getRadiusClass('full')}`}
            style={{
              backgroundColor: badge.bg,
              color: badge.fg,
              border: badge.border ? '1px solid var(--border)' : 'none',
            }}
          >
            <badge.icon size={10} />
            {badge.label}
          </span>
        ))}
      </div>

      {/* Alert */}
      <div
        className={`${getDensityPadding('compact')} ${getRadiusClass(cfg.inputRadius)} border flex gap-3 items-start`}
        style={{
          backgroundColor: 'var(--muted)',
          color: 'var(--foreground)',
          borderColor: 'var(--border)',
          ...getBorderWidthStyle(cfg.borderWidth),
        }}
      >
        <Info size={18} style={{ color: 'var(--primary)', marginTop: '2px' }} />
        <div className="flex-1">
          <span
            className={`${getFontSizeClass('sm')} font-semibold block mb-0.5`}
            style={{ fontFamily: `"${cfg.headingFont}", sans-serif` }}
          >
            Heads up!
          </span>
          <span
            className={`${getFontSizeClass('sm')} opacity-80 ${getLineHeightClass(cfg.lineHeight)}`}
            style={{ fontFamily: `"${cfg.bodyFont}", sans-serif` }}
          >
            You can add components to your app using the CLI.
          </span>
        </div>
        <button className="opacity-50 hover:opacity-100 transition-opacity">
          <X size={14} />
        </button>
      </div>

      {/* Input */}
      <div className="flex flex-col gap-2 max-w-sm">
        <label
          className={`${getFontSizeClass('sm')} font-medium flex items-center gap-2`}
          style={{ fontFamily: `"${cfg.bodyFont}", sans-serif` }}
        >
          <Mail size={14} />
          Email Address
        </label>
        <div
          className={`flex ${getDensityPadding('compact')} ${getRadiusClass(cfg.inputRadius)} border focus-within:ring-2 focus-within:ring-offset-1 transition-all items-center gap-2`}
          style={{
            backgroundColor: 'var(--background)',
            borderColor: 'var(--input)',
            ...getBorderWidthStyle(cfg.borderWidth),
          }}
        >
          <Mail size={16} style={{ color: 'var(--muted-foreground)' }} />
          <input
            placeholder="name@example.com"
            className={`w-full bg-transparent outline-none ${getFontSizeClass(cfg.fontSizeBody)} placeholder:opacity-40`}
            style={{ color: 'var(--foreground)', fontFamily: `"${cfg.bodyFont}", sans-serif` }}
          />
        </div>
      </div>

      {/* Textarea */}
      <div className="flex flex-col gap-2 max-w-sm">
        <label
          className={`${getFontSizeClass('sm')} font-medium flex items-center gap-2`}
          style={{ fontFamily: `"${cfg.bodyFont}", sans-serif` }}
        >
          <MessageSquare size={14} />
          Message
        </label>
        <textarea
          placeholder="Type your message here..."
          rows={3}
          className={`w-full bg-transparent outline-none ${getDensityPadding('compact')} ${getRadiusClass(cfg.inputRadius)} border focus:ring-2 focus:ring-offset-1 transition-all ${getFontSizeClass(cfg.fontSizeBody)} placeholder:opacity-40 resize-none`}
          style={{
            backgroundColor: 'var(--background)',
            borderColor: 'var(--input)',
            color: 'var(--foreground)',
            fontFamily: `"${cfg.bodyFont}", sans-serif`,
            ...getBorderWidthStyle(cfg.borderWidth),
          }}
        />
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 flex items-center justify-center text-sm font-bold ${getRadiusClass('full')} ${getShadowClass('sm')}`}
          style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}
        >
          JD
        </div>
        <div
          className={`w-10 h-10 flex items-center justify-center text-sm font-bold ${getRadiusClass('full')} ${getShadowClass('sm')}`}
          style={{ backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }}
        >
          <User size={16} />
        </div>
        <div
          className={`w-10 h-10 flex items-center justify-center text-sm font-bold ${getRadiusClass('full')} border`}
          style={{ borderColor: 'var(--border)', color: 'var(--muted-foreground)' }}
        >
          +3
        </div>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className={`${getFontSizeClass('sm')} font-medium flex items-center gap-2`}>
            <Activity size={14} />
            Progress
          </span>
          <span className={`${getFontSizeClass('sm')}`} style={{ color: 'var(--muted-foreground)' }}>
            {sliderValue}%
          </span>
        </div>
        <div
          className={`w-full h-2.5 overflow-hidden ${getRadiusClass('full')}`}
          style={{ backgroundColor: 'var(--muted)' }}
        >
          <div
            className={`h-full transition-all ${getRadiusClass('full')}`}
            style={{ backgroundColor: 'var(--primary)', width: `${sliderValue}%` }}
          />
        </div>
      </div>

      {/* Switch */}
      <div
        className={`flex items-center justify-between p-4 border ${getRadiusClass(cfg.cardRadius)}`}
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          ...getBorderWidthStyle(cfg.borderWidth),
        }}
      >
        <div className="flex items-center gap-3">
          {switchOn ? <Sun size={18} /> : <Moon size={18} />}
          <div>
            <span className={`${getFontSizeClass('sm')} font-medium block`}>Dark Mode</span>
            <span className={`${getFontSizeClass('xs')}`} style={{ color: 'var(--muted-foreground)' }}>
              Toggle dark mode appearance
            </span>
          </div>
        </div>
        <button
          onClick={() => setSwitchOn(!switchOn)}
          className={`relative w-11 h-6 ${getRadiusClass('full')} transition-colors duration-200`}
          style={{ backgroundColor: switchOn ? 'var(--primary)' : 'var(--muted)' }}
        >
          <span
            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-200 ${
              switchOn ? 'left-[22px]' : 'left-0.5'
            }`}
          />
        </button>
      </div>

      {/* Accordion */}
      <div
        className={`${getRadiusClass(cfg.cardRadius)} border overflow-hidden ${getShadowClass('sm')}`}
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          ...getBorderWidthStyle(cfg.borderWidth),
        }}
      >
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="w-full p-4 flex justify-between items-center hover:opacity-80 transition-opacity"
          style={{ fontFamily: `"${cfg.headingFont}", sans-serif`, fontWeight: cfg.headingWeight }}
        >
          <span className={`${getFontSizeClass('sm')} flex items-center gap-2`}>
            <HelpCircle size={16} />
            Is this accordion interactive?
          </span>
          {accordionOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {accordionOpen && (
          <div className="px-4 pb-4" style={{ color: 'var(--muted-foreground)' }}>
            <p className={getFontSizeClass('sm')}>
              Yes! This accordion is fully interactive. Click the header to toggle.
            </p>
          </div>
        )}
      </div>

      {/* Toast Preview */}
      <div
        className={`flex items-center gap-3 p-3 ${getRadiusClass(cfg.cardRadius)} ${getShadowClass('lg')} border`}
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--border)',
          ...getBorderWidthStyle(cfg.borderWidth),
        }}
      >
        <div
          className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0"
          style={{ backgroundColor: '#22c55e20', color: '#22c55e' }}
        >
          <Check size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p className={`${getFontSizeClass('sm')} font-medium flex items-center gap-2`}>
            <Bell size={12} />
            Success
          </p>
          <p className={`${getFontSizeClass('xs')}`} style={{ color: 'var(--muted-foreground)' }}>
            Your changes have been saved.
          </p>
        </div>
        <button className="opacity-50 hover:opacity-100 transition-opacity">
          <X size={12} />
        </button>
      </div>

      {/* Skeleton */}
      <div className={`${getDensityPadding(cfg.density)} ${getRadiusClass(cfg.cardRadius)} border`} style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', ...getBorderWidthStyle(cfg.borderWidth) }}>
        <div className="animate-pulse flex gap-4">
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: 'var(--muted)' }} />
          <div className="flex-1 space-y-3 py-1">
            <div className="h-3 rounded-full w-3/4" style={{ backgroundColor: 'var(--muted)' }} />
            <div className="h-3 rounded-full w-1/2" style={{ backgroundColor: 'var(--muted)' }} />
          </div>
        </div>
      </div>

      {/* Select Dropdown */}
      <div className="flex flex-col gap-2 max-w-sm">
        <label className={`${getFontSizeClass('sm')} font-medium flex items-center gap-2`} style={{ fontFamily: `"${cfg.bodyFont}", sans-serif` }}>
          <Code size={14} />
          Framework
        </label>
        <div className="relative">
          <select
            className={`${getDensityPadding('compact')} ${getRadiusClass(cfg.inputRadius)} border outline-none ${getFontSizeClass(cfg.fontSizeBody)} appearance-none cursor-pointer pr-8`}
            style={{
              backgroundColor: 'var(--background)',
              borderColor: 'var(--input)',
              color: 'var(--foreground)',
              fontFamily: `"${cfg.bodyFont}", sans-serif`,
              ...getBorderWidthStyle(cfg.borderWidth),
            }}
          >
            <option>React</option>
            <option>Vue</option>
            <option>Svelte</option>
            <option>Angular</option>
          </select>
          <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--muted-foreground)' }} />
        </div>
      </div>

      {/* Tooltip-like */}
      <div className="relative inline-block w-fit">
        <div
          className={`absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1.5 text-xs ${getRadiusClass('md')} ${getShadowClass('lg')} whitespace-nowrap flex items-center gap-1.5`}
          style={{
            backgroundColor: 'var(--foreground)',
            color: 'var(--background)',
          }}
        >
          <Info size={10} />
          Tooltip preview
          <div
            className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0"
            style={{
              borderLeft: '4px solid transparent',
              borderRight: '4px solid transparent',
              borderTop: `4px solid var(--foreground)`,
            }}
          />
        </div>
        <button
          className={`py-2 px-4 text-sm font-medium border ${getRadiusClass(cfg.buttonRadius)} flex items-center gap-2`}
          style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
        >
          <HelpCircle size={14} />
          Hover me
        </button>
      </div>
    </div>
  );
};
