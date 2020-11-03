import { useContext, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import Layout from "../components/layouts/Layout";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

import IconGoogle from "../components/ui/icons/IconGoogle";
import IconMosineAlt from "../components/ui/icons/IconMosineAlt";

import validarLogin from "../validation/validarLogin";

import AuthContext from "../context/auth/authContext";

const LoginContainer = styled.main`
  width: 100vw;
  height: 100vh;
  font-family: var(--font);
  position: relative;
  .logo {
    padding: 20px 0;
    background-color: var(--gray);
    display: flex;
    justify-content: center;
  }
  form {
    margin-top: 20px;
    padding: 0 10px;
    div {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      &:last-of-type {
        flex-direction: row;
      }
      input {
        background-color: var(--gray);
      }
      p {
        margin: 5px 0 0;
        font-size: 10px;
        color: var(--red);
      }
    }
    div label,
    > p {
      color: var(--black);
      font-size: 12px;
      font-weight: 700;
    }
    div:last-of-type {
      display: flex;
      align-items: center;
      input[type="checkbox"]:checked {
        color: var(--purple1);
      }
      label {
        font-weight: 400;
      }
    }
    > p {
      text-align: right;
    }
    button {
      width: 100%;
      justify-content: center;
    }
    legend {
      margin-top: 10px;
      font-size: 10px;
      font-style: italic;
    }
  }
  > div:last-of-type {
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      justify-content: center;
      svg {
        margin-right: 10px;
      }
    }
    p {
      margin-top: 20px;
      color: var(--blue);
      font-size: 10px;
    }
  }
`;

export default function Login() {
  const { loginUsuario } = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarLogin(user);
    setError(errores);
    if (Object.keys(errores).length === 0) {
      loginUsuario(user);
    }
  };

  return (
    <Layout>
      <LoginContainer>
        <div className="logo">
          <IconMosineAlt />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Correo electrónico*</label>
            <Input
              type="email"
              name="email"
              placeholder="Escribe tu correo electrónico"
              value={user.email}
              onChange={onChange}
            />
            {error.email && <p>* {error.email}</p>}
          </div>
          <div>
            <label htmlFor="password">Contraseña*</label>
            <Input
              type="password"
              name="password"
              placeholder="Escribe tu contraseña"
              value={user.password}
              onChange={onChange}
            />
            {error.password && <p>* {error.password}</p>}
          </div>
          <legend>* campos obligatorios</legend>
          <p>No recuerdo mi contraseña</p>
          <Button
            bgColor="var(--purple1)"
            textColor="#FAFAFA"
            borderColor="var(--purple1)"
            type="submit"
          >
            Iniciar sesión
          </Button>
          <div>
            <input type="checkbox" />
            <label htmlFor="recuerdame">Recuerdame</label>
          </div>
        </form>
        <div>
          <Button
            bgColor="#DB4A39"
            textColor="#FAFAFA"
            borderColor="#DB4A39"
            shadow="true"
          >
            <IconGoogle /> Entrar con Google
          </Button>
          <Link href="/register">
            <p>Todavía no tengo una cuenta</p>
          </Link>
        </div>
      </LoginContainer>
    </Layout>
  );
}
