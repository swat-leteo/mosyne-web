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

const AddAngelInfoContainer = styled.main`
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
      textarea {
        margin-top: 5px;
        background-color: var(--gray);
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

export default function AddAngelInfo() {
  const [menu, showMenu] = useState(false);

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <AddAngelInfoContainer>
        <Header>
          <Logout />
        </Header>
        <h1>Agrega a tu angel</h1>
        <Bullets bullet="1" />
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
                Siguiente
              </Button>
            </Link>
          </div>
        </form>
      </AddAngelInfoContainer>
    </Layout>
  );
}
