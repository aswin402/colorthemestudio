import type { Preset } from '../../../../types';
import { shadcnPresets } from './categories/shadcn';
import { daisyPresets } from './categories/daisy';
import { modernPresets } from './categories/modern';
import { minimalPresets } from './categories/minimal';
import { darkPresets } from './categories/dark';
import { playfulPresets } from './categories/playful';
import { professionalPresets } from './categories/professional';
import { naturePresets } from './categories/nature';
import { vintagePresets } from './categories/vintage';
import { futuristicPresets } from './categories/futuristic';
import { luxuryPresets } from './categories/luxury';
import { artisticPresets } from './categories/artistic';
import { lifestylePresets } from './categories/lifestyle';
import { gamingPresets } from './categories/gaming';
import { devtoolsPresets } from './categories/devtools';
import { brandPresets } from './categories/brand';

export const presets: Preset[] = [
  ...shadcnPresets,
  ...daisyPresets,
  ...modernPresets,
  ...minimalPresets,
  ...darkPresets,
  ...playfulPresets,
  ...professionalPresets,
  ...naturePresets,
  ...vintagePresets,
  ...futuristicPresets,
  ...luxuryPresets,
  ...artisticPresets,
  ...lifestylePresets,
  ...gamingPresets,
  ...devtoolsPresets,
  ...brandPresets,
];
