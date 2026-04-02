import React, { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import {
  X, AlertCircle, Info, CheckCircle,
  Home, Search, Bell, User, Settings, BarChart3,
  LayoutDashboard, ChevronLeft, ChevronRight,
  Mail, Eye, EyeOff, Loader2, Menu,
  MoreVertical, Edit, Copy, Trash2, ExternalLink,
  ChevronDown, Check
} from 'lucide-react';
import type { BorderRadiusSize, BlurSize, OpacityType } from '../../types';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers for dynamic styling in Preview
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Converts HEX to RGBA with a specific Alpha (0-100)
 */
function colorWithAlpha(hex: string, alpha: OpacityType): string {
  if (!hex || hex === 'transparent') return 'transparent';
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${parseInt(alpha) / 100})`;
}

/**
 * Maps BlurSize to CSS backdrop-filter string
 */
function getBlurStyle(size: BlurSize): string {
  const map: Record<BlurSize, string> = {
    none: 'none',
    sm: 'blur(4px)',
    md: 'blur(8px)',
    lg: 'blur(12px)',
    xl: 'blur(24px)',
  };
  return map[size] || 'none';
}

/**
 * Maps BorderRadiusSize to Tailwind class names
 */
function getRadiusClass(size: BorderRadiusSize): string {
  if (size === 'full') return 'rounded-full';
  if (size === 'none') return 'rounded-none';
  return `rounded-${size}`;
}

// Inject theme CSS vars and configuration into a container
export function usePreviewConfig() {
  const { theme, mode, componentConfig } = useThemeStore();
  const t = theme[mode];
  const vars = {
    '--background':           t.background.hexValue,
    '--foreground':           t.foreground.hexValue,
    '--primary':              t.primary.hexValue,
    '--primary-foreground':   t.primaryForeground.hexValue,
    '--secondary':            t.secondary.hexValue,
    '--secondary-foreground': t.secondaryForeground.hexValue,
    '--muted':                t.muted.hexValue,
    '--muted-foreground':     t.mutedForeground.hexValue,
    '--border':               t.border.hexValue,
    '--input':                t.input.hexValue,
    '--ring':                 t.ring.hexValue,
    '--card':                 t.card.hexValue,
    '--card-foreground':      t.cardForeground.hexValue,
    '--destructive':          t.destructive.hexValue,
    '--destructive-foreground': t.destructiveForeground.hexValue,
  } as React.CSSProperties;

  return { vars, config: componentConfig, t };
}

// ── Button Preview ─────────────────────────────────────────────────────────
export const ButtonPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [loading, setLoading] = useState(false);
  
  const glassStyle = (baseColor: string, opacity: OpacityType): React.CSSProperties => ({
    backgroundColor: colorWithAlpha(baseColor, opacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  });

  return (
    <div className="flex flex-wrap gap-3 p-10 rounded-xl" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <button 
        className={`inline-flex items-center gap-2 px-4 py-2 ${getRadiusClass(config.buttonRadius)} text-sm font-semibold transition-all hover:opacity-90 active:scale-95 shadow-sm`}
        style={{ ...glassStyle(t.primary.hexValue, config.buttonOpacity), color: 'var(--primary-foreground)' }}>
        Primary Action
      </button>
      <button 
        className={`inline-flex items-center gap-2 px-4 py-2 ${getRadiusClass(config.buttonRadius)} text-sm font-semibold transition-all hover:opacity-80 shadow-sm`}
        style={{ ...glassStyle(t.secondary.hexValue, config.buttonOpacity), color: 'var(--secondary-foreground)' }}>
        Secondary
      </button>
      <button 
        className={`inline-flex items-center gap-2 px-4 py-2 ${getRadiusClass(config.buttonRadius)} text-sm font-semibold border transition-all hover:opacity-80`}
        style={{ borderColor: 'var(--border)', color: 'var(--foreground)', backgroundColor: 'transparent' }}>
        Outline
      </button>
      <button 
        className={`inline-flex items-center gap-2 px-4 py-2 ${getRadiusClass(config.buttonRadius)} text-sm font-semibold transition-all hover:opacity-80 shadow-sm`}
        style={{ ...glassStyle(t.destructive.hexValue, config.buttonOpacity), color: 'var(--destructive-foreground)' }}>
        Destructive
      </button>
      <button
        onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
        className={`inline-flex items-center gap-2 px-4 py-2 ${getRadiusClass(config.buttonRadius)} text-sm font-semibold transition-all shadow-sm`}
        style={{ ...glassStyle(t.primary.hexValue, config.buttonOpacity), color: 'var(--primary-foreground)', opacity: loading ? 0.8 : 1 }}>
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {loading ? 'Loading...' : 'Click to Load'}
      </button>
    </div>
  );
};

// ── Input Preview ──────────────────────────────────────────────────────────
export const InputPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [showPass, setShowPass] = useState(false);
  
  const glassStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.background.hexValue, config.inputOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  };

  return (
    <div className="flex flex-col gap-5 p-10" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="flex flex-col gap-1.5 w-full max-w-sm">
        <label className="text-sm font-medium flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <Mail className="w-3.5 h-3.5 opacity-70" /> Email Address
        </label>
        <input
          type="email" placeholder="you@example.com"
          className={`h-10 px-3 ${getRadiusClass(config.inputRadius)} border text-sm outline-none transition-all focus:ring-2 focus:ring-offset-1`}
          style={{ ...glassStyle, borderColor: 'var(--input)', color: 'var(--foreground)' }}
        />
      </div>
      <div className="flex flex-col gap-1.5 w-full max-w-sm">
        <label className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>Password</label>
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'} placeholder="Enter password"
            className={`h-10 w-full px-3 pr-10 ${getRadiusClass(config.inputRadius)} border text-sm outline-none transition-all`}
            style={{ ...glassStyle, borderColor: 'var(--input)', color: 'var(--foreground)' }}
          />
          <button onClick={() => setShowPass(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity">
            {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1.5 w-full max-w-sm">
        <label className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>With Error</label>
        <input
          type="text" placeholder="username" defaultValue="invalid_user"
          className={`h-10 px-3 ${getRadiusClass(config.inputRadius)} border text-sm outline-none`}
          style={{ ...glassStyle, borderColor: 'var(--destructive)', color: 'var(--foreground)' }}
        />
        <p className="text-xs font-medium" style={{ color: 'var(--destructive)' }}>This username is already taken.</p>
      </div>
    </div>
  );
};

// ── Card Preview ────────────────────────────────────────────────────────────
export const CardPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  
  const glassStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.card.hexValue, config.cardOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  };

  return (
    <div className="p-10 flex gap-4 flex-wrap" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className={`border p-6 flex flex-col gap-3 flex-1 min-w-[300px] ${getRadiusClass(config.cardRadius)} shadow-sm transition-all`}
        style={{ ...glassStyle, borderColor: 'var(--border)', color: 'var(--card-foreground)' }}>
        <div className="flex items-center gap-3 mb-1">
           <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10">
              <Settings className="w-5 h-5 text-primary" />
           </div>
           <div>
              <h3 className="font-bold text-lg leading-none mb-1">Advanced Settings</h3>
              <p className="text-sm opacity-70">Customizing system behavior</p>
           </div>
        </div>
        <p className="text-sm leading-relaxed opacity-80">
          This preview card demonstrates how your background opacity and backdrop blur settings look in a real dashboard container.
        </p>
        <div className="flex gap-2 pt-4">
          <button className={`flex-1 py-2 ${getRadiusClass(config.buttonRadius)} text-sm font-bold transition-all hover:opacity-90 shadow-sm`} 
            style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>Apply Changes</button>
          <button className={`px-5 py-2 ${getRadiusClass(config.buttonRadius)} text-sm font-semibold border transition-all hover:bg-muted/50`} 
            style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

// ── Badge Preview ───────────────────────────────────────────────────────────
export const BadgePreview = () => {
  const { vars, config, t } = usePreviewConfig();
  
  const glassStyle = (baseColor: string): React.CSSProperties => ({
    backgroundColor: colorWithAlpha(baseColor, config.badgeOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  });

  const badges = [
    { label: 'Active',      bg: t.primary.hexValue,     fg: 'var(--primary-foreground)' },
    { label: 'Feature',     bg: t.secondary.hexValue,   fg: 'var(--secondary-foreground)' },
    { label: 'Alert',       bg: t.destructive.hexValue, fg: 'var(--destructive-foreground)' },
    { label: 'Success',     bg: '#22c55e',            fg: '#fff' },
    { label: 'Pending',     bg: '#f59e0b',            fg: '#fff' },
    { label: 'Outline',     bg: 'transparent',        fg: 'var(--foreground)', border: true },
  ];
  return (
    <div className="flex flex-wrap gap-2.5 p-10" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      {badges.map(b => (
        <span key={b.label} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase transition-all border border-transparent"
          style={{ ...glassStyle(b.bg), color: b.fg, border: b.border ? '1px solid var(--border)' : '1px solid transparent' }}>
          {b.label}
        </span>
      ))}
    </div>
  );
};

// ── Modal Preview ──────────────────────────────────────────────────────────
export const ModalPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [open, setOpen] = useState(false);
  
  const glassStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.card.hexValue, config.overlayOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  };

  return (
    <div className="p-10 flex items-center justify-center" style={{ ...vars, backgroundColor: 'var(--background)', minHeight: 200 }}>
      <button
        onClick={() => setOpen(true)}
        className={`px-5 py-2.5 ${getRadiusClass(config.buttonRadius)} text-sm font-bold transition-all hover:opacity-90 shadow-md`}
        style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
        Open Dialog
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.4)', ...vars }}>
           <div 
             className="absolute inset-0 transition-opacity" 
             onClick={() => setOpen(false)}
             style={{ backdropFilter: 'blur(2px)' }} 
           />
          <div className={`relative border w-full max-w-sm shadow-2xl transition-all ${getRadiusClass(config.cardRadius)} animate-in zoom-in-95 duration-200`} 
            style={{ ...glassStyle, borderColor: 'var(--border)' }}>
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-bold text-lg" style={{ color: 'var(--card-foreground)' }}>Confirm Deletion</h3>
              <button onClick={() => setOpen(false)} className="opacity-50 hover:opacity-100 transition-opacity p-1"><X className="w-5 h-5" /></button>
            </div>
            <div className="px-6 py-5">
              <p className="text-sm leading-relaxed opacity-80" style={{ color: 'var(--muted-foreground)' }}>
                 Are you sure you want to delete this theme? This action will apply your custom overlay opacity and blur settings in real-time.
              </p>
            </div>
            <div className="flex gap-2 px-6 pb-6 justify-end">
              <button onClick={() => setOpen(false)} className={`px-5 py-2 ${getRadiusClass(config.buttonRadius)} text-xs font-bold border hover:bg-muted/30 transition-all`} style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}>Cancel</button>
              <button onClick={() => setOpen(false)} className={`px-5 py-2 ${getRadiusClass(config.buttonRadius)} text-xs font-bold transition-all hover:opacity-90 shadow-sm`} style={{ backgroundColor: 'var(--destructive)', color: 'var(--destructive-foreground)' }}>Delete Theme</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Toast Preview ──────────────────────────────────────────────────────────
export const ToastPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [toasts, setToasts] = useState<{ id: number; msg: string; type: string }[]>([]);
  
  const add = (msg: string, type: string) => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 4000);
  };

  const glassStyle = (baseColor: string): React.CSSProperties => ({
    backgroundColor: colorWithAlpha(baseColor, config.overlayOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  });

  const colors: Record<string, { bg: string; border: string, fg: string; Icon: React.ElementType }> = {
    success: { bg: '#22c55e', border: '#22c55e40', fg: '#fff', Icon: CheckCircle },
    error:   { bg: t.destructive.hexValue, border: 'var(--destructive)', fg: 'var(--destructive-foreground)', Icon: AlertCircle },
    info:    { bg: '#3b82f6', border: '#3b82f640', fg: '#fff', Icon: Info },
  };

  return (
    <div className="p-10 flex flex-col gap-4 min-h-[300px]" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => add('Operation successful!', 'success')} className={`px-3 py-1.5 ${getRadiusClass(config.buttonRadius)} text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all`} style={{ backgroundColor: '#22c55e', color: '#fff' }}>Success</button>
        <button onClick={() => add('Something went wrong!', 'error')} className={`px-3 py-1.5 ${getRadiusClass(config.buttonRadius)} text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all`} style={{ backgroundColor: 'var(--destructive)', color: 'var(--destructive-foreground)' }}>Error</button>
        <button onClick={() => add('Update available.', 'info')} className={`px-3 py-1.5 ${getRadiusClass(config.buttonRadius)} text-[10px] font-bold uppercase tracking-wider shadow-sm transition-all`} style={{ backgroundColor: '#3b82f6', color: '#fff' }}>Info</button>
      </div>
      <div className="space-y-3 mt-6">
        {toasts.map(t => {
          const c = colors[t.type] || colors.info;
          const Icon = c.Icon;
          return (
            <div key={t.id} className={`flex items-center gap-4 px-5 py-4 border shadow-2xl transition-all ${getRadiusClass(config.cardRadius)} animate-in slide-in-from-right-3 fade-in duration-300`} 
              style={{ ...glassStyle(c.bg), borderColor: c.border, color: c.fg }}>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                 <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold flex-1 pr-6">{t.msg}</span>
              <button onClick={() => setToasts(p => p.filter(x => x.id !== t.id))} className="opacity-50 hover:opacity-100 transition-opacity p-2"><X className="w-4 h-4" /></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ── Dropdown Preview ──────────────────────────────────────────────────────────
export const DropdownPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [open, setOpen] = useState(true); // Default open for better preview
  
  const glassStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.card.hexValue, config.overlayOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  };

  const items = [
    { label: 'Edit Profile', Icon: Edit },
    { label: 'Duplicate', Icon: Copy },
    { label: 'Share Project', Icon: ExternalLink },
    { label: 'Delete Forever', Icon: Trash2, destructive: true },
  ];

  return (
    <div className="p-10 flex items-center justify-center relative min-h-[300px]" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <button 
        onClick={() => setOpen(!open)}
        className={`p-3 rounded-full hover:bg-muted/50 transition-all opacity-80 hover:opacity-100 border border-transparent hover:border-border`}
      >
        <MoreVertical className="w-6 h-6" />
      </button>

      {open && (
        <div 
          className={`absolute z-10 top-[60%] left-[50%] -translate-x-1/2 w-64 border shadow-2xl p-2 transition-all animate-in zoom-in-95 duration-200 ${getRadiusClass(config.cardRadius)}`}
          style={{ ...glassStyle, borderColor: 'var(--border)' }}
        >
          {items.map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-4 px-4 py-3 text-sm transition-all hover:bg-primary/10 ${getRadiusClass(config.buttonRadius)} ${item.destructive ? 'text-destructive font-bold' : 'text-foreground font-medium'}`}>
              <item.Icon className="w-4 h-4 opacity-70" />
              <span className="flex-1 text-left">{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Avatar Preview ───────────────────────────────────────────────────────────
export const AvatarPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  
  const bgStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.secondary.hexValue, config.badgeOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  };

  return (
    <div className="p-10 flex gap-6 items-center justify-center" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className={`w-14 h-14 flex items-center justify-center border font-bold text-lg ${getRadiusClass(config.buttonRadius)}`}
        style={{ ...bgStyle, borderColor: 'var(--border)', color: 'var(--foreground)' }}>
        JD
      </div>
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 shadow-sm" style={{ borderColor: 'var(--primary)' }}>
        <img src="https://i.pravatar.cc/120?u=a" alt="Avatar" className="w-full h-full object-cover" />
      </div>
      <div className={`w-14 h-14 flex items-center justify-center border font-bold text-lg ${getRadiusClass(config.cardRadius)} shadow-md`}
        style={{ ...bgStyle, borderColor: 'var(--border)', color: 'var(--foreground)' }}>
        AS
      </div>
    </div>
  );
};

