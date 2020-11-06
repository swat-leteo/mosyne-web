import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import Image from "../components/ui/Image";

import Layout from "../components/layouts/Layout";
import Header from "../components/layouts/Header";
import Menu from "../components/layouts/Menu";
import Logout from "../components/layouts/Logout";

import IconPlus from "../components/ui/icons/IconPlus";
import IconPolice from "../components/ui/icons/IconPolice";
import IconCruzRoja from "../components/ui/icons/IconCruzRoja";
import UserContext from "../context/user/userContext";

const ProfileContainer = styled.main`
  width: 100%;
  height: 100vh;
  font-family: var(--font);
  .profile {
    background-color: white;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    div {
      margin-left: 10px;
      h1 {
        font-weight: 700;
        font-size: 18px;
        color: var(--violet);
        margin: 0 0 5px;
      }
      p {
        margin: 0;
        font-size: 8px;
        color: var(--black);
      }
    }
  }
  .angels {
    display: flex;
    flex-direction: column;
    padding: 10px;
    h2 {
      color: var(--blue);
      margin: 0 0 5px;
      font-weight: 700;
      font-size: 12px;
    }
    p {
      margin: 0 0 10px;
      font-size: 10px;
      color: var(--black);
    }
    div {
      display: flex;
      align-items: center;
      span {
        width: 40px;
        height: 40px;
        border: 1px dashed black;
        border-radius: 20px;
      }
      svg {
        margin-left: 20px;
      }
    }
  }
  .emergency {
    padding: 10px;
    h2,
    h3,
    p {
      margin: 0;
    }
    h2 {
      font-weight: 700;
      color: var(--blue);
      font-size: 18px;
    }
    > div {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      div {
        padding: 10px;
        width: 130px;
        background-color: white;
        text-align: center;
        border: 1px solid var(--gray);
        border-radius: 10px;
        &:first-of-type {
          margin-right: 10px;
        }
        h3 {
          font-size: 10px;
          color: var(--violet);
          margin-bottom: 16px;
        }
        p {
          font-size: 12px;
          color: var(--black);
          margin-bottom: 10px;
          &:last-of-type {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
`;

export default function Profile() {
  const [menu, showMenu] = useState(false);

  const { obtenerUsuario, usuario } = useContext(UserContext);

  const { photo, firstname, lastname } = usuario;

  useEffect(() => {
    if (Object.keys(usuario).length === 0) {
      obtenerUsuario();
    }
  }, []);

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <ProfileContainer>
        <Header>
          <Logout photo={photo} />
        </Header>
        <div className="profile">
          {photo === "" ? (
            <IconUserDefault width="39px" height="39px" />
          ) : (
            <Image src={photo} width="39px" height="39px" />
          )}
          <div>
            <h1>
              Hola {firstname} {lastname}
            </h1>
            <Link href="/edit-profile">
              <p>Editar mi perfil</p>
            </Link>
          </div>
        </div>
        <div className="angels">
          <h2>Tus angeles</h2>
          <p>Agrega a tus angeles que cuidarás</p>
          <div>
            <span></span>
            <Link href="/privacity">
              <>
                <IconPlus width="20px" height="20px" />
              </>
            </Link>
          </div>
        </div>
        <div className="emergency">
          <h2>Números de emergencia</h2>
          <div>
            <div>
              <IconCruzRoja />
              <h3>Cruz Roja Mexicana</h3>
              <p>065</p>
              <p>5557-5757</p>
              <p>5395-1111</p>
            </div>
            <div>
              <IconPolice />
              <h3>Policía CDMX</h3>
              <p>5684-2142</p>
              <p>5481-4326</p>
              <p>5256-0606</p>
            </div>
          </div>
        </div>
      </ProfileContainer>
    </Layout>
  );
}
