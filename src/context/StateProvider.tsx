import React, { useReducer, createContext } from "react";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const initialState = { user: null };

export type ContextProps = {
  state: {
    user: any;
  };
  dispatch: any;
};

export const StateContext = createContext({} as ContextProps);

const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
