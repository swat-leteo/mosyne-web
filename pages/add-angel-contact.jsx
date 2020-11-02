import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

import Header from "../components/layouts/Header";
import Layout from "../components/layouts/Layout";
import Logout from "../components/layouts/Logout";
import Menu from "../components/layouts/Menu";

import Bullets from "../components/ui/Bullets";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const AddAngelContactContainer = styled.main`
  font-family: var(--font);
  header {
    background-color: var(--gray);
  }
  h1,
  form {
    padding: 10px;
  }
  h1 {
    font-size: 18px;
    color: var(--blue);
    margin: 0;
  }
  form {
    > div {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      label {
        font-weight: 700;
        color: var(--violet);
        font-size: 12px;
      }
    }
    .contact,
    .names,
    .telephone,
    .state,
    .address,
    .buttons {
      flex-direction: row;
    }
    .contact {
      width: 100%;
      justify-content: space-between;
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
      margin-top: 20px;
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

export default function AddAngelContact() {
  const [menu, showMenu] = useState(false);

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <AddAngelContactContainer>
        <Header>
          <Logout />
        </Header>
        <h1>Contactos de emergencia</h1>
        <Bullets bullet="2" />
        <form>
          <div className="contact">
            <label htmlFor="">Soy contacto de emergencia</label>
            <input type="checkbox" />
          </div>
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
            <label htmlFor="">Correo electrónico</label>
            <Input type="email" placeholder="ejemplo@mail.com" />
          </div>
          <div className="telephone">
            <div>
              <label htmlFor="">Teléfono de casa</label>
              <Input type="text" />
            </div>
            <div>
              <label htmlFor="">Teléfono celular</label>
              <Input type="text" />
            </div>
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
            <Link href="/add-angel-diseases">
              <Button
                bgColor="var(--purple1)"
                textColor="#FAFAFA"
                borderColor="var(--purple1)"
                shadow="true"
              >
                Siguiente
              </Button>
            </Link>
          </div>
        </form>
      </AddAngelContactContainer>
    </Layout>
  );
}
