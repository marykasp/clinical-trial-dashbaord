import { TRIALS } from "../data/trials";
import { useState } from "react";
import Badge from "./Badge";

const headerCellStyle = `px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400`;
const STATUS = [
  "All",
  "Active",
  "Pending",
  "Suspended",
  "Hold",
  "Closed",
  "Terminated",
];

const TrialsList = () => {
  const [statusFilter, setStatusFilter] = useState("All"); // "All" = no filter applied, escape hatch

  const filteredTrials = TRIALS.filter((trial) => {
    return statusFilter === "All" || trial.status === statusFilter;
  });

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };

  return (
    <>
      <div className="mb-2">
        {STATUS.map((status) => (
          <button
            key={status}
            onClick={() => handleStatusFilter(status)}
            className={`${status === statusFilter ? `bg-gray-700 text-white` : `text-gray-600 border border-gray-200 hover:bg-gray-50`} mr-2 px-3 py-1 rounded-lg text-xs font-medium transition-colors`}
          >
            {status}
          </button>
        ))}
      </div>
      <div className="overflow-hidden round-x1 border border-gray-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className={headerCellStyle}>Trial ID</th>
              <th className={headerCellStyle}>Name</th>
              <th className={headerCellStyle}>Phase</th>
              <th className={headerCellStyle}>Status</th>
              <th className={headerCellStyle}>Disease Team</th>
            </tr>
          </thead>
          <tbody>
            {filteredTrials.map((trial) => (
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
                <td className="px-4 py-3 text-gray-600">
                  <Badge status={trial.status} />
                </td>
                <td className="px-4 py-3 text-gray-600">{trial.disease}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TrialsList;
