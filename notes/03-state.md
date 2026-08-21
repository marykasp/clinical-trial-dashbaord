# 03 — State

**Course topic:** State
**Date started:**
**Status:** ⬜ Not started

---

## What to build with this concept

- Search input (e.g. filter the Trials or Patients table by name/id)
- Filter buttons (e.g. filter Adverse Events by status/severity)

---

## Key concepts (in my own words)

> What is `useState`? Why can't you just mutate a variable directly and expect a re-render? What triggers a re-render?

State updates trigger a re-render of the component. React will not re-render the component if variables or props are mutated (which you should never mutate).

---

## Code examples

```jsx
// Buttons to filter through status of trials
// now use filtered list of trials to display in table
{
  STATUS.map((status) => (
    <button
      key={status}
      onClick={() => handleStatusFilter(status)}
      className="mr-2 px-3 py-1 rounded-lg border border-gray-200 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50"
    >
      {status}
    </button>
  ));
}

// filtered trials: have to have an escape hatch since no status is All, clicking this button will list all the trials since that conditioned is met for all
const filteredTrials = TRIALS.filter((trial) => {
  return statusFilter === "All" || trial.status === statusFilter;
});
```

---

## How I applied it in the dashboard

> Which page(s) got interactive filtering/search? What state variables did you add, and what updates them?

Wired real interactivity into TrialsList: statusFilter state (default "All") drives a .filter() call on TRIALS before mapping, and a row of buttons (one per status, generated from a STATUS array) call setStatusFilter via a named handleStatusFilter function on click. Learned that passing an argument to a handler requires wrapping it in an arrow function (onClick={() => handleStatusFilter(status)}) — passing the named function directly (onClick={handleStatusFilter}) would call it with the click event instead of the value I actually need.

---

## What I Learned:

**Pattern to remember**: the `OR` escape hatch. sentinelValue === "no filter" || item.field === sentinelValue. The sentinel (e.g. "All") always goes first in the || — because of short-circuit evaluation, when it matches, the real comparison never even runs, so everything passes. Reused this same shape for both status filtering and (later) search filtering.

### Batched State Updates

Batched state updates. Multiple setState calls in the same event handler don't each trigger their own re-render — React batches them into one. Bigger gotcha: setCount(count + 1) called twice in one handler only increments by 1 total, not 2, because count is a value frozen by closure at the start of that render — both calls use the same stale snapshot. Fix: functional updates, setCount(prev => prev + 1), **where each call receives the actual pending value instead of the frozen one**. Tested this directly with a scratch counter demo (not committed — TrialsList doesn't currently have a case that needs this, since handleStatusFilter only calls its setter once per click).

## Questions / things to revisit

- [ ]

---

## Resources

- Jad Joubran's Complete React Course —
