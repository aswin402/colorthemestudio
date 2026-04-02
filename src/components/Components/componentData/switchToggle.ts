import { getTwOpacity, getFlutterOpacity } from '../../../utils/exportHelpers';
import type { ComponentEntry } from '../types';

const switchToggle: ComponentEntry = {
  name: 'Switch',
  description: 'Binary control that toggles between checked and unchecked states.',
  react: (config) => `// components/ui/Switch.tsx
import { useState } from 'react';

const Switch = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={\`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 \${enabled ? 'bg-primary${getTwOpacity(config.buttonOpacity)}' : 'bg-muted'}\`}
    >
      <span
        className={\`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-all duration-300 \${enabled ? 'translate-x-5' : 'translate-x-1'}\`}
      />
    </button>
  );
};

export default Switch;`,
  usageReact: (_config) => `<div className="flex items-center gap-2">
  <Switch />
  <span className="text-sm">Enable notifications</span>
</div>`,
  flutter: (config) => `// widgets/custom_switch.dart
import 'package:flutter/material.dart';
import '../core/extension/context_extension.dart';

class CustomSwitch extends StatefulWidget {
  const CustomSwitch({super.key});

  @override
  State<CustomSwitch> createState() => _CustomSwitchState();
}

class _CustomSwitchState extends State<CustomSwitch> {
  bool _value = true;

  @override
  Widget build(BuildContext context) {
    return Switch(
      value: _value,
      onChanged: (v) => setState(() => _value = v),
      activeColor: context.cs.primary,
      activeTrackColor: context.cs.primary${getFlutterOpacity(config.buttonOpacity)},
      inactiveTrackColor: context.cs.surfaceVariant.withOpacity(0.5),
    );
  }
}`,
  usageFlutter: (_config) => `CustomSwitch()`,
};

export default switchToggle;
