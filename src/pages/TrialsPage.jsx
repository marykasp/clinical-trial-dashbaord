import TrialsList from "../components/TrialsList";
import StatusFilter from "../components/statusFilter";
import AddTrialForm from "../components/AddTrialForm";
import { TRIALS } from "../data/trials";
import { useState } from "react";

const STATUS = [
  "All",
  "Active",
  "Pending",
  "Suspended",
  "Hold",
  "Closed",
  "Terminated",
];

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
        options={STATUS}
      />
      <AddTrialForm onAddTrial={handleAddTrial} />
      <TrialsList trials={filteredTrials} />
    </>
  );
};

export default TrialsPage;
