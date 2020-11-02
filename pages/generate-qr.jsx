import styled from "@emotion/styled";
import { useState } from "react";
import Header from "../components/layouts/Header";

import Layout from "../components/layouts/Layout";
import Logout from "../components/layouts/Logout";
import Menu from "../components/layouts/Menu";

import Button from "../components/ui/Button";

const GenerateQRContainer = styled.main`
  height: 100vh;
  font-family: var(--font);
  header {
    background-color: var(--gray);
  }
  h1 {
    margin: 0 10px;
    font-size: 12px;
    color: var(--blue);
    border-bottom: 1px solid var(--blue);
  }
  ol {
    padding: 0 10px 0 30px;

    li {
      color: var(--black);
      font-size: 12px;
      ::marker {
        font-weight: 700;
      }
    }
  }
  .buttons {
    padding: 0 10px;
    display: flex;
    button {
      margin: 0;
      justify-content: center;
      :first-of-type {
        margin-right: 10px;
      }
    }
  }
`;

export default function GenerateQR() {
  const [menu, showMenu] = useState(false);

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <GenerateQRContainer>
        <Header>
          <Logout />
        </Header>
        <h1>Instrucciones</h1>
        <ol>
          <li>
            Imprime con la mejor calidad posible para garantizar la lectura del
            codigo QR.
          </li>
          <li>Recortar por la línea punteada respetando el margen.</li>
          <li>
            Dobla por la mitad y lamina con un plastico grueso para evitar que
            la tinta de la impresión la borre.
          </li>
          <li>
            Perfora la credencial despues de laminar por la marca circular y
            cuelgalo de un cordon en el cuello de tu angel.
          </li>
        </ol>
        <div className="buttons">
          <Button
            bgColor="transparent"
            textColor="var(--purple1)"
            borderColor="var(--purple1)"
          >
            Ir al inicio
          </Button>
          <Button
            bgColor="var(--purple1)"
            textColor="#FAFAFA"
            borderColor="var(--purple1)"
            shadow="true"
          >
            Descargar QR
          </Button>
        </div>
      </GenerateQRContainer>
    </Layout>
  );
}
