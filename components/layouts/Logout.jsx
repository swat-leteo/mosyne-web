import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import Image from "../ui/Image";

const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logout = () => {
  return (
    <LogoutContainer>
      <Image
        src="/static/img/dannapaola.png"
        alt=""
        width="18px"
        height="18px"
      />
      <Link href="/">Cerrar sesión</Link>
    </LogoutContainer>
  );
};

export default Logout;
