import styled from "@emotion/styled";
import Link from "next/link";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Layout from "../components/layouts/Layout";

import IconUserDefault from "../components/ui/icons/IconUserDefault";

const EditProfileContainer = styled.main`
  width: 100vw;
  font-family: var(--font);
  background-color: var(--purple1);
  .user-information {
    color: var(--white);
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    svg {
      margin-bottom: 10px;
    }
    .user-image {
      background-color: var(--white);
      color: var(--violet);
      cursor: pointer;
      font-size: 8px;
      margin: 0 auto 0;
      min-height: 8px;
      overflow: hidden;
      padding: 4px;
      position: relative;
      display: flex;
      justify-content: center;
      width: 80px;
      border-radius: 20px;
      input {
        border: 10000px solid transparent;
        cursor: pointer;
        font-size: 10000px;
        margin: 0;
        opacity: 0;
        outline: 0 none;
        padding: 0;
        position: absolute;
        right: -1000px;
        top: -1000px;
      }
    }
    h1 {
      font-size: 12px;
    }
    .user-email {
      padding: 0 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      p {
        margin: 8px 0;
        font-size: 12px;
        &:first-of-type {
          font-weight: 700;
        }
      }
    }
  }
  .formulario {
    background-color: var(--white);
    border-radius: 8px 8px 0 0;
    padding: 2.5px 10px;
    h2 {
      font-weight: 700;
      font-size: 18px;
      color: var(--blue);
    }
    form {
      & > div {
        display: flex;
        flex-direction: column;
        label {
          font-size: 12px;
          font-weight: 700;
        }
      }
      .direccion {
        flex-direction: row;
        div:first-of-type {
          margin-right: 5px;
        }
        div input {
          width: 100%;
        }
      }
      button {
        width: 60%;
        margin: 20px auto 10px;
        justify-content: center;
      }
    }
  }
`;

export default function EditProfile() {
  return (
    <Layout>
      <EditProfileContainer>
        <div className="user-information">
          <IconUserDefault width="50px" height="50px" />
          <div className="user-image">
            <input type="file" />
            Sube tu fotografía
          </div>
          <h1>¡Hola Danna Paola!</h1>
          <div className="user-email">
            <p>Correo electrónico</p>
            <p>correo@correo.com</p>
          </div>
        </div>
        <div className="formulario">
          <h2>Datos de emergencia</h2>
          <form>
            <div>
              <label htmlFor="telefono">Telefono de casa</label>
              <Input type="tel" />
            </div>
            <div>
              <label htmlFor="celular">Celular</label>
              <Input type="tel" />
            </div>
            <div className="direccion">
              <div>
                <label htmlFor="estado">Estado</label>
                <Input type="text" />
              </div>
              <div>
                <label htmlFor="municipio">Municipio/Delegación</label>
                <Input type="text" />
              </div>
            </div>
            <div className="direccion">
              <div>
                <label htmlFor="ciudad">Ciudad</label>
                <Input type="text" />
              </div>
              <div>
                <label htmlFor="cp">Codigo postal</label>
                <Input type="number" />
              </div>
            </div>
            <div>
              <label htmlFor="colonia">Colonia</label>
              <Input type="text" />
            </div>
            <div>
              <label htmlFor="calle">Calle y número</label>
              <Input type="text" />
            </div>
            {/* TODO: Saltando funcionalidad */}
            <Link href="/profile">
              <Button
                bgColor="var(--purple1)"
                textColor="#FAFAFA"
                borderColor="var(--purple1)"
                shadow="true"
              >
                Guardar cambios
              </Button>
            </Link>
          </form>
        </div>
      </EditProfileContainer>
    </Layout>
  );
}
