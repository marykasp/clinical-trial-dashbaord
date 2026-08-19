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

```

---

## How I applied it in the dashboard

> What does your mock data shape look like? Which component maps over it, and what key did you use?
> Built TrialsList (src/components/TrialsList.jsx) mapping over a TRIALS array (src/data/trials.js) into table rows, with key={trial.id}. Learned the hard way that <th> vs <td> matters — <th> in a body row isn't just semantically wrong, it visibly changes default styling (bold, centered) since browsers style them differently out of the box. Also hit the classic missing-key case: React needs a stable, unique key per mapped element to track rows correctly, especially once this list becomes filterable.

---

## Questions / things to revisit

- [ ]

---

## Resources

- Jad Joubran's Complete React Course —
