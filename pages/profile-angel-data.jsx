import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

import Header from "../components/layouts/Header";
import Layout from "../components/layouts/Layout";
import Logout from "../components/layouts/Logout";
import Menu from "../components/layouts/Menu";
import CardAngel from "../components/layouts/CardAngel";

import Button from "../components/ui/Button";
import Image from "../components/ui/Image";
import Input from "../components/ui/Input";

import IconCloud from "../components/ui/icons/IconCloud";

const ProfileAngelDataContainer = styled.section`
  font-family: var(--font);
  header {
    background-color: var(--gray);
  }
  form {
    padding: 0 10px;
    background-color: var(--gray);
    > div {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      label {
        font-weight: 700;
        color: var(--violet);
        font-size: 12px;
      }
      input {
        background-color: var(--white);
      }
      textarea {
        margin-top: 5px;
        background-color: var(--white);
        border-color: var(--gray);
      }
    }
    .names,
    .state,
    .address,
    .buttons {
      flex-direction: row;
    }
    .names div:first-of-type {
      margin-right: 20px;
    }
    .state {
      width: 100%;
      justify-content: space-between;
      div {
        margin-right: 20px;
        &:last-of-type {
          margin-right: 0;
        }
      }
    }
    .buttons {
      margin: 20px 0;
      button {
        margin: 0;
        justify-content: center;
        &:first-of-type {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default function ProfileAngelData() {
  const [menu, showMenu] = useState(false);
  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <ProfileAngelDataContainer>
        <Header>
          <Logout />
        </Header>
        <CardAngel tab="1" />
        <form>
          <div className="names">
            <div>
              <label htmlFor="">Nombre</label>
              <Input type="text" placeholder="Mínimo 2 caracteres" />
            </div>
            <div>
              <label htmlFor="">Apellido</label>
              <Input type="text" placeholder="Mínimo 3 caracteres" />
            </div>
          </div>
          <div>
            <label htmlFor="">Nacionalidad</label>
            <Input type="text" placeholder="País de procedencia" />
          </div>
          <div>
            <label htmlFor="">Fecha de nacimiento</label>
            <Input type="date" />
          </div>
          <div>
            <label htmlFor="">Sobre tu angel</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Escribe sus gustos, miedo, personalidad, etc."
            ></textarea>
          </div>
          <div className="state">
            <div>
              <label htmlFor="">Estado</label>
              <Input type="text" />
            </div>
            <div>
              <label htmlFor="">Municipio/Delegación</label>
              <Input type="text" />
            </div>
          </div>
          <div className="address">
            <div>
              <label htmlFor="">Colonia</label>
              <Input type="text" />
            </div>
            <div>
              <label htmlFor="">CP</label>
              <Input type="text" />
            </div>
          </div>
          <div>
            <label htmlFor="">Calle y número</label>
            <Input type="text" />
          </div>
          <div className="buttons">
            <Button
              bgColor="transparent"
              textColor="var(--purple1)"
              borderColor="var(--purple1)"
            >
              Regresar
            </Button>
            <Link href="/add-angel-contact">
              <Button
                bgColor="var(--purple1)"
                textColor="#FAFAFA"
                borderColor="var(--purple1)"
                shadow="true"
              >
                Guardar
              </Button>
            </Link>
          </div>
        </form>
      </ProfileAngelDataContainer>
    </Layout>
  );
}
