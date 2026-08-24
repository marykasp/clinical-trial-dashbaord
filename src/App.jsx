// import Dashboard from "./pages/Dashboard";
import StatCard from "./components/StatCard";
import Badge from "./components/Badge";
import SectionHeader from "./components/SectionHeader";
import TrialsPage from "./components/TrialsPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-semibold text-gray-900">
        Clinical Trial Dashboard
      </h1>
      <p className="mt-1 text-sm text-gray-900">
        Trying out different components built for clinical trial dashboard
      </p>

      {/* Trial Stat Cards */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Active Trials" value={5} sub="6 total" />
        <StatCard label="Patients Enrolled" value={492} sub="of 800 target" />
        <StatCard label="Open Adverse Events" value={3} />
        <StatCard label="Overdue Visits" value={1} sub="Past Scheduled Date" />
      </div>

      {/* Status Badge component */}
      <div className="mt-2 flex gap-2">
        <Badge status="Pending" />
        <Badge status="Active" />
        <Badge status="Suspended" />
        <Badge status="Hold" />
        <Badge status="Closed" />
        <Badge status="Terminated" />
      </div>

      {/* Trial List */}
      <SectionHeader title="Trials" />
      <TrialsPage />
    </div>
  );
}

export default App;
