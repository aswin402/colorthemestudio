import React, { useState } from 'react';
import { useThemeStore } from '../../store/useThemeStore';
import {
  X, AlertCircle, Info, CheckCircle,
  Home, Search, Bell, User, Settings, BarChart3,
  LayoutDashboard, ChevronLeft, ChevronRight,
  Mail, Eye, EyeOff, Loader2, Menu,
} from 'lucide-react';

// Inject theme CSS vars into a container
export function useThemeVars() {
  const { theme, mode } = useThemeStore();
  const t = theme[mode];
  return {
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
}

// ── Button Preview ─────────────────────────────────────────────────────────
export const ButtonPreview = () => {
  const vars = useThemeVars();
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-wrap gap-3 p-6 rounded-xl" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-90 active:scale-95"
        style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
        Primary Action
      </button>
      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-80"
        style={{ backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)' }}>
        Secondary
      </button>
      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all hover:opacity-80"
        style={{ borderColor: 'var(--border)', color: 'var(--foreground)', backgroundColor: 'transparent' }}>
        Outline
      </button>
      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:opacity-80"
        style={{ backgroundColor: 'var(--destructive)', color: 'var(--destructive-foreground)' }}>
        Destructive
      </button>
      <button
        onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 2000); }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
        style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)', opacity: loading ? 0.8 : 1 }}>
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {loading ? 'Loading...' : 'Click to Load'}
      </button>
    </div>
  );
};

// ── Input Preview ──────────────────────────────────────────────────────────
export const InputPreview = () => {
  const vars = useThemeVars();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <div className="flex flex-col gap-4 p-6" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium flex items-center gap-2" style={{ color: 'var(--foreground)' }}>
          <Mail className="w-3.5 h-3.5" /> Email Address
        </label>
        <input
          type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="h-10 px-3 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-offset-1"
          style={{ backgroundColor: 'var(--background)', borderColor: 'var(--input)', color: 'var(--foreground)' }}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>Password</label>
        <div className="relative">
          <input
            type={showPass ? 'text' : 'password'} placeholder="Enter password"
            className="h-10 w-full px-3 pr-10 rounded-lg border text-sm outline-none"
            style={{ backgroundColor: 'var(--background)', borderColor: 'var(--input)', color: 'var(--foreground)' }}
          />
          <button onClick={() => setShowPass(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100">
            {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: 'var(--foreground)' }}>With Error</label>
        <input
          type="text" placeholder="username" defaultValue="jo"
          className="h-10 px-3 rounded-lg border text-sm outline-none"
          style={{ backgroundColor: 'var(--background)', borderColor: 'var(--destructive)', color: 'var(--foreground)' }}
        />
        <p className="text-xs" style={{ color: 'var(--destructive)' }}>Username must be at least 3 characters.</p>
      </div>
    </div>
  );
};

