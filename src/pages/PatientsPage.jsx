import { useState } from "react";
import { PATIENTS } from "../data/patients";
import PatientsList from "../components/PatientsList";

const PatientsPage = () => {
  const [patients, setPatients] = useState(PATIENTS);

  return (
    <>
      <PatientsList patients={patients} />
    </>
  );
};

export default PatientsPage;
