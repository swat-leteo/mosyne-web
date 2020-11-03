import React, { useReducer } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import clienteAxios from "../../config/Axios";

const AuthState = (props) => {
  const router = useRouter();

  const initialState = {
    usuario: {},
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registrarUsuario = async (usuario) => {
    const { status } = await clienteAxios.post("/auth/signup", usuario);
    if (status === 201) {
      router.push("/");
      Swal.fire(
        "¡Registro exitoso!",
        "Verifica tu email para poder loguearte.",
        "success"
      );
    }
    if (status == 409) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Este correo ya está registrado",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ usuario: state.usuario, registrarUsuario }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
