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

import IconPlus from "../components/ui/icons/IconPlus";

const AddAngelDiseasesContainer = styled.main`
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
    .life,
    .detonante,
    .disease {
      div {
        justify-content: center;
        input {
          margin: 0 5px;
          &:first-of-type {
            margin-left: 0;
          }
        }
      }
    }
    .alergias,
    .cirugias,
    .medicamentos {
      div {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          margin-top: 0;
          width: 70%;
        }
      }
    }
    .buttons {
      flex-direction: row;
    }
    .buttons {
      margin-top: 20px;
      button {
        margin: 0;
        justify-content: center;
        font-size: 10px;
        &:first-of-type {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default function AddAngelDiseases() {
  const [menu, showMenu] = useState(false);

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <AddAngelDiseasesContainer>
        <Header>
          <Logout />
        </Header>
        <h1>Enfermedades y Padecimientos</h1>
        <Bullets bullet="3" />
        <form>
          <div>
            <label htmlFor="">Tipo de sangre</label>
            <Input type="text" />
          </div>
          <div className="life">
            <label htmlFor="">¿Vivé solo?</label>
            <div>
              <input type="radio" name="life" value="si" />
              <label for="life">Si</label>
              <input type="radio" name="life" value="no" />
              <label for="life">No</label>
            </div>
          </div>
          <div className="detonante">
            <label htmlFor="">Detonante del Alzheimer</label>
            <div>
              <input type="radio" name="detonante" value="herencia" />
              <label for="detonante">Herencía</label>
              <input type="radio" name="detonante" value="depresion" />
              <label for="detonante">Depresión</label>
              <input type="radio" name="detonante" value="neurologico" />
              <label for="detonante">Neurologico</label>
            </div>
          </div>
          <div className="alergias">
            <label htmlFor="">Alergías</label>
            <div>
              <Input type="text" />
              <IconPlus width="25px" height="25px" />
            </div>
          </div>
          <div className="cirugias">
            <label htmlFor="">Cirugías</label>
            <div>
              <Input type="text" />
              <IconPlus width="25px" height="25px" />
            </div>
          </div>
          <div className="medicamentos">
            <label htmlFor="">Medicamentos</label>
            <div>
              <Input type="text" />
              <IconPlus width="25px" height="25px" />
            </div>
          </div>
          <div className="disease">
            <label htmlFor="">¿Sufré de alguna de estas enfermedades?</label>
            <div>
              <input type="radio" name="disease" value="diabetes" />
              <label for="disease">Diabetes</label>
              <input type="radio" name="disease" value="hipertension" />
              <label for="disease">Hipertensión</label>
            </div>
          </div>
          <div>
            <label htmlFor="">Reacciones ante medicamentos</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Describe reacciones ante medicamentos"
            ></textarea>
          </div>
          <div>
            <label htmlFor="">Dolencias</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Describe dolencias recientes"
            ></textarea>
          </div>
          <div className="buttons">
            <Button
              bgColor="transparent"
              textColor="var(--purple1)"
              borderColor="var(--purple1)"
            >
              Regresar
            </Button>
            <Link href="/generate-qr">
              <Button
                bgColor="var(--purple1)"
                textColor="#FAFAFA"
                borderColor="var(--purple1)"
                shadow="true"
              >
                Guardar y generar QR
              </Button>
            </Link>
          </div>
        </form>
      </AddAngelDiseasesContainer>
    </Layout>
  );
}
