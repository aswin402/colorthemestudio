import { ConfigControls } from './ConfigControls';
import { ComponentsLivePreview } from './ComponentsLivePreview';

interface ComponentsPageProps {
  panelClass: string;
}

export const ComponentsPage = ({ panelClass }: ComponentsPageProps) => {
  return (
    <div className={`h-full grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-0`}>
      {/* Configuration Column */}
      <div className={`lg:col-span-4 flex flex-col gap-6 overflow-y-auto scrollbar-hide rounded-2xl border ${panelClass} shadow-sm p-6`}>
        <ConfigControls />
      </div>

      {/* Live Component Preview Column */}
      <div className={`lg:col-span-8 flex flex-col gap-6 overflow-y-auto scrollbar-hide rounded-2xl border ${panelClass} shadow-sm p-6`}>
        <ComponentsLivePreview />
      </div>
    </div>
  );
};
