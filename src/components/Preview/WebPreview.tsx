import { useThemeStore } from '../../store/useThemeStore';
import React from 'react';

export const WebPreview = () => {
    const { theme, mode } = useThemeStore();
    const currentTheme = theme[mode];

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

    return (
        <div className="flex flex-col gap-8 p-8 rounded-2xl border transition-colors shadow-sm"
            style={{ ...dynamicStyles, backgroundColor: 'var(--background)', color: 'var(--foreground)', borderColor: 'var(--border)' }}>

            <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">Tailwind / CSS Components</h3>
                <p className="text-sm opacity-60">This container leverages the raw CSS variables derived from the theme.</p>
            </div>

            <div className="flex flex-wrap gap-4">
                <button className="px-5 py-2.5 rounded-md font-medium text-sm transition-opacity hover:opacity-90 shadow-sm" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>Primary Action</button>
                <button className="px-5 py-2.5 rounded-md font-medium text-sm transition-opacity hover:opacity-90 border" style={{ backgroundColor: 'var(--secondary)', color: 'var(--secondary-foreground)', borderColor: 'var(--border)' }}>Secondary</button>
                <button className="px-5 py-2.5 rounded-md font-medium text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: 'var(--destructive)', color: 'var(--destructive-foreground)' }}>Destructive</button>
            </div>

            <div className="p-6 rounded-xl border shadow-sm" style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)', borderColor: 'var(--border)' }}>
                <h4 className="text-lg font-semibold mb-2">Card Component</h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>Cards display content flexibly and elegantly. They adapt to both light and dark modes flawlessly, relying on robust OKLCH generated tokens.</p>
            </div>

            <div className="p-4 rounded-lg border flex flex-col gap-1" style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)', borderColor: 'var(--border)' }}>
                <span className="text-sm font-semibold tracking-wide">Alert Notification</span>
                <span className="text-sm opacity-80">This is an alert or muted notification message.</span>
            </div>

            <div className="flex flex-col gap-2 max-w-sm">
                <label className="text-sm font-medium">Email Address</label>
                <div
                    className="flex px-3 py-2.5 rounded-md border focus-within:ring-2 focus-within:ring-offset-2 transition-shadow"
                    style={{
                        backgroundColor: 'var(--background)',
                        borderColor: 'var(--input)',
                        // @ts-ignore
                        '--tw-ring-color': 'var(--ring)'
                    }}
                >
                    <input
                        placeholder="name@example.com"
                        className="w-full bg-transparent outline-none text-sm placeholder:opacity-50"
                        style={{ color: 'var(--foreground)' }}
                    />
                </div>
            </div>

        </div>
    );
};