// ── Switch Preview ───────────────────────────────────────────────────────────
export const SwitchPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [on, setOn] = useState(true);
  
  const trackStyle: React.CSSProperties = {
    backgroundColor: on ? colorWithAlpha(t.primary.hexValue, config.buttonOpacity) : colorWithAlpha(t.muted.hexValue, '50'),
    backdropFilter: on ? getBlurStyle(config.blurAmount) : 'none',
  };

  return (
    <div className="p-10 flex flex-col items-center justify-center gap-6" style={{ ...vars, backgroundColor: 'var(--background)' }}>
       <div className="flex items-center gap-4">
          <label className="text-sm font-bold opacity-80 uppercase tracking-wider">Interface Blur</label>
          <button 
            onClick={() => setOn(!on)}
            className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-all duration-300 border border-transparent shadow-inner`}
            style={trackStyle}
          >
            <span className={`pointer-events-none block h-5.5 w-5.5 rounded-full bg-white shadow-2xl ring-0 transition-all duration-300 ${on ? 'translate-x-[22px]' : 'translate-x-[2px]'}`} />
          </button>
       </div>
    </div>
  );
};

// ── Progress Preview ───────────────────────────────────────────────────────────
export const ProgressPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  
  const trackStyle: React.CSSProperties = {
     backgroundColor: colorWithAlpha(t.secondary.hexValue, config.inputOpacity),
     backdropFilter: getBlurStyle(config.blurAmount),
  };

  return (
    <div className="p-10 flex flex-col gap-10 w-full max-w-md mx-auto" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="space-y-3">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-70">
          <span>Storage Used</span>
          <span>85%</span>
        </div>
        <div className={`h-3 w-full overflow-hidden ${getRadiusClass(config.inputRadius)} border border-border/20 shadow-inner`} style={trackStyle}>
          <div className="h-full transition-all duration-700 ease-in-out" style={{ width: '85%', backgroundColor: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }} />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-70">
          <span>Render Efficiency</span>
          <span>42%</span>
        </div>
        <div className={`h-3 w-full overflow-hidden ${getRadiusClass(config.inputRadius)} border border-border/20 shadow-inner`} style={trackStyle}>
          <div className="h-full transition-all duration-700 ease-in-out" style={{ width: '42%', backgroundColor: 'var(--secondary)' }} />
        </div>
      </div>
    </div>
  );
};

// ── Skeleton Preview ─────────────────────────────────────────────────────
export const SkeletonPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  
  const glassStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.muted.hexValue, config.badgeOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
  };

  return (
    <div className="p-10 flex flex-col gap-6" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="flex gap-5 animate-pulse">
        <div className={`w-14 h-14 flex-shrink-0 ${getRadiusClass(config.cardRadius)}`} style={glassStyle} />
        <div className="flex-1 space-y-3 py-2">
          <div className="h-4 rounded w-3/4" style={glassStyle} />
          <div className="h-4 rounded w-1/2" style={glassStyle} />
        </div>
      </div>
      <div className="animate-pulse space-y-4 pt-4">
        <div className={`h-32 ${getRadiusClass(config.cardRadius)}`} style={glassStyle} />
        <div className="h-4 rounded w-2/3" style={glassStyle} />
        <div className="h-4 rounded w-1/2" style={glassStyle} />
      </div>
    </div>
  );
};

// ── Top Navbar Preview ────────────────────────────────────────────────────
export const NavbarPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [open, setOpen] = useState(false);
  
  const glassStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.background.hexValue, config.navbarOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  };

  const links = ['Dashboard', 'Assets', 'Activity'];
  return (
    <div style={{ ...vars, backgroundColor: 'var(--background)' }} className="min-h-[160px]">
      <header className="border-b transition-all shadow-sm" style={{ ...glassStyle, borderColor: 'var(--border)' }}>
        <div className="flex h-16 items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
               <span className="text-white font-black">C</span>
            </div>
            <span className="font-black text-xl tracking-tighter" style={{ color: 'var(--foreground)' }}>COLOUR</span>
          </div>
          <nav className="hidden sm:flex items-center gap-2">
            {links.map((l, i) => (
              <a key={l} className={`px-4 py-2 ${getRadiusClass(config.buttonRadius)} text-xs font-bold tracking-wide transition-all cursor-pointer`}
                style={{ backgroundColor: i === 0 ? 'var(--primary)' : 'transparent', color: i === 0 ? 'var(--primary-foreground)' : 'var(--muted-foreground)' }}>
                {l}
              </a>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-4">
             <button className="p-2 opacity-50"><Search size={18} /></button>
             <div className={`w-9 h-9 border p-0.5 ${getRadiusClass(config.buttonRadius)} shadow-sm`} style={{ borderColor: 'var(--border)' }}>
                <div className={`w-full h-full ${getRadiusClass(config.buttonRadius)} bg-secondary`} />
             </div>
          </div>
          <button className="sm:hidden p-2 opacity-70" onClick={() => setOpen(v => !v)}><Menu className="w-6 h-6" /></button>
        </div>
        {open && (
          <div className="sm:hidden border-t px-8 py-5 space-y-3 animate-in fade-in slide-in-from-top-2" style={{ borderColor: 'var(--border)' }}>
            {links.map(l => <a key={l} className={`block px-4 py-2.5 text-sm font-bold tracking-wide ${getRadiusClass(config.buttonRadius)} hover:bg-muted/50`} style={{ color: 'var(--muted-foreground)' }}>{l}</a>)}
          </div>
        )}
      </header>
    </div>
  );
};

// ── Bottom Nav Preview ────────────────────────────────────────────────────
export const BottomNavPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [active, setActive] = useState('home');
  
  const glassStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.background.hexValue, config.navbarOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  };

  const items = [
    { key: 'home', label: 'Home', Icon: Home },
    { key: 'search', label: 'Explore', Icon: Search },
    { key: 'plus', label: 'Create', Icon: Trash2, isCenter: true },
    { key: 'alerts', label: 'Updates', Icon: Bell },
    { key: 'profile', label: 'Me', Icon: User },
  ];
  return (
    <div style={{ ...vars, backgroundColor: 'var(--background)' }} className="min-h-[120px] flex items-end">
      <nav className="border-t transition-all w-full shadow-2xl" style={{ ...glassStyle, borderColor: 'var(--border)' }}>
        <div className="flex h-20 px-4">
          {items.map(item => {
            const isActive = item.key === active;
            if (item.isCenter) {
               return (
                 <div key={item.key} className="flex-1 flex items-center justify-center -translate-y-4">
                    <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30 active:scale-95 transition-transform">
                       <item.Icon className="w-7 h-7 rotate-45" />
                    </button>
                 </div>
               );
            }
            return (
              <button key={item.key} onClick={() => setActive(item.key)}
                className="flex-1 flex flex-col items-center justify-center gap-1.5 transition-all active:scale-90">
                <item.Icon className="w-5.5 h-5.5 transition-colors" style={{ color: isActive ? 'var(--primary)' : 'var(--muted-foreground)' }} />
                <span className="text-[9px] font-black uppercase tracking-widest" style={{ color: isActive ? 'var(--primary)' : 'var(--muted-foreground)' }}>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

// ── Sidebar Nav Preview ───────────────────────────────────────────────────
export const SidebarPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [collapsed, setCollapsed] = useState(false);
  
  const glassStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.background.hexValue, config.navbarOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
    WebkitBackdropFilter: getBlurStyle(config.blurAmount),
  };

  const items = [
    { key: 'dash', label: 'Dashboard', Icon: LayoutDashboard, active: true },
    { key: 'analytics', label: 'Analytics',  Icon: BarChart3 },
    { key: 'msg',    label: 'Inbox',     Icon: Mail, badge: 12 },
    { key: 'users',     label: 'Team',      Icon: User },
    { key: 'set',  label: 'Settings',   Icon: Settings },
  ];

  return (
    <div style={{ ...vars, backgroundColor: 'var(--background)' }} className="flex h-80 overflow-hidden shadow-inner">
      <aside className="border-r flex flex-col transition-all duration-500 shadow-xl z-10" 
        style={{ ...glassStyle, borderColor: 'var(--border)', width: collapsed ? 72 : 240 }}>
        <div className="flex h-20 items-center px-6 border-b gap-4 transition-all" style={{ borderColor: 'var(--border)' }}>
           <div className="w-9 h-9 rounded-xl bg-primary shrink-0 rotate-3 shadow-lg shadow-primary/20" />
           {!collapsed && <span className="font-black text-xl tracking-tighter animate-in fade-in zoom-in-95 duration-500">COLOUR</span>}
        </div>
        <nav className="flex-1 p-3 space-y-1.5 overflow-hidden pt-6">
          {items.map(item => (
            <button key={item.key}
                className={`w-full flex items-center gap-4 px-4 py-3 text-xs font-bold transition-all ${getRadiusClass(config.buttonRadius)} active:scale-[0.98] group`}
                style={{
                  backgroundColor: item.active ? 'var(--primary)' : 'transparent',
                  color: item.active ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                }}>
                <item.Icon className={`w-4.5 h-4.5 flex-shrink-0 transition-transform ${item.active ? '' : 'group-hover:scale-110'}`} />
                {!collapsed && <span className="truncate flex-1 text-left tracking-wide">{item.label}</span>}
                {!collapsed && item.badge && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-primary-foreground/20 shadow-inner">
                    {item.badge}
                  </span>
                )}
              </button>
          ))}
        </nav>
        <button onClick={() => setCollapsed(v => !v)} className="p-5 border-t opacity-40 hover:opacity-100 flex justify-center transition-opacity" style={{ borderColor: 'var(--border)' }}>
             {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </aside>
      <main className="flex-1 p-8 bg-muted/5 flex flex-col gap-6">
        <div className="h-8 w-48 rounded-lg bg-muted/20 animate-pulse" />
        <div className="grid grid-cols-2 gap-4 flex-1">
           <div className={`border border-dashed border-border/60 rounded-2xl flex items-center justify-center opacity-30 shadow-inner`} />
           <div className={`border border-dashed border-border/60 rounded-2xl flex items-center justify-center opacity-30 shadow-inner`} />
        </div>
      </main>
    </div>
  );
};

// ── Tabs Preview ──────────────────────────────────────────────────────────
export const TabsPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [tab, setTab] = useState(0);
  const tabs = ['User Management', 'Roles', 'Permissions'];
  
  const glassStyle: React.CSSProperties = {
    backgroundColor: colorWithAlpha(t.card.hexValue, config.cardOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
  };

  return (
    <div className="p-10" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className={`p-1.5 bg-muted/40 border border-border/50 flex gap-1 ${getRadiusClass(config.cardRadius)} shadow-inner`}>
         {tabs.map((t, i) => (
           <button key={t} onClick={() => setTab(i)}
             className={`flex-1 py-2 text-[10px] font-black uppercase tracking-widest transition-all ${getRadiusClass(config.buttonRadius)} ${tab === i ? 'bg-background shadow-md text-foreground' : 'text-muted-foreground hover:bg-background/40 hover:text-foreground'}`}>
             {t}
           </button>
         ))}
      </div>
      <div className={`mt-6 p-10 border border-border shadow-2xl transition-all ${getRadiusClass(config.cardRadius)}`} style={glassStyle}>
         <div className="w-12 h-1 w-full bg-primary/20 rounded-full mb-6" />
         <h4 className="font-black text-xl tracking-tight mb-3">Environment Configuration</h4>
         <p className="text-sm leading-relaxed opacity-70 font-medium max-w-lg">
           Your environment settings are automatically synchronized across all platforms. These tabs respect your custom radius and glassmorphism styles.
         </p>
         <div className="mt-8 flex gap-3">
             <div className="px-5 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase">Active</div>
             <div className="px-5 py-2 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase">Updated</div>
         </div>
      </div>
    </div>
  );
};

// ── Alert Preview ─────────────────────────────────────────────────────────
export const AlertPreview = () => {
  const { vars, config } = usePreviewConfig();
  
  const glassStyle = (baseColor: string): React.CSSProperties => ({
    backgroundColor: colorWithAlpha(baseColor, config.cardOpacity),
    backdropFilter: getBlurStyle(config.blurAmount),
  });

  const alerts = [
    { type: 'info',    Icon: Info,         label: 'Information',    msg: 'A critical update has been deployed to production.',     bg: '#3b82f6', border: '#3b82f630' },
    { type: 'success', Icon: CheckCircle,  label: 'Success!', msg: 'New theme generated and synchronized successfully.', bg: '#22c55e', border: '#22c55e30' },
  ];

  return (
    <div className="p-10 flex flex-col gap-5" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      {alerts.map(a => (
        <div key={a.type} className={`flex items-start gap-5 px-6 py-5 rounded-2xl border transition-all ${getRadiusClass(config.cardRadius)} shadow-xl`}
          style={{ ...glassStyle(a.bg), borderColor: a.border }}>
          <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl transition-all flex items-center justify-center bg-white/25 shadow-inner" style={{ backdropFilter: 'blur(10px)' }}>
             <a.Icon className="w-5 h-5 text-white drop-shadow-md" />
          </div>
          <div className="flex-1">
            <p className="font-black text-sm tracking-tight pt-0.5" style={{ color: 'var(--foreground)' }}>{a.label}</p>
            <p className="text-xs mt-2 opacity-80 leading-relaxed font-semibold" style={{ color: 'var(--foreground)' }}>{a.msg}</p>
          </div>
          <button className="opacity-30 hover:opacity-100 transition-opacity p-1"><X size={16} /></button>
        </div>
      ))}
    </div>
  );
};

// ── Checkbox Preview ──────────────────────────────────────────────────────────
export const CheckboxPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [checked, setChecked] = useState(true);
  
  return (
    <div className="p-10 flex flex-col gap-6" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <label className="group flex items-center gap-3 cursor-pointer select-none">
        <div className="relative flex items-center justify-center">
          <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} className="peer sr-only" />
          <div className={`h-6 w-6 border-2 transition-all duration-200 ${getRadiusClass(config.inputRadius)} ${checked ? 'bg-primary border-primary' : 'border-input bg-background'}`}
               style={{ backgroundColor: checked ? colorWithAlpha(t.primary.hexValue, config.buttonOpacity) : 'transparent' }}>
          </div>
          {checked && <Check className="absolute w-4 h-4 text-primary-foreground" />}
        </div>
        <span className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>Accept Terms & Conditions</span>
      </label>
      <div className="flex items-center gap-3 opacity-50 cursor-not-allowed">
        <div className={`h-6 w-6 border-2 border-input ${getRadiusClass(config.inputRadius)}`} />
        <span className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>Disabled Option</span>
      </div>
    </div>
  );
};

// ── Radio Group Preview ───────────────────────────────────────────────────────
export const RadioGroupPreview = () => {
  const { vars } = usePreviewConfig();
  const [selected, setSelected] = useState('one');
  
  const options = [
    { id: 'one', label: 'Standard Delivery' },
    { id: 'two', label: 'Express Shipping' },
    { id: 'three', label: 'In-Store Pickup' },
  ];

  return (
    <div className="p-10 flex flex-col gap-4" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      {options.map(opt => (
        <label key={opt.id} className="group flex items-center gap-3 cursor-pointer select-none">
          <div className="relative flex items-center justify-center">
            <input type="radio" checked={selected === opt.id} onChange={() => setSelected(opt.id!)} className="peer sr-only" />
            <div className={`h-6 w-6 border-2 rounded-full transition-all duration-200 ${selected === opt.id ? 'border-primary' : 'border-input bg-background'}`} />
            {selected === opt.id && (
              <div className="absolute w-3 h-3 rounded-full bg-primary" />
            )}
          </div>
          <span className="text-sm font-bold" style={{ color: 'var(--foreground)' }}>{opt.label}</span>
        </label>
      ))}
    </div>
  );
};

// ── Slider Preview ────────────────────────────────────────────────────────────
export const SliderPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [val, setVal] = useState(65);
  
  return (
    <div className="p-10 w-full max-w-sm mx-auto flex flex-col gap-6" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="flex justify-between items-center">
         <span className="text-xs font-black uppercase tracking-widest opacity-60">System Volume</span>
         <span className="text-sm font-bold text-primary">{val}%</span>
      </div>
      <div className="relative h-6 flex items-center">
        <div className={`absolute h-2 w-full rounded-full border border-border/20`} 
             style={{ backgroundColor: colorWithAlpha(t.muted.hexValue, config.inputOpacity) }} />
        <div className="absolute h-2 rounded-full bg-primary" style={{ width: `${val}%`, boxShadow: '0 0 15px var(--primary)' }} />
        <input 
          type="range" min="0" max="100" value={val} 
          onChange={(e) => setVal(parseInt(e.target.value))}
          className="absolute w-full h-2 opacity-0 cursor-pointer z-10"
        />
        <div className="absolute h-5 w-5 bg-background border-2 border-primary rounded-full shadow-lg pointer-events-none transition-all"
             style={{ left: `calc(${val}% - 10px)` }} />
      </div>
    </div>
  );
};

// ── Accordion Preview ─────────────────────────────────────────────────────────
export const AccordionPreview = () => {
  const { vars, config, t } = usePreviewConfig();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const items = [
    { title: 'Project Overview', content: 'This theme studio allows you to create beautiful, consistent color palettes for both Web and Mobile apps with ease.' },
    { title: 'Technical Stack', content: 'Built with React, Tailwind CSS, and Lucide icons. Exportable code snippets for Flutter and React are generated in real-time.' },
    { title: 'Privacy Policy', content: 'Your theme data is stored locally in your browser. We do not collect or share any personal information.' },
  ];

  return (
    <div className="p-10 flex flex-col gap-3" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className={`border transition-all overflow-hidden ${getRadiusClass(config.cardRadius)}`}
               style={{ backgroundColor: colorWithAlpha(t.card.hexValue, config.cardOpacity), borderColor: 'var(--border)' }}>
            <button 
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
            >
              <span className="font-bold text-sm">{item.title}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              <div className="px-6 pb-5 pt-1 text-xs leading-relaxed opacity-70">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ── Breadcrumb Preview ────────────────────────────────────────────────────────
export const BreadcrumbPreview = () => {
  const { vars } = usePreviewConfig();
  const items = ['Workspace', 'Projects', 'Design System', 'Colors'];
  
  return (
    <div className="p-10 flex items-center gap-3" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      {items.map((item, i) => (
        <React.Fragment key={item}>
          <button className={`text-xs font-bold transition-colors ${i === items.length - 1 ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
            {item}
          </button>
          {i < items.length - 1 && <ChevronRight className="w-3.5 h-3.5 opacity-30" />}
        </React.Fragment>
      ))}
    </div>
  );
};

