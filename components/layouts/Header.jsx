import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

import IconMosine from "../ui/IconMosine";

const HeaderContainer = styled.header`
  width: 100vw;
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(var(--purple1), var(--purple2));
  a {
    text-decoration: none;
    color: var(--white);
    font-family: var(--font);
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <IconMosine />
        <p
          css={css`
            color: var(--white);
            font-family: "Quicksand", sans-serif;
            font-size: 8px;
            line-height: 10px;
            margin-top: 0;
          `}
        >
          Codigos QR para pacientes Alzheimer
        </p>
      </div>
      <Link href="/info">Iniciar sesion</Link>
    </HeaderContainer>
  );
};

export default Header;
