import { ConfigControls } from './ConfigControl';
import { ComponentsLivePreview } from './ComponentsLivePreview';

interface ComponentsPageProps {
  panelClass: string;
}

export const ComponentsPage = ({ panelClass }: ComponentsPageProps) => {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-4 overflow-hidden">
      <div className={`lg:col-span-4 flex flex-col ${panelClass} rounded-2xl border shadow-sm overflow-hidden`}>
        <div className="flex-1 overflow-y-auto p-5 scrollbar-thin">
          <ConfigControls />
        </div>
      </div>

      <div className={`lg:col-span-8 flex flex-col ${panelClass} rounded-2xl border shadow-sm overflow-hidden`}>
        <div className="flex-1 overflow-y-auto scrollbar-thin">
          <ComponentsLivePreview />
        </div>
      </div>
    </div>
  );
};