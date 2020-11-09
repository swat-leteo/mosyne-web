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

import IconPlus from "../components/ui/icons/IconPlus";
import IconDelete from "../components/ui/icons/IconDelete";

import validarAngelDiseases from "../validation/validarAngelDiseases";

import AngelContext from "../context/angel/angelContext";

const AddAngelDiseasesContainer = styled.main`
  font-family: var(--font);
  header {
    background-color: var(--gray);
  }
  h1,
  form {
    padding: 10px;
  }
  h1 {
    font-size: 18px;
    color: var(--blue);
    margin: 0;
  }
  form {
    legend {
      font-size: 10px;
      font-style: italic;
    }
    > div {
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      label {
        font-weight: 700;
        color: var(--violet);
        font-size: 12px;
      }
      textarea,
      select {
        margin-top: 5px;
        color: var(--black);
        background-color: var(--gray);
        border-color: var(--gray);
      }
      .error {
        margin: 5px 0 0;
        font-size: 10px;
        color: var(--red);
      }
    }
    .life,
    .detonante,
    .disease {
      div {
        justify-content: center;
        input {
          margin: 0 5px;
          &:first-of-type {
            margin-left: 0;
          }
        }
      }
    }
    .alergias,
    .cirugias,
    .medicamentos {
      div {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          margin-top: 0;
          width: 70%;
        }
      }
    }
    .buttons {
      flex-direction: row;
    }
    .buttons {
      margin-top: 20px;
      button {
        margin: 0;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        &:first-of-type {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default function AddAngelDiseases() {
  const router = useRouter();

  const { agregarAngelDisease, agregarAngel } = useContext(AngelContext);

  const [menu, showMenu] = useState(false);
  const [error, setError] = useState({});

  const [diseases, setDiseases] = useState({
    blood_type: "",
    living_alone: false,
    detonant: "",
    alergies: [],
    surgeries: [],
    medicines: [],
    diabetes: false,
    hypertension: false,
    suffering: "",
    health_info: "",
  });

  const handleChange = (e) => {
    setDiseases({
      ...diseases,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDH = (e) => {
    setDiseases({
      ...diseases,
      [e.target.name]: e.target.checked,
    });
  };

  const handleChangeASM = (name) => {
    let value = document.getElementById(name).value;
    if (value.trim() === "") {
      setError({
        ...error,
        [name]: "Completa este campo",
      });
      return;
    }
    setError({});
    document.getElementById(name).value = "";
    setDiseases({
      ...diseases,
      [name]: [...diseases[name], value],
    });
  };

  const deleteASM = (name, elemento) => {
    setDiseases({
      ...diseases,
      [name]: diseases[name].filter((d, index) => index !== elemento),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarAngelDiseases(diseases);
    setError(errores);
    if (Object.keys(errores).length === 0) {
      agregarAngelDisease(diseases);
      agregarAngel();
      router.push("/generate-qr");
    }
  };

  return (
    <Layout display="grid" menu={menu}>
      <Menu menu={menu} showMenu={showMenu} />
      <AddAngelDiseasesContainer>
        <Header>
          <Logout />
        </Header>
        <h1>Enfermedades y Padecimientos</h1>
        <Bullets bullet="3" />
        <form onSubmit={handleSubmit}>
          <legend>* campos obligatorios</legend>
          <div>
            <label htmlFor="">Tipo de sangre*</label>
            <select name="blood_type" onChange={handleChange}>
              <option value="">-- Selecciona --</option>
              <option value="A-">A-</option>
              <option value="A+">A+</option>
              <option value="B-">B-</option>
              <option value="B+">B+</option>
              <option value="AB-">AB-</option>
              <option value="AB+">AB+</option>
              <option value="O-">O-</option>
              <option value="O+">O+</option>
            </select>
            {error.blood_type && <p className="error">* {error.blood_type}</p>}
          </div>
          <div className="life">
            <label htmlFor="">¿Vivé solo?</label>
            <div>
              <input
                type="radio"
                name="living_alone"
                value={true}
                onChange={handleChange}
              />
              <label htmlFor="living_alone">Si</label>
              <input
                type="radio"
                name="living_alone"
                value={false}
                onChange={handleChange}
              />
              <label htmlFor="living_alone">No</label>
            </div>
          </div>
          <div className="detonante">
            <label htmlFor="">Detonante del Alzheimer*</label>
            <div>
              <input
                type="radio"
                name="detonant"
                value="inherited"
                onChange={handleChange}
              />
              <label htmlFor="detonant">Herencía</label>
              <input
                type="radio"
                name="detonant"
                value="depression"
                onChange={handleChange}
              />
              <label htmlFor="detonant">Depresión</label>
              <input
                type="radio"
                name="detonant"
                value="neurological"
                onChange={handleChange}
              />
              <label htmlFor="detonant">Neurologico</label>
            </div>
            {error.detonant && <p className="error">* {error.detonant}</p>}
          </div>
          <div className="alergias">
            <label htmlFor="">Alergías</label>
            <div>
              <Input type="text" id="alergies" />
              <IconPlus
                width="25px"
                height="25px"
                onClick={() => handleChangeASM("alergies")}
              />
            </div>
            {error.alergies && <p className="error">* {error.alergies}</p>}
            {diseases.alergies.map((alergie, index) => (
              <div key={`alergie-${index}`}>
                <p>{alergie}</p>
                <IconDelete
                  width="25px"
                  height="25px"
                  onClick={() => deleteASM("alergies", index)}
                />
              </div>
            ))}
          </div>
          <div className="cirugias">
            <label htmlFor="">Cirugías</label>
            <div>
              <Input type="text" id="surgeries" />
              <IconPlus
                width="25px"
                height="25px"
                onClick={() => handleChangeASM("surgeries")}
              />
            </div>
            {error.surgeries && <p className="error">* {error.surgeries}</p>}
            {diseases.surgeries.map((surgerie, index) => (
              <div key={`surgerie-${index}`}>
                <p>{surgerie}</p>
                <IconDelete
                  width="25px"
                  height="25px"
                  onClick={() => deleteASM("surgeries", index)}
                />
              </div>
            ))}
          </div>
          <div className="medicamentos">
            <label htmlFor="">Medicamentos</label>
            <div>
              <Input type="text" id="medicines" />
              <IconPlus
                width="25px"
                height="25px"
                onClick={() => handleChangeASM("medicines")}
              />
            </div>
            {error.medicines && <p className="error">* {error.medicines}</p>}
            {diseases.medicines.map((medicine, index) => (
              <div key={`medicine-${index}`}>
                <p>{medicine}</p>
                <IconDelete
                  width="25px"
                  height="25px"
                  onClick={() => deleteASM("medicines", index)}
                />
              </div>
            ))}
          </div>
          <div className="disease">
            <label htmlFor="">¿Sufré de alguna de estas enfermedades?</label>
            <div>
              <input
                type="checkbox"
                name="diabetes"
                onChange={handleChangeDH}
              />
              <label htmlFor="diabetes">Diabetes</label>
              <input
                type="checkbox"
                name="hypertension"
                onChange={handleChangeDH}
              />
              <label htmlFor="hypertension">Hipertensión</label>
            </div>
          </div>
          <div>
            <label htmlFor="health_info">Reacciones ante medicamentos</label>
            <textarea
              name="health_info"
              cols="30"
              rows="10"
              placeholder="Describe reacciones ante medicamentos"
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="suffering">Dolencias</label>
            <textarea
              name="suffering"
              id=""
              cols="30"
              rows="10"
              placeholder="Describe dolencias recientes"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="buttons">
            <Link href="/add-angel-contact">
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
              Guardar y generar QR
            </Button>
          </div>
        </form>
      </AddAngelDiseasesContainer>
    </Layout>
  );
}
