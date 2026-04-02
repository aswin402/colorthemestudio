// ─────────────────────────────────────────────────────────────────────────────
// Component data barrel — import from here to keep ComponentsExportSection slim.
// To add a new component: create a new file in this directory and add it here.
// ─────────────────────────────────────────────────────────────────────────────
import button from './button';
import input from './input';
import card from './card';
import badge from './badge';
import modal from './modal';
import toast from './toast';
import skeleton from './skeleton';
import topNavbar from './topNavbar';
import bottomNav from './bottomNav';
import sidebar from './sidebar';
import tabs from './tabs';
import dropdown from './dropdown';
import avatar from './avatar';
import switchToggle from './switchToggle';
import progress from './progress';
import alert from './alert';
import checkbox from './checkbox';
import radioGroup from './radioGroup';
import slider from './slider';
import accordion from './accordion';
import breadcrumb from './breadcrumb';
import separator from './separator';

import type { ComponentEntry } from '../types';

export const components: ComponentEntry[] = [
  button,
  input,
  card,
  badge,
  modal,
  toast,
  skeleton,
  topNavbar,
  bottomNav,
  sidebar,
  tabs,
  dropdown,
  avatar,
  switchToggle,
  progress,
  alert,
  checkbox,
  radioGroup,
  slider,
  accordion,
  breadcrumb,
  separator,
];
