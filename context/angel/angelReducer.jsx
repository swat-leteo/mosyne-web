import { AGREGAR_ANGEL_INFO } from "../../types";

const AngelReducer = (state, action) => {
  switch (action.type) {
    case AGREGAR_ANGEL_INFO:
      return {
        ...state,
        angelinfo: action.payload,
      };

    default:
      return state;
  }
};
export default AngelReducer;
