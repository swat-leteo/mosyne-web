import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import Button from "../components/ui/Button";
import Image from "../components/ui/Image";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Layout from "../components/layouts/Layout";

import IconUserDefault from "../components/ui/icons/IconUserDefault";

import UserContext from "../context/user/userContext";

const EditProfileContainer = styled.main`
  width: 100vw;
  font-family: var(--font);
  background-image: url("/static/img/UserInfoRegister.png");
  background-size: contain;
  .user-information {
    color: var(--white);
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    svg,
    img {
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
        margin-top: 10px;
        label {
          font-size: 12px;
          font-weight: 700;
        }
      }
      .numbers {
        flex-direction: row;
        div:first-of-type {
          margin-right: 35px;
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
      .buttons {
        flex-direction: row;
        padding: 10px 0 20px;
        button {
          justify-content: center;
          margin: 0;
          :first-of-type {
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

export default function EditProfile() {
  const { usuario, obtenerUsuario, editarPerfil } = useContext(UserContext);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    photo: "",
    phone: "",
    cel: "",
    address: {
      city: "",
      municipality: "",
      neighborhood: "",
      street: "",
      num_int: "",
      num_ext: "",
      cp: "",
    },
  });

  useEffect(() => {
    if (Object.keys(usuario).length === 0) {
      obtenerUsuario();
    } else {
      setUser(usuario);
    }
  }, [usuario]);

  if (Object.keys(usuario).length === 0) {
    return <Loader />;
  }
  const {
    firstname,
    lastname,
    photo,
    phone,
    cel,
    address: { city, municipality, neighborhood, street, num_int, num_ext, cp },
  } = user;

  const readImageFile = () => {
    const imageFile = document.getElementById("inputImage").files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => setUser({ ...user, photo: reader.result });
  };

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeAddress = (e) => {
    setUser({
      ...user,
      address: {
        ...user.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editarPerfil(user);
  };

  return (
    <Layout>
      <EditProfileContainer>
        <div className="user-information">
          {!photo ? (
            <IconUserDefault width="50px" height="50px" />
          ) : (
            <Image src={photo} width="50px" height="50px" />
          )}
          <div className="user-image">
            <input
              type="file"
              accept="image/*"
              id="inputImage"
              onChange={readImageFile}
            />
            Sube tu fotografía
          </div>
          <h1>
            ¡Hola {firstname} {lastname}!
          </h1>
        </div>
        <div className="formulario">
          <h2>Datos de emergencia</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="telefono">Telefono de casa</label>
              <Input
                type="tel"
                name="phone"
                onChange={onChange}
                value={phone}
              />
            </div>
            <div>
              <label htmlFor="celular">Celular</label>
              <Input type="tel" name="cel" onChange={onChange} value={cel} />
            </div>
            <div className="direccion">
              <div>
                <label htmlFor="estado">Estado</label>
                <Input
                  type="text"
                  name="city"
                  onChange={onChangeAddress}
                  value={city}
                />
              </div>
              <div>
                <label htmlFor="municipio">Municipio/Delegación</label>
                <Input
                  type="text"
                  name="municipality"
                  onChange={onChangeAddress}
                  value={municipality}
                />
              </div>
            </div>

            <div>
              <label htmlFor="colonia">Colonia</label>
              <Input
                type="text"
                name="neighborhood"
                onChange={onChangeAddress}
                value={neighborhood}
              />
            </div>
            <div>
              <label htmlFor="calle">Calle</label>
              <Input
                type="text"
                name="street"
                onChange={onChangeAddress}
                value={street}
              />
            </div>
            <div className="numbers">
              <div>
                <label htmlFor="int">Número interior</label>
                <Input
                  type="text"
                  name="num_int"
                  onChange={onChangeAddress}
                  value={num_int}
                />
              </div>
              <div>
                <label htmlFor="ext">Número exterior</label>
                <Input
                  type="text"
                  name="num_ext"
                  onChange={onChangeAddress}
                  value={num_ext}
                />
              </div>
            </div>
            <div>
              <label htmlFor="cp">Codigo postal</label>
              <Input
                type="text"
                name="cp"
                onChange={onChangeAddress}
                value={cp}
              />
            </div>
            <div className="buttons">
              <Link href="/profile">
                <Button
                  bgColor="transparent"
                  textColor="var(--purple1)"
                  borderColor="var(--purple1)"
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                bgColor="var(--purple1)"
                textColor="#FAFAFA"
                borderColor="var(--purple1)"
                shadow="true"
                type="submit"
              >
                Guardar cambios
              </Button>
            </div>
          </form>
        </div>
      </EditProfileContainer>
    </Layout>
  );
}
