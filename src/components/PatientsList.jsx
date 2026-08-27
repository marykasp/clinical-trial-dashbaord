import Badge from "./Badge";

const headerCellStyle = `px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-400`;

const PatientsList = ({ patients }) => {
  return (
    <div className="overflow-hidden round-1x border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className={headerCellStyle}>ID</th>
            <th className={headerCellStyle}>Patient Name</th>
            <th className={headerCellStyle}>Trial</th>
            <th className={headerCellStyle}>Site</th>
            <th className={headerCellStyle}>Status</th>
            <th className={headerCellStyle}>Enroll Date</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
              className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
            >
              <td className="px-4 py-3 font-mono text-xs text-gray-500">
                {patient.id}
              </td>
              <td className="px-4 py-3 font-semibold text-xs text-gray-500">
                {patient.name}
              </td>
              <td className="px-4 py-3 text-gray-500">{patient.trial}</td>
              <td className="px-4 py-3 text-gray-500">{patient.site}</td>
              <td className="px-4 py-3 text-gray-500">
                <Badge status={patient.status} />
              </td>
              <td className="px-4 py-3 text-gray-500">{patient.enrollDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsList;
