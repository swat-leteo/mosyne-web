import React from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import AuthContext from "./authContext";

import clienteAxios from "../../config/Axios";

const AuthState = (props) => {
  const router = useRouter();

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
    const { status } = await clienteAxios.post("/auth/login", usuario);
    if (status === 200) {
      router.push("/register-confirm");
      Swal.fire(
        "¡Inicio de sesión exitoso!",
        "Haz iniciado sesión correctamente.",
        "success"
      );
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

  const logoutUsuario = async () => {
    const { status } = await clienteAxios.post("/auth/logout");
    if (status === 200) {
      router.push("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{ registrarUsuario, loginUsuario, logoutUsuario }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
