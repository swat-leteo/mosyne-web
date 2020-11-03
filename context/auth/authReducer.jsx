import { LOGIN_USUARIO } from "../../types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USUARIO:
      return {
        ...state,
        usuario: action.payload,
      };

    default:
      return state;
  }
};
export default AuthReducer;
