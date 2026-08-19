// import Dashboard from "./pages/Dashboard";
import StatCard from "./components/StatCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-semibold text-gray-900">
        Clinical Trial Dashboard
      </h1>
      <p className="mt-1 text-sm text-gray-900">
        Trying out StatCard with a few different props
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Active Trials" value={5} sub="6 total" />
        <StatCard label="Patients Enrolled" value={492} sub="of 800 target" />
        <StatCard label="Open Adverse Events" value={3} />
        <StatCard label="Overdue Visits" value={1} sub="Past Scheduled Date" />
      </div>
    </div>
  );
}

export default App;
