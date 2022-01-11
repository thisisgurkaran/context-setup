import React from "react";
import useFormContext from "../contexts/useFormContext";
const ChildForm = () => {
  const { state } = useFormContext();
  return <div>{state.name}</div>;
};

export default ChildForm;
