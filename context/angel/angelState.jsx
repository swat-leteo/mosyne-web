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

  const agregarAngelInfo = (angelinfo) => {
    dispatch({
      type: AGREGAR_ANGEL_INFO,
      payload: angelinfo,
    });
  };

  return (
    <AngelContext.Provider
      value={{ angelinfo: state.angelinfo, agregarAngelInfo }}
    >
      {props.children}
    </AngelContext.Provider>
  );
};

export default AngelState;
