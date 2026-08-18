# clinical-trial-dashboard

A React-based clinical trial management dashboard built while learning React through Jad Joubran's Complete React Course.
This project is built from scratch as I progress through the course — each feature maps directly to a concept learned.

---

## 🎯 Project Goal

Build a full clinical data dashboard with tables, cards, charts and filtering — relevant to Clinical Operations and Clinical Data Analyst roles.

---

## 🗺️ Learning Roadmap

| Course Topic          | What to Build                        | Status         |
| --------------------- | ------------------------------------ | -------------- |
| Components & JSX      | `StatCard`, `Badge`, `SectionHeader` | ⬜ Not started |
| Props                 | Pass data into StatCard              | ⬜ Not started |
| State                 | Search input, filter buttons         | ⬜ Not started |
| Lists & Keys          | Render trials/patients tables        | ⬜ Not started |
| Conditional Rendering | Color coded badges by status         | ⬜ Not started |
| useEffect             | Simulate data fetching               | ⬜ Not started |
| React Router          | Add real page navigation             | ⬜ Not started |
| Recharts              | Add charts to dashboard              | ⬜ Not started |

> Update status to ✅ Done or 🔄 In Progress as you go.

---

## 📁 Project Structure

```
clinical-trial-dashboard/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Dashboard, Trials, Patients, Sites, Visits, AE
│   ├── data/             # Mock clinical data (JSON)
│   └── App.jsx
├── notes/                # Learning notes by topic
│   ├── 01-components.md
│   ├── 02-props.md
│   ├── 03-state.md
│   ├── 04-lists-keys.md
│   ├── 05-conditional-rendering.md
│   ├── 06-useEffect.md
│   ├── 07-react-router.md
│   └── 08-recharts.md
├── README.md
└── package.json
```

---

## 📊 Pages to Build

- **Dashboard** — stat cards, enrollment chart, AE trend, recent events
- **Trials** — searchable table with enrollment progress bars
- **Patients** — table with visit compliance indicators
- **Sites** — card grid with PI info and enrollment progress
- **Visits** — table with overdue rows highlighted
- **Adverse Events** — severity badges, filter by status/severity

---

## 🛠️ Tech Stack

- React
- React Router
- Tailwind CSS
- Recharts
- Mock JSON data (future: connect to clinical SQL database)

---

## 📝 Notes

Learning notes for each React concept are in the `/notes` folder. Written in my own words as I go through the course.

---

## 🔗 Related Projects

- [clinical-data-portfolio](https://github.com/marykasp/clinical-data-portfolio) — SQL clinical database this dashboard will eventually connect toA
