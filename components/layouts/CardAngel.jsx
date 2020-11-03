import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import Button from "../ui/Button";
import Image from "../ui/Image";

import IconCloud from "../ui/icons/IconCloud";

const CardAngelContainer = styled.div`
  > div {
    margin-top: 10px;
    padding: 0 10px;
    display: flex;
    h1 {
      font-weight: 700;
      font-size: 18px;
      color: var(--black);
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 12px;
      color: var(--black);
    }
  }
  > button {
    margin: 10px 0 0 10px;
    width: ${(props) => (props.menu === true ? "60%" : "45%")};
    justify-content: center;
    align-items: center;
    font-size: 9px;
    padding: 2px;
    border-radius: 2.5px;
    svg {
      margin-right: 5px;
    }
  }
  ul {
    padding: 0 10px;
    list-style: none;
    display: flex;
    li {
      font-size: 10px;
      color: var(--black);
      :nth-of-type(${(props) => props.tab}) {
        margin-right: 10px;
        padding-bottom: 5px;
        border-bottom: 3px solid var(--blue);
      }
      :last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const CardAngel = ({ tab, menu }) => {
  return (
    <CardAngelContainer tab={tab} menu={menu}>
      <div className="info">
        <Image
          src="/static/img/dannapaola.png"
          alt=""
          width="39px"
          height="39px"
        />
        <div>
          <h1>Ernesto Guevara</h1>
          <p>78 años</p>
        </div>
      </div>
      <Button
        bgColor="var(--blue)"
        textColor="#FAFAFA"
        borderColor="var(--blue)"
      >
        <IconCloud /> Descargar codigo QR
      </Button>
      <ul>
        <Link href="/profile-angel-data">
          <li>Datos personales</li>
        </Link>
        <Link href="/profile-angel-contacts">
          <li>Contactos de emergencia</li>
        </Link>
        <Link href="/profile-angel-diseases">
          <li>Padecimientos y síntomas</li>
        </Link>
      </ul>
    </CardAngelContainer>
  );
};

export default CardAngel;
