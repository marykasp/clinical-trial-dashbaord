import { TRIALS } from "../data/trials";

const TrialsList = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Trial ID</th>
          <th>Name</th>
          <th>Phase</th>
          <th>Status</th>
          <th>Disease Team</th>
        </tr>
      </thead>
      <tbody>
        {TRIALS.map((trial) => (
          <tr key={trial.id}>
            <td>{trial.id}</td>
            <td>{trial.name}</td>
            <td>{trial.phase}</td>
            <td>{trial.status}</td>
            <td>{trial.disease}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TrialsList;
