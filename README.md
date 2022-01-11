# Context API setup 
Create Folder Contexts => this will keep all your contexts, you can have as many as you want in react. 

For each Context create a provider file(Provides) and useContext custom hook file(for consumption). 
In Provider file => create a new context using createContext() => wrap it in provider and export with value => put the provider at the top level eg index.js 
In Consumer file => return the context in useContext

Updating state:
Create a reducer.js file=> create initial state object, create reducer with all cases. One separate reducer for each context. 
Import initialstate and reducer in the provider file => wrap it in useReducer hook 
Value = {state, dispatch}
