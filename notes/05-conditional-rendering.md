# 05 — Conditional Rendering

**Course topic:** Conditional Rendering
**Date started:** 18Aug2026
**Status:** ⬜ In progress

---

## What to build with this concept

- Color-coded status/severity badges (e.g. green = mild, yellow = moderate, red = severe)
- Highlight overdue rows on the Visits page
- Empty-state messaging (e.g. "No adverse events match this filter")

---

## Key concepts (in my own words)

> Ternaries vs. `&&` vs. early returns — when do you reach for each? How do you avoid deeply nested conditionals in JSX?

---

## Code examples

```jsx
// StatCard.jsx — true conditional rendering: the <p> either
// exists in the output or it doesn't. Nothing renders (not even
// an empty tag) when `sub` is falsy.
{
  sub && <p className="mt-1 text-xs text-gray-400">{sub}</p>;
}
```

```jsx
// Badge.jsx — conditional *logic*, not conditional rendering.
// The JSX structure never branches (always one <span>); only the
// *value* plugged into it (colorClass) changes based on status.
// Still a legitimate, common pattern — just a different concept
// than what this roadmap topic is technically naming.
switch (status.toLowerCase()) {
  case "pending":
    color = "bg-gray-100 text-gray-600";
    break;
  // ...
  default:
    color = "bg-gray-200 text-gray-700";
}
```

---

## How I applied it in the dashboard

> Where did you add conditional styling/rendering? What decides which state is shown?

- `StatCard.jsx` — `{sub && <p>...</p>}` is the actual conditional-rendering
  example: the sub-label element itself only exists in output when `sub`
  is truthy.
- `Badge.jsx` — uses a `switch (status.toLowerCase())` to compute a
  `colorClass` string based on real Notis trial statuses (Pending, Active,
  Suspended, Hold, Closed, Terminated), with a gray fallback for
  unrecognized statuses. This is conditional _logic_ driving a prop value,
  not conditional rendering in the strict sense — the `<span>` structure
  is identical every time, only its className string differs.
- Distinction worth remembering: conditional rendering = does an element
  exist in the tree or not / which element renders. Conditional styling =
  same element every time, different attribute value.

---

## Questions / things to revisit

- [ ]

---

## Resources

- Jad Joubran's Complete React Course —
