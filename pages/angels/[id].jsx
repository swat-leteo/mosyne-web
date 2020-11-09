import { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import Layout from "../../components/layouts/Layout";
import Loader from "../../components/ui/Loader";

import IconPhone from "../../components/ui/icons/IconPhone";
import AngelContext from "../../context/angel/angelContext";
import IconUserDefault from "../../components/ui/icons/IconUserDefault";

const AngelContainer = styled.main`
  font-family: var(--font);
`;

export default function Angel() {
  const router = useRouter();
  const { obtenerAngel, angelinfo } = useContext(AngelContext);
  const {
    firstname,
    lastname,
    photo,
    blood_type,
    suffering,
    contacts,
  } = angelinfo;

  const {
    query: { id },
  } = router;

  useEffect(() => {
    if (id) {
      obtenerAngel(id);
    }
  }, [id]);

  if (Object.keys(angelinfo).length === 0) {
    return <Loader />;
  }

  return (
    <Layout>
      <AngelContainer>
        {photo === "" ? (
          <div>
            <IconUserDefault fill="#000000" width="100%" height="218px" />
          </div>
        ) : (
          <img src={photo} width="100%" height="218px" />
        )}
        <div>
          <h1>{`${firstname} ${lastname}`}</h1>
          <p>Sufre: {suffering}</p>
          <p>Tipo de sangre: {blood_type}</p>
        </div>
        <div>
          <h2>Contacto de emergencia</h2>
          <p>{contacts[0].name}</p>
          <div>
            <a href={`tel:+${contacts[0].phone}`}>
              Telefono
              <IconPhone width="25px" height="24px" />
            </a>
            <a href={`tel:+${contacts[0].cel}`}>
              Celular
              <IconPhone width="25px" height="24px" />
            </a>
          </div>
        </div>
      </AngelContainer>
    </Layout>
  );
}
