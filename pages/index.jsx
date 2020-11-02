import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Link from "next/link";

import Layout from "../components/layouts/Layout";
import Header from "../components/layouts/Header";

import Button from "../components/ui/Button";

import IconQR from "../components/ui/icons/IconQR";
import IconGoogle from "../components/ui/icons/IconGoogle";
import IconMail from "../components/ui/icons/IconMail";
import IconCard from "../components/ui/icons/IconCard";
import IconHeart from "../components/ui/icons/IconHeart";
import IconPDF from "../components/ui/icons/IconPDF";
import IconBullet from "../components/ui/icons/IconBullet";
import IconArrow from "../components/ui/icons/IconArrow";
import IconFacebook from "../components/ui/icons/IconFacebook";
import IconTwitter from "../components/ui/icons/IconTwitter";
import IconInstagram from "../components/ui/icons/IconInstagram";

const HeroContainer = styled.div`
  width: 100vw;
  height: 450px;
  background-image: url("/static/img/hero.png");
  clip-path: polygon(0 0, 100vw 0, 100vw 100vh, 0 95vh);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: var(--font);
  h1 {
    width: 60vw;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: var(--white);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  div {
    width: 65vw;
    padding: 37px 0 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(62, 90, 173, 0.9);
    border-radius: 14px;
    color: var(--white);
    h2 {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      margin-bottom: 0;
    }
    p {
      width: 90%;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      span {
        font-weight: bold;
      }
    }
    h3 {
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      color: rgba(242, 242, 242, 0.9);
    }
  }
`;

const ProcedureContainer = styled.div`
  font-family: var(--font);
  margin-bottom: 50px;
  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: var(--blue);
  }
  p {
    color: var(--violet);
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin-bottom: 0;
  }
  .points__container {
    position: relative;
    display: flex;
    justify-content: space-around;
    hr {
      position: absolute;
      z-index: -1;
      top: 14px;
      left: 20px;
      right: 20px;
      border: 1px solid var(--blue);
    }

    h3 {
      width: 25px;
      height: 25px;
      text-align: center;
      font-size: 10px;
      background-color: var(--blue);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 60%;
      color: var(--white);
    }
  }
  .icons__container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    svg {
      width: 30%;
    }
  }
  .instructions__container {
    display: flex;
    justify-content: space-around;

    p {
      width: 25%;
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
    }
  }
`;

const SmallHeroContainer = styled.div`
  width: 100vw;
  height: 100vw;
  background-image: ${(props) => props.bgURL && `url(${props.bgURL})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 0;
  p {
    position: absolute;
    font-family: var(--font);
    font-weight: 900;
    font-size: 50px;
    color: var(--white);
    margin: 0 0 50px;
    &:first-of-type {
      margin-bottom: 70px;
      font-size: 60px;
      letter-spacing: 2px;
      -webkit-text-stroke: 2px var(--white);
      color: transparent;
    }
  }
