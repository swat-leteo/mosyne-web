import React from "react";
import styled from "@emotion/styled";

import IconProfile from "../ui/icons/IconProfile";
import IconAngel from "../ui/icons/IconAngel";
import IconConfig from "../ui/icons/IconConfig";
import IconMenuLeft from "../ui/icons/IconMenuLeft";
import IconMenuRight from "../ui/icons/IconMenuRight";

const MenuContainer = styled.nav`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #6f44e0 0%, #5635ad 100%);
  font-family: var(--font);
  padding-top: 44px;
  position: relative;
  ul {
    transition: all 0.3s ease;
    display: ${(props) => (props.menu === true ? "block" : "none")};
    padding: 0;
    list-style: none;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        color: var(--white);
        font-size: 10px;
      }
      hr {
        width: 50%;
        margin-bottom: 10px;
      }
    }
  }
  > svg {
    position: absolute;
    top: 50vh;
    right: -7.5px;
  }
`;

const Menu = ({ menu, showMenu }) => {
  return (
    <MenuContainer menu={menu}>
      <ul>
        <li>
          <IconProfile />
          <p>Mi perfil</p>
          <hr />
        </li>
        <li>
          <IconAngel />
          <p>Mi angel</p>
          <hr />
        </li>
        <li>
          <IconConfig />
          <p>Configuración</p>
        </li>
      </ul>
      {menu === true ? (
        <IconMenuLeft onClick={() => showMenu(false)} />
      ) : (
        <IconMenuRight onClick={() => showMenu(true)} />
      )}
    </MenuContainer>
  );
};

export default Menu;
