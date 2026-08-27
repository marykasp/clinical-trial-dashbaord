import TrialsList from "./TrialsList";
import StatusFilter from "./StatusFilter";
import { TRIALS } from "../data/trials";
import { useState } from "react";

const TrialsPage = () => {
  const [trials, setTrials] = useState(TRIALS);
  const [statusFilter, setStatusFilter] = useState("All"); // "All" = no filter applied, escape hatch

  const filteredTrials = trials.filter((trial) => {
    return statusFilter === "All" || trial.status === statusFilter;
  });

  return (
    <>
      <StatusFilter
        statusFilter={statusFilter}
        onSetStatusFilter={setStatusFilter}
      />
      <TrialsList trials={filteredTrials} />
    </>
  );
};

export default TrialsPage;
