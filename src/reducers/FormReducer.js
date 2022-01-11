export const initialState = {
  name: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
}
