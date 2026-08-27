import { useState } from "react";
import { PATIENTS } from "../data/patients";
import PatientsList from "../components/PatientsList";
import StatusFilter from "../components/StatusFilter";

const PATIENT_STATUS = [
  "All",
  "Registered",
  "Screen Fail",
  "On Study",
  "Off Study",
];

const PatientsPage = () => {
  const [patients, setPatients] = useState(PATIENTS);
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredPatients = patients.filter(
    (patient) => statusFilter === "All" || patient.status === statusFilter,
  );

  return (
    <>
      <StatusFilter
        statusFilter={statusFilter}
        onSetStatusFilter={setStatusFilter}
        options={PATIENT_STATUS}
      />
      <PatientsList patients={filteredPatients} />
    </>
  );
};

export default PatientsPage;
