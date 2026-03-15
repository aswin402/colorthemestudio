import { useThemeStore } from '../../store/useThemeStore';

export const FlutterPreview = () => {
    const { theme, mode } = useThemeStore();
    const currentTheme = theme[mode];

    // Map to Flutter tokens
    const surface = currentTheme.background.hexValue;
    const onSurface = currentTheme.foreground.hexValue;
    const primary = currentTheme.primary.hexValue;
    const onPrimary = currentTheme.primaryForeground.hexValue;
    const secondary = currentTheme.accent.hexValue;
    const onSecondary = currentTheme.accentForeground.hexValue;
    const secondaryContainer = currentTheme.secondary.hexValue;
    const outline = currentTheme.border.hexValue;
    const surfaceContainer = currentTheme.input.hexValue;

    return (
        <div className="flex flex-col gap-8 p-8 rounded-2xl border relative overflow-hidden transition-colors shadow-sm font-sans"
            style={{ backgroundColor: surface, color: onSurface, borderColor: outline }}>

            <div className="space-y-2">
                <h3 className="text-lg font-medium tracking-tight">Material 3 / Flutter Widgets</h3>
                <p className="text-sm opacity-60">This container mimics the appearance of a Flutter app using the generated ColorScheme.</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-2">
                <button className="px-6 py-2.5 rounded-full font-medium text-sm shadow-md transition-shadow hover:shadow-lg"
                    style={{ backgroundColor: primary, color: onPrimary }}>
                    Elevated Button
                </button>

                <button className="px-6 py-2.5 rounded-full font-medium text-sm transition-colors"
                    style={{ backgroundColor: secondaryContainer, color: onSurface }}>
                    Tonal Button
                </button>

                <button className="px-6 py-2.5 rounded-full font-medium text-sm border"
                    style={{ borderColor: outline, color: primary }}>
                    Outlined
                </button>
            </div>

            <div className="p-6 rounded-2xl shadow-sm border mt-4" style={{ backgroundColor: secondary, color: onSecondary, borderColor: outline }}>
                <h3 className="text-lg font-medium mb-2">Secondary Card</h3>
                <p className="text-sm opacity-90 leading-relaxed">Content inside a Material Design secondary card layout reflecting the surface variant tint.</p>
            </div>

            <div className="mt-6 border-b-2" style={{ backgroundColor: surfaceContainer, borderColor: primary }}>
                <div className="px-4 py-3">
                    <span className="text-xs font-semibold tracking-wider block mb-1" style={{ color: primary }}>Label Text</span>
                    <span className="text-base" style={{ color: onSurface }}>User input field...</span>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="absolute bottom-8 right-8 w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                style={{ backgroundColor: primary, color: onPrimary }}>
                <span className="text-2xl font-light mb-1">+</span>
            </div>

        </div>
    );
};
