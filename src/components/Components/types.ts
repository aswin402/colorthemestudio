// ─────────────────────────────────────────────────────────────────────────────
// Shared types for ComponentsExportSection
// ─────────────────────────────────────────────────────────────────────────────

import type { ComponentConfig } from '../../types';

export type Framework = 'react' | 'flutter';
export type CodeTab = 'preview' | 'code' | 'usage';

export interface ComponentEntry {
  name: string;
  description: string;
  react: (config: ComponentConfig) => string;
  usageReact: (config: ComponentConfig) => string;
  flutter: (config: ComponentConfig) => string;
  usageFlutter: (config: ComponentConfig) => string;
}

