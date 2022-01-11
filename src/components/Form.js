import React from "react";
import useFormContext from "../contexts/useFormContext";
import ChildForm from "./ChildForm";
const Form = () => {
  //get the state and dispatch function from useFormContext. Update the state with the dispatch function
  const { state, dispatch } = useFormContext();
  console.log(state);
  //input will dispatch the value onChange
  return (
    <div>
      <input
        onChange={(e) =>
          dispatch({ type: "setName", payload: { name: e.target.value } })
        }
      />
      <p>Child Component Child Form will have access to global context</p>
      <ChildForm />
    </div>
  );
};

export default Form;
