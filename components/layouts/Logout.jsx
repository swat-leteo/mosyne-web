import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";

import Image from "../ui/Image";

import IconUserDefault from "../ui/icons/IconUserDefault";

import AuthContext from "../../context/auth/authContext";
import UserContext from "../../context/user/userContext";

const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    cursor: pointer;
    margin: 0;
    font-family: var(--font);
    color: var(--violet);
    font-size: 10px;
    font-weight: 700;
  }
`;

const Logout = () => {
  const { logoutUsuario } = useContext(AuthContext);
  const { usuario, obtenerUsuario } = useContext(UserContext);

  const { photo } = usuario;

  useEffect(() => {
    if (Object.keys(usuario).length === 0) {
      obtenerUsuario();
    }
  }, [usuario]);
  return (
    <LogoutContainer>
      {photo === "" ? (
        <IconUserDefault fill="#000000" width="18px" height="18px" />
      ) : (
        <Image src={photo} width="18px" height="18px" />
      )}
      <p onClick={() => logoutUsuario()}>Cerrar sesión</p>
    </LogoutContainer>
  );
};

export default Logout;
