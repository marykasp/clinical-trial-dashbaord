# 04 — Lists & Keys

**Course topic:** Lists & Keys
**Date started:**
**Status:** ⬜ Not started

---

## What to build with this concept

- Render the Trials table by mapping over mock trial data
- Render the Patients table the same way
- Start populating `src/data/` with mock JSON for trials/patients

---

## Key concepts (in my own words)

> Why does React need a `key` prop when rendering lists? What makes a good key (vs. using array index)? What goes wrong if keys are missing or unstable?

React needs a key prop in order to know which element is being updated in the list so it doesn't have to re-render each one. A good key needs to be unique and not repeated in that file.

Without a `key`, React falls back to matching elements by their position in the array (index 0 matches index 0 next render, index 1 matches index 1, and so on) rather than by identity. That works fine as long as the list never changes order or size — but it breaks in specific, sometimes subtle ways once it does:

**Wrong data ends up in the wrong DOM node.** Say you filter your `TrialsList` and a trial in the middle gets removed. Without keys, React doesn't know "AURORA-1's row disappeared" — it just sees "the array at index 2 is now different," and re-uses the existing DOM row at position 2, patching in the new data. Any state tied to that row (an open dropdown, focus in an input, scroll position) can end up attached to the wrong trial, because the DOM node stuck around but the data underneath it shifted.

**Component state can leak between items.** This is the classic gotcha: if a row ever contains something stateful (imagine later adding an "expand for details" toggle per trial row), reordering the list can make trial B's row suddenly show as "expanded" because it inherited the DOM node — and the state — that used to belong to trial A at that position.

**Performance degrades.** React uses keys to figure out the minimal set of DOM changes needed (add this row, remove that one, leave the rest alone). Without stable keys, it's more likely to tear down and rebuild rows unnecessarily instead of just moving/reusing them, since it can't confidently tell "this is the same item that moved" from "this is a different item now in this slot."

**Using array index as the key** technically silences the React warning, but doesn't actually fix any of the above — the index _is_ the position, so it's exactly as unstable as having no key at all whenever the list is reordered, filtered, or has items inserted/removed from the middle. It only becomes safe if the list is static and never reorders (e.g. a hardcoded, never-changing list) — not the case for `TRIALS`, which you're about to start filtering.

That's exactly why `trial.id` was the right choice in `TrialsList` — it's tied to the actual trial, not its position, so it stays correct no matter how the array gets sorted, filtered, or reordered later when you wire up search/status filtering.

---

## Code examples

```jsx
          {TRIALS.map((trial) => (
            <tr
              key={trial.id}
              className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
            >
              <td className="px-4 py-3 font-mono text-xs text-gray-500">
                {trial.id}
              </td>
              <td className="px-4 py-3 font-semibold text-gray-900">
                {trial.name}
              </td>
              <td className="px-4 py-3 text-gray-600">{trial.phase}</td>
              <td className="px-4 py-3 text-gray-600">{trial.status}</td>
              <td className="px-4 py-3 text-gray-600">{trial.disease}</td>
            </tr>



<td className="px-4 py-3 text-gray-600"><Badge status={trial.status} /></td>


```

---

## How I applied it in the dashboard

> What does your mock data shape look like? Which component maps over it, and what key did you use?
> Built TrialsList (src/components/TrialsList.jsx) mapping over a TRIALS array (src/data/trials.js) into table rows, with key={trial.id}. Learned the hard way that <th> vs <td> matters — <th> in a body row isn't just semantically wrong, it visibly changes default styling (bold, centered) since browsers style them differently out of the box. Also hit the classic missing-key case: React needs a stable, unique key per mapped element to track rows correctly, especially once this list becomes filterable.

Reused Badge inside TrialsList's mapped rows (<Badge status={trial.status} />) instead of rendering status as plain text. Confirms components compose cleanly inside a .map() — Badge needed zero changes to work inside a table cell, since it's self-contained (own padding/shape/color). Also hit a real Tailwind gotcha: a typo'd class name (roundex-x1 instead of rounded-xl) fails silently — no error, class just doesn't exist, so the corners stayed square with no indication why.

---

## Questions / things to revisit

- [ ]

---

## Resources

- Jad Joubran's Complete React Course —
