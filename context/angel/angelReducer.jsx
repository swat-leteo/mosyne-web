import {
  AGREGAR_ANGEL_INFO,
  AGREGAR_ANGEL_CONTACT,
  AGREGAR_ANGEL_DISEASES,
  AGREGAR_ANGEL,
} from "../../types";

const AngelReducer = (state, action) => {
  switch (action.type) {
    case AGREGAR_ANGEL_INFO:
      return {
        ...state,
        angelinfo: action.payload,
      };
    case AGREGAR_ANGEL_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};
export default AngelReducer;
