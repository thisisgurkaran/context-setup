import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/FormReducer";
export const FormContext = createContext();

function FormContextProvider(props) {
  //useReducer is for state updates.
  const [state, dispatch] = useReducer(reducer, initialState);
  //create a provider and wrap the topmost component from where to share the context
  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FormContext.Provider>
  );
}
export default FormContextProvider;
