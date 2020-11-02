import React, { useReducer } from "react";
import AngelContext from "./angelContext";
import AngelReducer from "./angelReducer";

const AngelState = (props) => {
  const initialState = {
    angelinfo: "hola",
  };

  const [state, dispatch] = useReducer(AngelReducer, initialState);

  return (
    <AngelContext.Provider value={{ angelinfo: state.angelinfo }}>
      {props.children}
    </AngelContext.Provider>
  );
};

export default AngelState;
