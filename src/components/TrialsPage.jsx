import TrialsList from "./TrialsList";
import StatusFilter from "./statusFilter";
import { TRIALS } from "../data/trials";
import { useState } from "react";

const TrialsPage = () => {
  const [statusFilter, setStatusFilter] = useState("All"); // "All" = no filter applied, escape hatch

  const filteredTrials = TRIALS.filter((trial) => {
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
