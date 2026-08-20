# 02 — Props

**Course topic:** Props
**Date started:**
**Status:** ⬜ Not started

---

## What to build with this concept

- Pass real data into `StatCard` (label, value, maybe a trend/delta)
- Make `Badge` and `SectionHeader` accept props instead of hardcoded text

---

## Key concepts (in my own words)

> How does data flow from parent to child? Why are props read-only? What's prop destructuring, and default props?

---

## Code examples

```jsx
// simple header component that can reuse across app to label sections
// accepts one single prop the title to display
const SectionHeader = ({ title }) => {
  return (
    <h2 className="mb-3 text-s font-semibold uppercase tracking-wide text-gray-400">
      {title}
    </h2>
  );
};

export default SectionHeader;
```

---

## How I applied it in the dashboard

> Which components now take props? What data are you passing in (mock values for now)?
> Built SectionHeader (src/components/SectionHeader.jsx) — single title prop, no conditional logic or state. Deliberately kept minimal as a contrast to Badge/StatCard: not every component needs branching logic or multiple props to be useful. Styled to match the existing uppercase-label pattern already used for TrialsList's table headers, reinforcing visual consistency across components built at different times.

---

## Questions / things to revisit

- [ ]

---

## Resources

- Jad Joubran's Complete React Course —
