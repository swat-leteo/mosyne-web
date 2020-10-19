import React from "react";
import Link from "next/link";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

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
    font-family: "Roboto", sans-serif;
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src="/static/img/mosine-logo.png" alt="" />
        <p
          css={css`
            color: var(--white);
            font-family: "Quicksand", sans-serif;
            font-size: 8px;
            line-height: 10px;
          `}
        >
          Codigos QR para pacientes Alzheimer
        </p>
      </div>
      <Link href="/">Iniciar sesion</Link>
    </HeaderContainer>
  );
};

export default Header;
