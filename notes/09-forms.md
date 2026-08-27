# 09 — Forms

**Course topic:** Forms
**Date started:** 08.27.2026
**Status:** 🔄 In Progress

---

## What to build with this concept

- "Add Trial" form — onSubmit + FormData to create a new trial and append it to the trials list
- "Add Patient" form — same pattern on the Patients page, as repetition
- (Stretch) Edit an existing trial's fields via a pre-filled form

---

## Key concepts (in my own words)

> What's the difference between a controlled and uncontrolled input? Why does `onSubmit` need `event.preventDefault()`? What does `FormData` actually do, and why read values by `name` attribute instead of grabbing each input directly?

---

## Code examples

```jsx
// paste small snippets here as you write them, with a one-line note
// on what each one demonstrates
```

---

## How I applied it in the dashboard

Factual log (fill in your own explanation above):

- Built `AddTrialForm` (`src/components/AddTrialForm.jsx`) — uncontrolled inputs (no `useState` per field), reads all five field values via `new FormData(event.target)` on submit, keyed by each input's `name` attribute
- `TrialsPage.handleAddTrial` receives the new trial object and appends it via `setTrials((prev) => [...prev, newTrial])` — functional update + spread (immutability), passed down to the form as an `onAddTrial` prop
- Changed `status` and `phase` from free-text inputs to `<select>` dropdowns with fixed, correctly-formatted `value`s (e.g. `"Active"`, `"Phase III"`) — decided this at the source rather than transforming/capitalizing text after the fact, since both fields have a known, fixed set of valid values
- Reset the form via `event.target.reset()` (native DOM method) after a successful submit, since the inputs are uncontrolled — there's no React state to reset back to a default

**Bugs hit along the way:**

- `htmlFor` on a label only connects to an input's `id` attribute, not its `name` — needed both attributes present, not just `name` (which `FormData` needs) alone

---

## Questions / things to revisit

- [ ]

---

## Resources

- Jad Joubran's Complete React Course —
