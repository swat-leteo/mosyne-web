import styled from "@emotion/styled";
import Link from "next/link";
import { useState } from "react";

import Header from "../components/layouts/Header";
import Layout from "../components/layouts/Layout";
import Logout from "../components/layouts/Logout";
import Menu from "../components/layouts/Menu";

import Button from "../components/ui/Button";

const PrivacityContainer = styled.main`
  font-family: var(--font);
  position: relative;
  header {
    background-color: var(--gray);
    margin-bottom: 20px;
  }
  > div {
    padding: 0 10px;
    h1 {
      color: var(--blue);
      font-size: 18px;
      text-align: center;
      margin: 0 0 10px;
    }
    p {
      margin: 0;
      color: var(--black);
      font-size: 12px;
    }
    &:last-of-type {
      width: 100%;
      position: absolute;
      bottom: 10px;
      display: flex;
      button {
        justify-content: center;
        margin: 0;
        &:first-of-type {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default function Privacity() {
  const [menu, showMenu] = useState(false);

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <PrivacityContainer>
        <Header>
          <Logout />
        </Header>
        <div>
          <h1>Aviso de Privacidad</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum
            porta ex. Sed viverra odio a odio posuere, sed iaculis arcu feugiat.
            Cras nec lorem odio. Pellentesque tincidunt urna sit amet orci
            lacinia lobortis. Vivamus ac nibh vel magna tincidunt vehicula id et
            dui. Quisque vitae sem eget lectus posuere suscipit vel sit amet
            tellus. Vivamus porttitor ornare libero vitae sodales. Sed ut
            condimentum eros. Morbi eu metus mollis, gravida lectus et, laoreet
            lacus. Proin tempor tortor non nibh vehicula, ut rutrum felis
            bibendum. Sed aliquam risus ipsum. Donec et rhoncus eros. Duis mi
            quam, commodo quis diam quis, eleifend gravida nibh. Suspendisse
            ultrices justo ut risus tincidunt, id consequat tellus volutpat. Ut
            pellentesque sit amet arcu ac volutpat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <Button
            bgColor="transparent"
            textColor="var(--purple1)"
            borderColor="var(--purple1)"
          >
            Cancelar
          </Button>
          <Button
            bgColor="var(--purple1)"
            textColor="#FAFAFA"
            borderColor="var(--purple1)"
            shadow="true"
          >
            Aceptar
          </Button>
        </div>
      </PrivacityContainer>
    </Layout>
  );
}
