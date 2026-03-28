import { ChevronDown } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon: React.ReactNode;
  sectionKey: string;
  collapsed: boolean;
  onToggle: () => void;
}

export const SectionHeader = ({ title, icon, collapsed, onToggle }: SectionHeaderProps) => {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full text-sm font-semibold py-1 hover:opacity-80 transition-opacity"
    >
      <span className="flex items-center gap-1.5">{icon} {title}</span>
      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${collapsed ? '-rotate-90' : ''}`} />
    </button>
  );
};