`;

export default function Home() {
  return (
    <Layout>
      <Header whiteColor="true">
        <Link href="/info">Iniciar sesión</Link>
      </Header>
      <HeroContainer>
        <h1>Ayudalos a regresar a casa</h1>
        <div>
          <IconQR />
          <h2>Registrate</h2>
          <p>
            Generamos <span>plantillas QR</span> para casos de emergencia en
            pacientes que sufren <span>Alzheimer</span>
          </p>
          <Button
            bgColor="#DB4A39"
            textColor="#FAFAFA"
            borderColor="#DB4A39"
            shadow="true"
          >
            <IconGoogle />
            Registrate con Google
          </Button>
          <Link href="/info">
            <Button
              bgColor="transparent"
              textColor="#FAFAFA"
              borderColor="#FAFAFA"
            >
              <IconMail />
              Registrate con tu correo
            </Button>
          </Link>
          <h3>Recuperar contraseña</h3>
        </div>
      </HeroContainer>
      <ProcedureContainer>
        <h1>¿Cómo funciona?</h1>
        <p>3 pasos y 5 minutos hacen la diferencia</p>
        <div className="points__container">
          <hr />
          <h3>1</h3>
          <h3>2</h3>
          <h3>3</h3>
        </div>
        <div className="icons__container">
          <IconCard />
          <IconHeart />
          <IconPDF />
        </div>
        <div className="instructions__container">
          <p>Registrate</p>
          <p>Agrega la información de tu angel</p>
          <p>Descarga el PDF generado</p>
        </div>
      </ProcedureContainer>
      <SmallHeroContainer bgURL="/static/img/amalos.jpeg">
        <p>AMALOS</p>
        <p>AMALOS</p>
      </SmallHeroContainer>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          height: 700px;
          background-color: var(--violet);
          color: var(--white);
          font-family: var(--font);
          h1 {
            font-size: 24px;
            line-height: 28px;
            text-align: right;
            color: var(--terracota);
            margin: 30px 10px 0 0;
          }
          div {
            display: flex;
            flex-direction: column;
            div {
              display: flex;
              align-items: center;
              justify-content: space-around;
              &:first-of-type {
                padding: 0 10px;
                flex-direction: row;
                h2 {
                  margin-left: 15px;
                  font-size: 18px;
                  line-height: 21px;
                  color: var(--white);
                }
                .closed {
                  transform: rotate(180deg);
                }
              }
              p {
                padding: 0 10px;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
              }
              hr {
                border: 0.25px solid rgba(242, 242, 242, 0.9);
                width: 90vw;
              }
            }
          }
        `}
      >
        <h1>Sabemos que tienes preguntas</h1>
        <div>
          <div>
            <IconBullet />
            <h2>¿Qué pasa con mi información?</h2>
            <IconArrow />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium accusantium quas iusto vero repellendus voluptas
              quisquam aliquid. Dignissimos, velit inventore. Nesciunt mollitia
              doloribus repellendus illo ratione ad, illum veniam ullam.
            </p>
            <hr />
          </div>
        </div>
        <div>
          <div>
            <IconBullet />
            <h2>¿Qué hago si encuentro un enfermo?</h2>
            <IconArrow className="closed" />
          </div>
          <div>
            <hr />
          </div>
        </div>
        <div>
          <div>
            <IconBullet />
            <h2>¿Qué hago si encuentro un enfermo?</h2>
            <IconArrow className="closed" />
          </div>
          <div>
            <hr />
          </div>
        </div>
        <div>
          <div>
            <IconBullet />
            <h2>¿Qué hago si encuentro un enfermo?</h2>
            <IconArrow className="closed" />
          </div>
          <div>
            <hr />
          </div>
        </div>
        <div>
          <div>
            <IconBullet />
            <h2>¿Qué hago si encuentro un enfermo?</h2>
            <IconArrow className="closed" />
          </div>
          <div>
            <hr />
          </div>
        </div>
      </div>
      <SmallHeroContainer bgURL="/static/img/cuidalos.jpeg">
        <p>CUIDALOS</p>
        <p>CUIDALOS</p>
      </SmallHeroContainer>
      <div
        css={css`
          width: 100vw;
          height: 90vw;
          background-color: var(--purple1);
          padding: 10px 15px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          text-align: right;
          font-family: var(--font);
          color: var(--white);
          h1 {
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
          }
          p {
            font-size: 12px;
            line-height: 14px;
            margin-bottom: 20px;
            span {
              font-weight: 700;
            }
          }
          button {
            width: 50vw;
            justify-content: center;
          }
        `}
      >
        <h1>¿Sabías que?</h1>
        <p>
          <span>
            “Aproximadamente la mitad de los desaparecidos en mayores de 70 años
            sufre alzhéimer”
          </span>
          , explica a ConSalud.es Joaquín Amills, presidente de SOS
          Desparecidos. Este dato ha aumentado en los últimos años debido a la
          crisis económica.
        </p>
        <Button
          bgColor="var(--terracota)"
          textColor="#FAFAFA"
          borderColor="var(--terracota)"
          css={css`
            font-weight: bold;
          `}
        >
          Quiero registrarme
        </Button>
      </div>
      <div
        css={css`
          width: 100vw;
          height: 80vw;
          padding: 50px 15px;
          margin: 20px 0 50px;
          background-color: var(--white);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          font-family: var(--font);
          img {
            width: 40px;
            height: 40px;
          }
          h1 {
            width: 70vw;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;
            color: var(--blue);
          }
          p {
            font-size: 12px;
            line-height: 14px;
            color: var(--violet);
          }
        `}
      >
        <img src="/static/img/platzi_master.png" alt="Logo Platzi Master" />
        <h1>Una comunidad dispuesta a ayudar</h1>
        <p>
          Este proyecto es gracias a toda comunida que esta detras del programa
          Platzi Master.
        </p>
      </div>
      <div
        css={css`
          width: 100vw;
          height: 150vw;
          background-color: var(--blue);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: var(--font);
          color: var(--white);
          h1 {
            margin: 0 0 10px;
          }
          p {
            margin: 0 0 50px;
          }
          div {
            display: flex;
            justify-content: center;
            svg {
              width: 40px;
              height: 40px;
              margin: 0 10px;
              fill: var(--white);
            }
          }
        `}
      >
        <h1>Mosine</h1>
        <p>Codigos QR para pacientes Alzheimer</p>
        <div>
          <IconFacebook />
          <IconTwitter />
          <IconInstagram />
        </div>
      </div>
    </Layout>
  );
}
