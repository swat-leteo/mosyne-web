import styled from "@emotion/styled";
import Link from "next/link";
import { useEffect, useState } from "react";
import { css } from '@emotion/core';

import Header from "../components/layouts/Header";
import Layout from "../components/layouts/Layout";
import Logout from "../components/layouts/Logout";
import Menu from "../components/layouts/Menu";
import { Media } from '../types/mediaquery';

import Button from "../components/ui/Button";

const PrivacityContainer = styled.main`
  height: 100vh;
	font-family: var(--font);
	background: var(--white);
	border-radius: 20px 0 0 20px;
	overflow: hidden;
	transition: all 0.3s linear;
	box-shadow: -8px 0px 16px rgba(73, 45, 148, 0.5);
	@media ${Media.desktop} {
		width: 90%;
		border-radius: 30px 0 0 30px;
	}
	${(props) =>
		props.menu === true
			? css`
					width: 70%;
					@media ${Media.tablet} {
						width: 85%;
					}
			  `
			: css`
					width: 95%;
			  `}
  header {
    background-color: var(--gray);
    margin-bottom: 20px;
  }
  .mainContainer {
    padding: 0 10px 60px 10px;
    overflow-x: auto;
    height: 100%;
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
      line-height: 24px;
    }
  }
  .bottomContainer {
    position: absolute;
    background-color: var(--white);
    left: 45px;
    bottom: 20px;
    display: flex;
    button {
      justify-content: center;
      margin: 0;
      &:first-of-type {
        margin-right: 10px;
      }
    }
  }
`;

export default function Privacity() {
  const [menu, showMenu] = useState(false);
  const windowWith = typeof window !== 'undefined' && window.innerWidth;

  useEffect(() => {
		if (windowWith >= 1440) {
			showMenu(true);
		}
	});

  return (
    <Layout display="flex" menu={true}>
      <Menu menu={menu} showMenu={showMenu} />
      <PrivacityContainer menu={menu}>
        <Header>
          <Logout />
        </Header>
        <div className="mainContainer">
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
        <div className="bottomContainer">
          <Button
            bgColor="transparent"
            textColor="var(--purple1)"
            borderColor="var(--purple1)"
          >
            Cancelar
          </Button>
          <Link href="/add-angel-info">
            <Button
              bgColor="var(--purple1)"
              textColor="#FAFAFA"
              borderColor="var(--purple1)"
              shadow="true"
            >
              Aceptar
            </Button>
          </Link>
        </div>
      </PrivacityContainer>
    </Layout>
  );
}
