import React, { useContext } from "react";
import styled from "@emotion/styled";

import Image from "../ui/Image";

import IconUserDefault from "../ui/icons/IconUserDefault";

import AuthContext from "../../context/auth/authContext";

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

const Logout = ({ photo }) => {
  const { logoutUsuario } = useContext(AuthContext);

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