// ── Card Preview ────────────────────────────────────────────────────────────
export const CardPreview = () => {
  const vars = useThemeVars();
  return (
    <div className="p-6 flex gap-4 flex-wrap" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="rounded-xl border p-5 flex flex-col gap-3 flex-1 min-w-[220px]"
        style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', color: 'var(--card-foreground)' }}>
        <div>
          <h3 className="font-semibold text-base leading-none mb-1">Project Settings</h3>
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Manage your project preferences</p>
        </div>
        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Configure notifications, access controls, and more.</p>
        <div className="flex gap-2 pt-1">
          <button className="px-3 py-1.5 rounded-lg text-sm font-medium" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>Save</button>
          <button className="px-3 py-1.5 rounded-lg text-sm font-medium border" style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

// ── Badge Preview ───────────────────────────────────────────────────────────
export const BadgePreview = () => {
  const vars = useThemeVars();
  const badges = [
    { label: 'Default',     bg: 'var(--primary)',     fg: 'var(--primary-foreground)' },
    { label: 'Secondary',   bg: 'var(--secondary)',   fg: 'var(--secondary-foreground)' },
    { label: 'Destructive', bg: 'var(--destructive)', fg: 'var(--destructive-foreground)' },
    { label: 'Success',     bg: '#22c55e',            fg: '#fff' },
    { label: 'Warning',     bg: '#f59e0b',            fg: '#fff' },
    { label: 'Outline',     bg: 'transparent',        fg: 'var(--foreground)', border: true },
  ];
  return (
    <div className="flex flex-wrap gap-2 p-6" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      {badges.map(b => (
        <span key={b.label} className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold"
          style={{ backgroundColor: b.bg, color: b.fg, border: b.border ? '1px solid var(--border)' : 'none' }}>
          {b.label}
        </span>
      ))}
    </div>
  );
};

// ── Modal Preview ──────────────────────────────────────────────────────────
export const ModalPreview = () => {
  const vars = useThemeVars();
  const [open, setOpen] = useState(false);
  return (
    <div className="p-6 flex items-center justify-center" style={{ ...vars, backgroundColor: 'var(--background)', minHeight: 160 }}>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-lg text-sm font-semibold"
        style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
        Open Dialog
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="rounded-xl border w-full max-w-md shadow-2xl" style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', ...vars }}>
            <div className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-semibold text-base" style={{ color: 'var(--card-foreground)' }}>Confirm Action</h3>
              <button onClick={() => setOpen(false)} className="opacity-50 hover:opacity-100"><X className="w-4 h-4" /></button>
            </div>
            <div className="px-6 py-4">
              <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>Are you sure you want to proceed? This action cannot be undone.</p>
            </div>
            <div className="flex gap-2 px-6 pb-5 justify-end">
              <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-sm border" style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}>Cancel</button>
              <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundColor: 'var(--destructive)', color: 'var(--destructive-foreground)' }}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ── Toast Preview ──────────────────────────────────────────────────────────
export const ToastPreview = () => {
  const vars = useThemeVars();
  const [toasts, setToasts] = useState<{ id: number; msg: string; type: string }[]>([]);
  const add = (msg: string, type: string) => {
    const id = Date.now();
    setToasts(p => [...p, { id, msg, type }]);
    setTimeout(() => setToasts(p => p.filter(t => t.id !== id)), 3000);
  };
  const colors: Record<string, { bg: string; fg: string; Icon: React.ElementType }> = {
    success: { bg: '#22c55e', fg: '#fff', Icon: CheckCircle },
    error:   { bg: 'var(--destructive)', fg: 'var(--destructive-foreground)', Icon: AlertCircle },
    info:    { bg: '#3b82f6', fg: '#fff', Icon: Info },
  };
  return (
    <div className="p-6 flex flex-col gap-3" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => add('Operation successful!', 'success')} className="px-3 py-1.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: '#22c55e', color: '#fff' }}>Success Toast</button>
        <button onClick={() => add('Something went wrong!', 'error')} className="px-3 py-1.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: 'var(--destructive)', color: 'var(--destructive-foreground)' }}>Error Toast</button>
        <button onClick={() => add('New update available.', 'info')} className="px-3 py-1.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: '#3b82f6', color: '#fff' }}>Info Toast</button>
      </div>
      <div className="space-y-2">
        {toasts.map(t => {
          const c = colors[t.type] || colors.info;
          const Icon = c.Icon;
          return (
            <div key={t.id} className="flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg" style={{ backgroundColor: c.bg, color: c.fg }}>
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm flex-1">{t.msg}</span>
              <button onClick={() => setToasts(p => p.filter(x => x.id !== t.id))}><X className="w-3.5 h-3.5" /></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ── Skeleton Preview ─────────────────────────────────────────────────────
export const SkeletonPreview = () => {
  const vars = useThemeVars();
  return (
    <div className="p-6 flex flex-col gap-4" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="flex gap-4 animate-pulse">
        <div className="w-12 h-12 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--muted)' }} />
        <div className="flex-1 space-y-2 py-1">
          <div className="h-3 rounded w-3/4" style={{ backgroundColor: 'var(--muted)' }} />
          <div className="h-3 rounded w-1/2" style={{ backgroundColor: 'var(--muted)' }} />
        </div>
      </div>
      <div className="animate-pulse space-y-2">
        <div className="h-32 rounded-lg" style={{ backgroundColor: 'var(--muted)' }} />
        <div className="h-3 rounded w-2/3" style={{ backgroundColor: 'var(--muted)' }} />
        <div className="h-3 rounded w-1/2" style={{ backgroundColor: 'var(--muted)' }} />
      </div>
    </div>
  );
};

// ── Top Navbar Preview ────────────────────────────────────────────────────
export const NavbarPreview = () => {
  const vars = useThemeVars();
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Features', 'Pricing', 'Docs'];
  return (
    <div style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <header className="border-b" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
        <div className="flex h-14 items-center justify-between px-4">
          <span className="font-bold text-base" style={{ color: 'var(--foreground)' }}>MyApp</span>
          <nav className="hidden sm:flex items-center gap-1">
            {links.map((l, i) => (
              <a key={l} className="px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                style={{ backgroundColor: i === 0 ? 'var(--primary)' : 'transparent', color: i === 0 ? 'var(--primary-foreground)' : 'var(--muted-foreground)' }}>
                {l}
              </a>
            ))}
          </nav>
          <div className="hidden sm:flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ color: 'var(--foreground)' }}>Sign In</button>
            <button className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>Get Started</button>
          </div>
          <button className="sm:hidden" onClick={() => setOpen(v => !v)}><Menu className="w-5 h-5" /></button>
        </div>
        {open && (
          <div className="sm:hidden border-t px-4 py-2 space-y-1" style={{ borderColor: 'var(--border)' }}>
            {links.map(l => <a key={l} className="block px-3 py-2 rounded-lg text-sm" style={{ color: 'var(--muted-foreground)' }}>{l}</a>)}
          </div>
        )}
      </header>
    </div>
  );
};

// ── Bottom Nav Preview ────────────────────────────────────────────────────
export const BottomNavPreview = () => {
  const vars = useThemeVars();
  const [active, setActive] = useState('home');
  const items = [
    { key: 'home', label: 'Home', Icon: Home },
    { key: 'search', label: 'Search', Icon: Search },
    { key: 'alerts', label: 'Alerts', Icon: Bell },
    { key: 'profile', label: 'Profile', Icon: User },
  ];
  return (
    <div style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <nav className="border-t" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}>
        <div className="flex h-16">
          {items.map(item => {
            const isActive = item.key === active;
            return (
              <button key={item.key} onClick={() => setActive(item.key)}
                className="flex-1 flex flex-col items-center justify-center gap-1">
                <item.Icon className="w-5 h-5" style={{ color: isActive ? 'var(--primary)' : 'var(--muted-foreground)' }} />
                <span className="text-[10px] font-medium" style={{ color: isActive ? 'var(--primary)' : 'var(--muted-foreground)' }}>{item.label}</span>
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
  const vars = useThemeVars();
  const [active, setActive] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    { key: 'dashboard', label: 'Dashboard', Icon: LayoutDashboard },
    { key: 'analytics', label: 'Analytics',  Icon: BarChart3 },
    { key: 'alerts',    label: 'Alerts',     Icon: Bell, badge: 5 },
    { key: 'users',     label: 'Users',      Icon: User },
    { key: 'settings',  label: 'Settings',   Icon: Settings },
  ];
  return (
    <div style={{ ...vars, backgroundColor: 'var(--background)' }} className="flex h-48">
      <aside className="border-r flex flex-col transition-all duration-200" style={{ borderColor: 'var(--border)', width: collapsed ? 56 : 160 }}>
        <div className="flex justify-end p-1.5 border-b" style={{ borderColor: 'var(--border)' }}>
          <button onClick={() => setCollapsed(v => !v)} className="p-1 rounded-lg" style={{ color: 'var(--muted-foreground)' }}>
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
        <nav className="flex-1 p-1.5 space-y-0.5 overflow-hidden">
          {items.map(item => {
            const isActive = item.key === active;
            return (
              <button key={item.key} onClick={() => setActive(item.key)}
                className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  backgroundColor: isActive ? 'var(--primary)' : 'transparent',
                  color: isActive ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                  justifyContent: collapsed ? 'center' : 'flex-start'
                }}>
                <item.Icon className="w-3.5 h-3.5 flex-shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
                {!collapsed && 'badge' in item && (
                  <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : 'var(--primary)', color: isActive ? '#fff' : 'var(--primary-foreground)' }}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <p className="text-xs font-semibold" style={{ color: 'var(--muted-foreground)' }}>Content area</p>
        <p className="text-xs mt-1 capitalize font-medium" style={{ color: 'var(--foreground)' }}>{active} view</p>
      </main>
    </div>
  );
};

// ── Tabs Preview ──────────────────────────────────────────────────────────
export const TabsPreview = () => {
  const vars = useThemeVars();
  const [tab, setTab] = useState(0);
  const tabs = [
    { label: 'Overview', content: 'Overview content with summary statistics and key metrics.' },
    { label: 'Analytics', content: 'Analytics data showing user engagement and conversion rates.' },
    { label: 'Settings', content: 'Configure your notification and privacy preferences here.' },
  ];
  return (
    <div className="p-6" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      <div className="rounded-xl border overflow-hidden" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}>
        <div className="flex border-b" style={{ borderColor: 'var(--border)' }}>
          {tabs.map((t, i) => (
            <button key={t.label} onClick={() => setTab(i)}
              className="flex-1 py-3 text-sm font-medium transition-colors border-b-2"
              style={{
                borderColor: tab === i ? 'var(--primary)' : 'transparent',
                color: tab === i ? 'var(--primary)' : 'var(--muted-foreground)',
              }}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="p-4">
          <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>{tabs[tab].content}</p>
        </div>
      </div>
    </div>
  );
};

// ── Alert Preview ─────────────────────────────────────────────────────────
export const AlertPreview = () => {
  const vars = useThemeVars();
  const alerts = [
    { type: 'info',    Icon: Info,         label: 'Info',    msg: 'A new software update is available.',     bg: '#3b82f620', border: '#3b82f6', color: '#3b82f6' },
    { type: 'success', Icon: CheckCircle,  label: 'Success', msg: 'Your payment was processed successfully.', bg: '#22c55e20', border: '#22c55e', color: '#22c55e' },
    { type: 'warning', Icon: AlertCircle,  label: 'Warning', msg: "You've used 90% of your storage limit.",   bg: '#f59e0b20', border: '#f59e0b', color: '#f59e0b' },
    { type: 'error',   Icon: AlertCircle,  label: 'Error',   msg: 'Authentication failed. Please try again.',bg: '#ef444420', border: '#ef4444', color: '#ef4444' },
  ];
  return (
    <div className="p-6 flex flex-col gap-3" style={{ ...vars, backgroundColor: 'var(--background)' }}>
      {alerts.map(a => (
        <div key={a.type} className="flex items-start gap-3 px-4 py-3 rounded-lg border"
          style={{ backgroundColor: a.bg, borderColor: a.border }}>
          <a.Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: a.color }} />
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{a.label}</p>
            <p className="text-xs" style={{ color: 'var(--muted-foreground)' }}>{a.msg}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Map component name → preview component
export const previewMap: Record<string, React.ComponentType> = {
  'Button':             ButtonPreview,
  'Input':              InputPreview,
  'Card':               CardPreview,
  'Badge':              BadgePreview,
  'Modal / Dialog':     ModalPreview,
  'Toast / Notification': ToastPreview,
  'Skeleton Loader':    SkeletonPreview,
  'Top Navbar':         NavbarPreview,
  'Bottom Navigation':  BottomNavPreview,
  'Sidebar Navigation': SidebarPreview,
  'Tabs':               TabsPreview,
  'Alert / Banner':     AlertPreview,
};
