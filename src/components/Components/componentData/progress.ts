import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const progress: ComponentEntry = {
  name: 'Progress',
  description: 'Indicator for the completion status of a task or process.',
  react: (config) => `// components/ui/Progress.tsx
interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
}

const Progress = ({ value, max = 100, className = "" }: ProgressProps) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={\`relative h-2 w-full overflow-hidden rounded-${config.buttonRadius === 'full' ? 'full' : 'lg'} bg-secondary${getTwOpacity(config.inputOpacity)} transition-all \${className}\`}>
      <div 
        className="h-full bg-primary transition-all duration-500 ease-in-out" 
        style={{ width: \`\${percentage}%\` }}
      />
    </div>
  );
};

export default Progress;`,
  usageReact: (_config) => `<div className="w-full space-y-2">
  <div className="flex justify-between text-xs font-medium">
    <span>Uploading...</span>
    <span>45%</span>
  </div>
  <Progress value={45} />
</div>`,
  flutter: (config) => `// widgets/custom_progress.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomProgress extends StatelessWidget {
  final double value; // 0.0 to 1.0

  const CustomProgress({super.key, required this.value});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(${config.buttonRadius === 'full' ? '999' : '8'}),
      child: LinearProgressIndicator(
        value: value,
        backgroundColor: context.cs.secondaryContainer${getFlutterOpacity(config.inputOpacity)},
        valueColor: AlwaysStoppedAnimation<Color>(context.cs.primary),
        minHeight: 8,
      ),
    );
  }
}`,
  usageFlutter: (_config) => `CustomProgress(value: 0.45)`,
};

export default progress;
