import React, { useReducer } from "react";
import AngelContext from "./angelContext";
import AngelReducer from "./angelReducer";

import {
  AGREGAR_ANGEL_INFO,
  AGREGAR_ANGEL_CONTACT,
  AGREGAR_ANGEL_DISEASES,
  AGREGAR_ANGEL,
} from "../../types";

const AngelState = (props) => {
  const initialState = {
    angelinfo: {},
    contacts: {},
  };

  const [state, dispatch] = useReducer(AngelReducer, initialState);

  return (
    <AngelContext.Provider value={{ angelinfo: state.angelinfo }}>
      {props.children}
    </AngelContext.Provider>
  );
};

export default AngelState;