// ── Separator Preview ─────────────────────────────────────────────────────────
export const SeparatorPreview = () => {
  const { vars } = usePreviewConfig();
  
  return (
    <div className="p-10 flex flex-col gap-6" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="space-y-1">
        <h4 className="text-sm font-black tracking-tight">Theme Studio v2.0</h4>
        <p className="text-xs opacity-60 font-medium">Revolutionizing design-to-code workflows.</p>
      </div>
      <div className="h-[1px] w-full bg-border" />
      <div className="flex h-5 items-center gap-4 text-xs font-bold">
        <span className="text-primary">Docs</span>
        <div className="w-[1px] h-full bg-border" />
        <span className="opacity-60">GitHub</span>
        <div className="w-[1px] h-full bg-border" />
        <span className="opacity-60">Discord</span>
      </div>
    </div>
  );
};

// Map component name → preview component
export const previewMap: Record<string, React.ComponentType> = {
  'Button':             ButtonPreview,
  'Input':              InputPreview,
  'Card':               CardPreview,
  'Badge':              BadgePreview,
  'Modal':              ModalPreview,
  'Toast':              ToastPreview,
  'Skeleton':           SkeletonPreview,
  'Top Navbar':         NavbarPreview,
  'Bottom Nav':         BottomNavPreview,
  'Sidebar':            SidebarPreview,
  'Tabs':               TabsPreview,
  'Alert':              AlertPreview,
  'Dropdown':           DropdownPreview,
  'Avatar':             AvatarPreview,
  'Switch':             SwitchPreview,
  'Progress':           ProgressPreview,
  'Checkbox':           CheckboxPreview,
  'Radio Group':        RadioGroupPreview,
  'Slider':             SliderPreview,
  'Accordion':          AccordionPreview,
  'Breadcrumb':         BreadcrumbPreview,
  'Separator':          SeparatorPreview,
};
