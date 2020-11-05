import React, { useReducer } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import UserContext from "./userContext";
import UserReducer from "./userReducer";

import clienteAxios from "../../config/Axios";
import { GUARDAR_USUARIO, EDITAR_PERFIL_GUARDIAN } from "../../types";

const UserState = (props) => {
  const initialState = {
    usuario: {},
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const obtenerUsuario = () => {
    dispatch({
      type: GUARDAR_USUARIO,
      payload: JSON.parse(localStorage.getItem("usuario")),
    });
  };

  const editarPerfil = async (usuario) => {
    const { status } = await clienteAxios.put("/users", usuario);
    if (status === 201) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
      dispatch({
        type: EDITAR_PERFIL_GUARDIAN,
        payload: usuario,
      });
      router.push("/profile");
      Swal.fire(
        "¡Perfil actualizado!",
        "Tu perfil ha sido actualizado.",
        "success"
      );
    }
    if (status === 409) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Hubo un error.",
      });
    }
  };

  return (
    <UserContext.Provider
      value={{ usuario: state.usuario, obtenerUsuario, editarPerfil }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
