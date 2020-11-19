import styled from "@emotion/styled";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import Header from "../../components/layouts/Header";
import Layout from "../../components/layouts/Layout";
import Logout from "../../components/layouts/Logout";
import Menu from "../../components/layouts/Menu";
import CardAngel from "../../components/layouts/CardAngel";

import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

import AngelContext from "../../context/angel/angelContext";

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
    .address {
      flex-direction: ${(props) => (props.menu === true ? "column" : "row")};
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
      flex-direction: row;
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

  const { obtenerAngel, angelinfo } = useContext(AngelContext);

  const router = useRouter();

  const {
    query: { id },
  } = router;

  useEffect(() => {
    obtenerAngel(id);
  }, []);

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <ProfileAngelDataContainer menu={menu}>
        <Header>
          <Logout />
        </Header>
        <CardAngel tab="1" menu={menu} id={id} />
        <form>
          <div className="names">
            <div>
              <label htmlFor="">Nombre</label>
              <Input
                type="text"
                placeholder="Mínimo 2 caracteres"
                value={angelinfo.firstname}
              />
            </div>
            <div>
              <label htmlFor="">Apellido</label>
              <Input
                type="text"
                placeholder="Mínimo 3 caracteres"
                value={angelinfo.lastname}
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Nacionalidad</label>
            <Input
              type="text"
              placeholder="País de procedencia"
              value={angelinfo.nationality}
            />
          </div>
          <div>
            <label htmlFor="">Sobre tu angel</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Escribe sus gustos, miedo, personalidad, etc."
              value={angelinfo.about}
            ></textarea>
          </div>
          <div className="state">
            <div>
              <label htmlFor="">Estado</label>
              <Input type="text" value={angelinfo.address.city} />
            </div>
            <div>
              <label htmlFor="">Municipio/Delegación</label>
              <Input type="text" value={angelinfo.address.municipality} />
            </div>
          </div>
          <div className="address">
            <div>
              <label htmlFor="">Colonia</label>
              <Input type="text" value={angelinfo.address.neighborhood} />
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
            <Button
              bgColor="var(--purple1)"
              textColor="#FAFAFA"
              borderColor="var(--purple1)"
              shadow="true"
            >
              Guardar
            </Button>
          </div>
        </form>
      </ProfileAngelDataContainer>
    </Layout>
  );
}
