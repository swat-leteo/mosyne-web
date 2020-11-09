import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import Button from "../ui/Button";
import Image from "../ui/Image";
import ButtonQR from "../ui/ButtonQR";

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

const CardAngel = ({ tab, menu, id }) => {
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
      <ButtonQR id={id} />
      <ul>
        <Link href={`/profile-angel-data/${id}`}>
          <li>Datos personales</li>
        </Link>
        <Link href={`/profile-angel-contacts/${id}`}>
          <li>Contactos de emergencia</li>
        </Link>
        <Link href={`/profile-angel-diseases/${id}`}>
          <li>Padecimientos y síntomas</li>
        </Link>
      </ul>
    </CardAngelContainer>
  );
};

export default CardAngel;
