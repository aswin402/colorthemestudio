import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ColorMode, ThemeTemperature, ThemeOutput, ComponentConfig } from '../types';
import { generateTheme } from '../utils/themeGenerator';

interface ThemeState {
    baseColor: string;
    temperature: ThemeTemperature;
    mode: ColorMode;
    theme: ThemeOutput;
    componentConfig: ComponentConfig;
    setBaseColor: (color: string) => void;
    setTemperature: (temp: ThemeTemperature) => void;
    setMode: (mode: ColorMode) => void;
    setComponentConfig: (config: Partial<ComponentConfig>) => void;
}

// Default green from prompt
const DEFAULT_COLOR = '#16A34A';
const DEFAULT_TEMP: ThemeTemperature = 'natural';

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            baseColor: DEFAULT_COLOR,
            temperature: DEFAULT_TEMP,
            mode: 'light',
            theme: generateTheme(DEFAULT_COLOR, DEFAULT_TEMP),
componentConfig: {
                buttonRadius: 'md',
                cardRadius: 'lg',
                inputRadius: 'md',
                headingFont: 'Poppins',
                bodyFont: 'Roboto',
                headingWeight: '700',
                bodyWeight: '400',
                fontSizeHeading: 'xl',
                fontSizeBody: 'base',
                lineHeight: 'normal',
                shadow: 'md',
                density: 'normal',
                borderWidth: '1',
            },

            setBaseColor: (color: string) =>
                set((state) => ({
                    baseColor: color,
                    theme: generateTheme(color, state.temperature),
                })),

            setTemperature: (temp: ThemeTemperature) =>
                set((state) => ({
                    temperature: temp,
                    theme: generateTheme(state.baseColor, temp),
                })),

            setMode: (mode: ColorMode) => set({ mode }),

            setComponentConfig: (config: Partial<ComponentConfig>) => 
                set((state) => ({
                    componentConfig: { ...state.componentConfig, ...config }
                })),
        }),
        {
            name: 'colorthemestudio-storage',
        }
    )
);
