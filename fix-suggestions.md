# TravlTik Comprehensive Error Remediation Guide

This guide details the detection criteria, root causes, and verified resolution patterns for every class of error tracked in the TravlTik codebase.

---

## 1. React Console & Runtime Errors

### 1.1 "Missing `key` prop for element in iterator"
- **Cause**: Rendering lists with `.map()` without assigning a distinct `key` prop to the top-level element inside the callback.
- **Why it breaks**: React cannot reconcile DOM changes efficiently, causing unpredictable UI glitches, focus loss, and console warnings.
- **Solution Pattern**:
```tsx
// ❌ INCORRECT:
{items.map((item) => (
  <div className="card">{item.title}</div>
))}

// ✔ CORRECT:
{items.map((item, idx) => (
  <div key={item.id || item.slug || idx} className="card">{item.title}</div>
))}
```

---

### 1.2 "Cannot read property 'X' of undefined"
- **Cause**: Unchecked nested object indexing on API responses, dynamic state, or async data before hydration completes.
- **Solution Pattern**:
```tsx
// ❌ INCORRECT:
const name = user.profile.fullName;

// ✔ CORRECT:
const name = user?.profile?.fullName || "Guest";
```

---

### 1.3 "Rendered fewer hooks than expected" / "Hooks can only be called inside the body of a function component"
- **Cause**: Calling `useState`, `useEffect`, or `useCallback` inside `if (...) ` blocks, loop iterations, or helper callbacks.
- **Solution Pattern**:
```tsx
// ❌ INCORRECT:
if (isLoggedIn) {
  useEffect(() => { ... }, []);
}

// ✔ CORRECT:
useEffect(() => {
  if (!isLoggedIn) return;
  // logic here
}, [isLoggedIn]);
```

---

### 1.4 "Too many re-renders. React limits the number of renders to prevent an infinite loop"
- **Cause**: Calling a `setState` action directly in the render body or inside a `useEffect` without specifying dependencies or guards.
- **Solution Pattern**:
```tsx
// ❌ INCORRECT:
useEffect(() => {
  setCount(count + 1);
});

// ✔ CORRECT:
useEffect(() => {
  setCount(prev => prev + 1);
}, []); // Explicit dependency array
```

---

## 2. API & Network Routes

### 2.1 Missing Error Handling & 500 Crashes
- **Cause**: Async route handlers without an enclosing `try / catch` block.
- **Solution Pattern**:
```typescript
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    return new Response(JSON.stringify({ success: true, data: body }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    console.error('[API Error]', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

---

## 3. CLI Quick Reference
| Command | Action |
|---|---|
| `npm run detect-errors` | Scan entire codebase for all error types |
| `npm run fix-all-errors` | Execute automated fixes across all components |
| `npm run fix-react-errors` | Fix missing keys & unsafe property lookups |
| `npm run fix-api-errors` | Fix API headers and error wrappers |
| `npm run monitor-errors -- --live` | Start live telemetry listener server |
| `npm run error-report` | Regenerate dashboard and suggestions guide |
