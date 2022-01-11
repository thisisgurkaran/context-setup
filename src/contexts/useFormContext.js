import { useContext } from "react";
import { FormContext } from "./FormContextProvider";
const useFormContext = () => {
  return useContext(FormContext);
};

export default useFormContext;
