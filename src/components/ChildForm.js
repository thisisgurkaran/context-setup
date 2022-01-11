import React from "react";
import useFormContext from "../contexts/useFormContext";
const ChildForm = () => {
  //Get the state and render the state.name
  const { state } = useFormContext();
  return <div>My Name is: {state.name}</div>;
};

export default ChildForm;
