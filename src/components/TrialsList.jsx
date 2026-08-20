import { TRIALS } from "../data/trials";
import Badge from "./Badge";

const TrialsList = () => {
  const headerCellStyle = `px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400`;

  return (
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
              <td className="px-4 py-3 text-gray-600">
                <Badge status={trial.status} />
              </td>
              <td className="px-4 py-3 text-gray-600">{trial.disease}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrialsList;
