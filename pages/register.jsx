import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import Layout from "../components/layouts/Layout";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

import IconMosineAlt from "../components/ui/icons/IconMosineAlt";

import validarRegister from "../validation/validarRegister";

const RegisterContainer = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  font-family: var(--font);
  position: relative;
  .logo {
    display: flex;
    justify-content: center;
    padding: 20px 0;
    background-color: var(--white);
  }
  form {
    margin-top: 20px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    label {
      font-weight: 700;
      font-size: 12px;
    }
    .name {
      flex-direction: row;
      div {
        margin-left: 10px;
        margin-right: 5px;
        display: block;
        input {
          width: 100%;
        }
        &:last-of-type {
          margin-left: 5px;
          margin-right: 10px;
        }
      }
    }
    .correo,
    .password,
    .confirmar {
      margin: 10px;
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    button {
      margin: 0 5px 0 0;
      justify-content: center;
      font-weight: 700;
      &:last-of-type {
        margin: 0 0 0 5px;
      }
    }
  }
  > p {
    position: absolute;
    text-align: center;
    bottom: 10px;
    left: 0;
    right: 0;
    font-size: 10px;
    color: var(--blue);
    font-weight: 700;
  }
  div p {
    margin: 5px 0 0;
    font-size: 10px;
    color: var(--red);
  }
  legend {
    margin: 0 10px;
    font-size: 10px;
    font-style: italic;
  }
`;

export default function Register() {
  const router = useRouter();

  const [error, setError] = useState({});

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { nombre, apellido, email, password, confirmar } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // TODO: saltando validacion
    router.push("/register-confirm");
    return;
    const errores = validarRegister(user);
    setError(errores);
    if (Object.keys(errores).length === 0) {
      router.push("/register-confirm");
    }
  };

  return (
    <Layout>
      <RegisterContainer>
        <div className="logo">
          <IconMosineAlt />
        </div>
        <form>
          <div className="name">
            <div>
              <label htmlFor="nombre">Nombre*</label>
              <Input
                type="text"
                placeholder="Mínimo 2 caracteres"
                name="nombre"
                value={nombre}
                onChange={onChange}
              />
              {error.nombre && <p>* {error.nombre}</p>}
            </div>
            <div>
              <label htmlFor="apellido">Apellido*</label>
              <Input
                type="text"
                placeholder="Mínimo 3 caracteres"
                name="apellido"
                value={apellido}
                onChange={onChange}
              />
              {error.apellido && <p>* {error.apellido}</p>}
            </div>
          </div>
          <div className="correo">
            <label htmlFor="email">Correo electrónico*</label>
            <Input
              type="email"
              placeholder="ejemplo@mail.com"
              name="email"
              value={email}
              onChange={onChange}
            />
            {error.email && <p>* {error.email}</p>}
          </div>
          <div className="password">
            <label htmlFor="password">Contraseña*</label>
            <Input
              type="password"
              placeholder="Mínimo 8 caracteres"
              name="password"
              value={password}
              onChange={onChange}
            />
            {error.password && <p>* {error.password}</p>}
          </div>
          <div className="confirmar">
            <label htmlFor="confirmar">Confirma tu contraseña*</label>
            <Input
              type="password"
              placeholder="Escríbe de nuevo tu contraseña"
              name="confirmar"
              value={confirmar}
              onChange={onChange}
            />
            {error.confirmar && <p>* {error.confirmar}</p>}
          </div>
          <legend>* campos obligatorios</legend>
        </form>
        <div className="buttons">
          <Link href="/info">
            <Button
              bgColor="transparent"
              textColor="var(--purple1)"
              borderColor="var(--purple1)"
            >
              Regresar
            </Button>
          </Link>
          <Button
            bgColor="var(--purple1)"
            textColor="#FAFAFA"
            borderColor="var(--purple1)"
            shadow="true"
            onClick={() => handleSubmit()}
          >
            Crear Cuenta
          </Button>
        </div>
        <p>Registrarme con Gmail</p>
      </RegisterContainer>
    </Layout>
  );
}
