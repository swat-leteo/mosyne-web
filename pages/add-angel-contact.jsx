import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

import Header from "../components/layouts/Header";
import Layout from "../components/layouts/Layout";
import Logout from "../components/layouts/Logout";
import Menu from "../components/layouts/Menu";

import Bullets from "../components/ui/Bullets";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

import UserContext from "../context/user/userContext";
import AngelContext from "../context/angel/angelContext";

import validarAngelContact from "../validation/validarAngelContact";

const AddAngelContactContainer = styled.main`
  font-family: var(--font);
  height: 100vh;
  header {
    background-color: var(--gray);
  }
  h1,
  form {
    padding: 10px 10px 0;
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
      select {
        margin-top: 5px;
        color: var(--black);
        background-color: var(--gray);
        border-color: var(--gray);
      }
      p {
        margin: 5px 0 0;
        font-size: 10px;
        color: var(--red);
      }
    }
    legend {
      margin-top: 10px;
      font-size: 10px;
      font-style: italic;
    }
    .contact,
    .buttons {
      flex-direction: row;
    }
    .names,
    .telephone {
      flex-direction: ${(props) => (props.menu ? "column" : "row")};
    }
    .contact {
      width: 100%;
      justify-content: space-between;
    }
    .names div:first-of-type {
      margin-right: 20px;
    }
    .buttons {
      margin-top: 20px;
      button {
        margin: 0;
        justify-content: center;
        &:first-of-type {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default function AddAngelContact() {
  const router = useRouter();

  const { usuario } = useContext(UserContext);
  const { agregarAngelContact } = useContext(AngelContext);

  const [menu, showMenu] = useState(false);
  const [error, setError] = useState({});

  const [contact, setContact] = useState({
    angel_relation: "",
    firstname: "",
    lastname: "",
    cel: "",
    phone: "",
  });

  const handleChangeEmergency = (e) => {
    if (e.target.checked) {
      setContact({
        ...contact,
        firstname: usuario.firstname,
        lastname: usuario.lastname,
        phone: usuario.phone,
        cel: usuario.cel,
      });
    } else {
      setContact({
        ...contact,
        firstname: "",
        lastname: "",
        cel: "",
        phone: "",
      });
    }
  };

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarAngelContact(contact);
    setError(errores);
    if (Object.keys(errores).length === 0) {
      const name = contact.firstname + " " + contact.lastname;
      agregarAngelContact({
        name,
        angel_relation: contact.angel_relation,
        cel: contact.cel,
        phone: contact.phone,
      });
      router.push("/add-angel-diseases");
    }
  };

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <AddAngelContactContainer menu={menu}>
        <Header>
          <Logout />
        </Header>
        <h1>Contactos de emergencia</h1>
        <Bullets bullet="2" />
        <form onSubmit={handleSubmit}>
          <div className="contact">
            <label htmlFor="">Soy contacto de emergencia</label>
            <input type="checkbox" onChange={handleChangeEmergency} />
          </div>
          <div>
            <label htmlFor="angel_relation">¿Qué eres de tu angel?*</label>
            <select
              name="angel_relation"
              onChange={handleChange}
              value={contact.angel_relation}
            >
              <option value="">-- Selecciona --</option>
              <option value="hijo">Hijo</option>
              <option value="hija">Hija</option>
              <option value="madre">Madre</option>
              <option value="padre">Padre</option>
              <option value="abuela">Abuela</option>
              <option value="abuelo">Abuelo</option>
              <option value="nieto">Nieto</option>
              <option value="nieta">Nieta</option>
              <option value="amig@">Amig@</option>
              <option value="tio">Tio</option>
              <option value="tia">Tia</option>
              <option value="prim@">Prim@</option>
              <option value="otro">Otro</option>
            </select>
            {error.angel_relation && <p>* {error.angel_relation}</p>}
          </div>
          <div className="names">
            <div>
              <label htmlFor="">Nombre*</label>
              <Input
                type="text"
                placeholder="Mínimo 2 caracteres"
                name="firstname"
                onChange={handleChange}
                value={contact.firstname}
              />
              {error.firstname && <p>* {error.firstname}</p>}
            </div>
            <div>
              <label htmlFor="">Apellido*</label>
              <Input
                type="text"
                placeholder="Mínimo 3 caracteres"
                name="lastname"
                onChange={handleChange}
                value={contact.lastname}
              />
              {error.lastname && <p>* {error.lastname}</p>}
            </div>
          </div>
          <div className="telephone">
            <div>
              <label htmlFor="">Teléfono de casa*</label>
              <Input
                type="text"
                name="phone"
                onChange={handleChange}
                value={contact.phone}
              />
              {error.phone && <p>* {error.phone}</p>}
            </div>
            <div>
              <label htmlFor="">Teléfono celular*</label>
              <Input
                type="text"
                name="cel"
                onChange={handleChange}
                value={contact.cel}
              />
              {error.cel && <p>* {error.cel}</p>}
            </div>
          </div>
          <legend>* campos obligatorios</legend>
          <div className="buttons">
            <Link href="/add-angel-info">
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
              type="submit"
            >
              Siguiente
            </Button>
          </div>
        </form>
      </AddAngelContactContainer>
    </Layout>
  );
}
