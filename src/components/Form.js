import React from "react";
import useFormContext from "../contexts/useFormContext";
import ChildForm from "./ChildForm";
const Form = () => {
  const { state, dispatch } = useFormContext();
  console.log(state);
  return (
    <div>
      <input
        onChange={(e) =>
          dispatch({ type: "setName", payload: { name: e.target.value } })
        }
      />
      <ChildForm />
    </div>
  );
};

export default Form;
