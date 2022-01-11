import { useContext } from "react";
import { FormContext } from "./FormContextProvider";
//custom hook for context consumption using useContext
const useFormContext = () => {
  return useContext(FormContext);
};
export default useFormContext;
