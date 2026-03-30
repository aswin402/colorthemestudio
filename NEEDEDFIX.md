# React Doctor Report

**Generated:** `3/30/2026, 10:58:10 PM`

## Health Score: 0/100

| Metric | Count | Impact |
|--------|-------|--------|
| Errors | 5 | -5 points |
| Warnings | 115 | -2 points |
| Performance | 3135 | -1 point |
| Accessibility | 94 | -2 points |
| Dead Code | 2 | -1 point |

## Project Information

- **React:** 19.2.4
- **Next.js:** Not detected
- **TypeScript:** ✅ Enabled
- **Components:** 73
- **Custom Hooks:** 0
- **Files Scanned:** 42
- **State Management:** Zustand
- **Styling:** Tailwind CSS

## 🔴 Critical Errors (5)

### `component/missing-key`

**Found in:** 4 location(s)

**Problem:** Array.map() without key prop. This can cause rendering issues.

**Why:** React uses keys to identify which items have changed. Missing keys cause rendering issues and performance problems.

**Fix:**

```jsx
{array.map(item => (
  <div key={item.id}>{item.name}</div>
))}
```

**Locations:**
- `src/components/Export/TailwindExport.tsx:19`
- `src/components/Export/TailwindExport.tsx:23`
- `src/components/CodeGenerator/WebCSS.tsx:29`
- `src/components/CodeGenerator/WebCSS.tsx:33`

### `hooks/conditional`

**Found in:** 1 location(s)

**Problem:** Hooks cannot be called conditionally. Move hooks to top level.

**Why:** React hooks must be called in the same order on every render. Conditional hooks break this rule.

**Fix:**

```jsx
// Move all hooks to the top level
function Component() {
  const [state, setState] = useState();
  
  if (condition) {
    // Do not put hooks here
  }
  
  // Hooks are at the top
}
```

**Locations:**
- `src/components/Components/ComponentsExportSection.tsx:768`

## 🟡 Warnings (115)

### `component/too-large`

**Found in:** 4 location(s)

**Problem:** Component has 727 lines. Consider splitting into smaller components.

**Why:** Large components are hard to maintain, test, and understand.

**Fix:**

```jsx
// Split into smaller components
function LargeComponent() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
```

**Locations:**
- `src/components/Export/FlutterExport.tsx:1`
- `src/components/Preview/WebPreview.tsx:1`
- `src/components/Preview/FlutterPreview.tsx:1`
- `src/components/Components/ComponentsExportSection.tsx:1`

### `component/inline-styles`

**Found in:** 89 location(s)

**Problem:** Inline styles detected. Consider using CSS modules or Tailwind CSS.

**Why:** This issue affects code quality and maintainability.

**Fix:**

Review the documentation for best practices.

### `component/direct-dom`

**Found in:** 5 location(s)

**Problem:** Direct DOM manipulation outside useEffect. Use React refs instead.

**Why:** This issue affects code quality and maintainability.

**Fix:**

Review the documentation for best practices.

**Locations:**
- `src/components/Components/ComponentsExportSection.tsx:604`
- `src/components/Components/ComponentsExportSection.tsx:605`
- `src/components/Components/ComponentsExportSection.tsx:609`
- `src/components/Components/ComponentsExportSection.tsx:610`
- `src/main.tsx:6`

### `state/settimeout-no-cleanup`

**Found in:** 7 location(s)

**Problem:** setTimeout without cleanup. This causes memory leaks and side effects after unmount.

**Why:** This issue affects code quality and maintainability.

**Fix:**

Review the documentation for best practices.

### `state/prop-drilling`

**Found in:** 10 location(s)

**Problem:** Prop drilling detected. Consider using Context API or state management.

**Why:** Passing props through multiple levels makes code brittle and hard to refactor.

**Fix:**

```jsx
// Use Context API
const UserContext = createContext();

function Parent() {
  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
}

function Child() {
  const user = useContext(UserContext);
  return <div>{user.name}</div>;
}
```

## ⚡ Performance Issues (3135)

### `perf/missing-memo`

**Found in:** 3010 location(s)

**Problem:** Large component without memoization. Consider using React.memo.

**Why:** Large components re-render unnecessarily, hurting performance.

**Fix:**

```jsx
import { memo } from "react";

export default memo(Component);
```

### `perf/inline-function`

**Found in:** 34 location(s)

**Problem:** Inline function in prop creates new function on every render.

**Why:** Inline functions create new instances on every render, breaking memoization.

**Fix:**

```jsx
// Use useCallback
const handleClick = useCallback(() => {
  doSomething();
}, [deps]);

<button onClick={handleClick}>Click</button>
```

### `perf/inline-object`

**Found in:** 89 location(s)

**Problem:** Inline object creates new reference on every render.

**Why:** This issue affects code quality and maintainability.

**Fix:**

Review the documentation for best practices.

### `perf/expensive-computation`

**Found in:** 2 location(s)

**Problem:** Expensive computation in render. This will run on every render.

**Why:** This issue affects code quality and maintainability.

**Fix:**

Review the documentation for best practices.

**Locations:**
- `src/components/Components/ComponentsExportSection.tsx:782`
- `src/components/Components/ConfigControl/sections/PresetSelector.tsx:22`

## ♿ Accessibility Issues (94)

### `a11y/button-no-text`

**Found in:** 45 location(s)

**Problem:** Button without accessible text. Screen readers cannot identify button purpose.

**Why:** Screen readers cannot identify button purpose without text or aria-label.

**Fix:**

```jsx
<button aria-label="Close">✕</button>
// or
<button>Click me</button>
```

### `a11y/click-no-keyboard`

**Found in:** 44 location(s)

**Problem:** onClick without keyboard handler. Users cannot interact with keyboard.

**Why:** Keyboard users cannot interact with elements that only have onClick handlers.

**Fix:**

```jsx
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Click me
</div>
```

### `a11y/missing-label`

**Found in:** 5 location(s)

**Problem:** Form input without associated label. Screen readers cannot identify field purpose.

**Why:** This issue affects code quality and maintainability.

**Fix:**

Review the documentation for best practices.

**Locations:**
- `src/components/Preview/WebPreview.tsx:360`
- `src/components/Preview/WebPreview.tsx:377`
- `src/components/Preview/WebPreview.tsx:542`
- `src/components/Preview/FlutterPreview.tsx:166`
- `src/components/Components/ComponentsExportSection.tsx:172`

## ℹ️ Information (2)

### `component/missing-display-name`

**Found in:** 2 location(s)

**Problem:** Component missing displayName for better debugging

**Why:** This issue affects code quality and maintainability.

**Fix:**

Review the documentation for best practices.

**Locations:**
- `src/components/Layout/Header.tsx:70`
- `src/App.tsx:49`

---

**Need help?** [Open an issue](https://github.com/yourusername/react-doctor/issues)
**Documentation:** [React Doctor Docs](https://github.com/yourusername/react-doctor)
