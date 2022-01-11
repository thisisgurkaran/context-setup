import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/FormReducer";
export const FormContext = createContext();

function FormContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FormContext.Provider>
  );
}
export default FormContextProvider;
