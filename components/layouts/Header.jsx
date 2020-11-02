import React from "react";
import styled from "@emotion/styled";

import IconMosine from "../ui/icons/IconMosine";
import IconMosineAlt from "../ui/icons/IconMosineAlt";

const HeaderContainer = styled.header`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${(props) =>
    props.whiteColor
      ? "linear-gradient(var(--purple1), var(--purple2))"
      : "var(--white)"};
  div p {
    color: ${(props) => (props.whiteColor ? "var(--white)" : "var(--black)")};
    font-family: "Quicksand", sans-serif;
    font-size: 8px;
    line-height: 10px;
    margin-top: 0;
  }
  a {
    text-decoration: none;
    color: ${(props) => (props.whiteColor ? "var(--white)" : "var(--violet)")};
    font-family: var(--font);
    font-size: 10px;
    line-height: 12px;
    font-weight: 700;
  }
  .user {
    display: flex;
    align-items: center;
  }
`;

const Header = (props) => {
  return (
    <HeaderContainer whiteColor={props.whiteColor}>
      <div>
        {props.whiteColor ? <IconMosine /> : <IconMosineAlt />}
        <p>Codigos QR para pacientes Alzheimer</p>
      </div>
      {props.children}
    </HeaderContainer>
  );
};

export default Header;
