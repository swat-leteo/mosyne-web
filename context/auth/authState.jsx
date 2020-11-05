import React, { useReducer } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import clienteAxios from "../../config/Axios";
import { LOGIN_USUARIO } from "../../types";

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
    if (status === 409) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Este correo ya está registrado.",
      });
    }
  };

  const loginUsuario = async (usuario) => {
    const { status, data } = await clienteAxios.post("/auth/login", usuario);
    if (status === 200) {
      dispatch({
        type: LOGIN_USUARIO,
        payload: data,
      });
      localStorage.setItem("usuario", JSON.stringify(data));
      window.location.href = "/register-confirm";
    }
    if (status === 401) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Correo o contraseña incorrecta.",
      });
    }

    if (status === 412) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "No haz verificado tu correo.",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{ usuario: state.usuario, registrarUsuario, loginUsuario }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
