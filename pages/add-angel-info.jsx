import styled from "@emotion/styled";
import { useContext, useState } from "react";

import Header from "../components/layouts/Header";
import Layout from "../components/layouts/Layout";
import Logout from "../components/layouts/Logout";
import Menu from "../components/layouts/Menu";

import Bullets from "../components/ui/Bullets";
import Input from "../components/ui/Input";
import AngelContext from "../context/angel/angelContext";

const AddAngelContainer = styled.main``;

export default function AddAngel() {
  const { angelinfo } = useContext(AngelContext);
  console.log(angelinfo);

  const [menu, showMenu] = useState(false);

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <AddAngelContainer>
        <Header>
          <Logout />
        </Header>
        <h1>Agrega a tu angel</h1>
        <Bullets />
        <form>
          <div>
            <div>
              <label htmlFor="">Nombre</label>
              <Input type="text" />
            </div>
            <div>
              <label htmlFor="">Apellido</label>
              <Input type="text" />
            </div>
          </div>
          <div>
            <label htmlFor="">Nacionalidad</label>
            <Input type="text" />
          </div>
          <div>
            <label htmlFor="">Fecha de nacimiento</label>
            <Input type="text" />
          </div>
        </form>
      </AddAngelContainer>
    </Layout>
  );
}
