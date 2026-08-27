import TrialsList from "./TrialsList";
import StatusFilter from "./StatusFilter";
import AddTrialForm from "./AddTrialForm";
import { TRIALS } from "../data/trials";
import { useState } from "react";

const TrialsPage = () => {
  const [trials, setTrials] = useState(TRIALS);
  const [statusFilter, setStatusFilter] = useState("All"); // "All" = no filter applied, escape hatch

  const filteredTrials = trials.filter((trial) => {
    return statusFilter === "All" || trial.status === statusFilter;
  });

  const handleAddTrial = (newTrial) => {
    setTrials((prev) => [...prev, newTrial]);
  };

  return (
    <>
      <StatusFilter
        statusFilter={statusFilter}
        onSetStatusFilter={setStatusFilter}
      />
      <AddTrialForm onAddTrial={handleAddTrial} />
      <TrialsList trials={filteredTrials} />
    </>
  );
};

export default TrialsPage;
