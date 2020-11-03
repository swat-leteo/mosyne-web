import { REGISTRAR_USUARIO } from "../../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case REGISTRAR_USUARIO:
      return {
        ...state,
        usuario: action.payload,
      };

    default:
      return state;
  }
};
export default AuthReducer;
