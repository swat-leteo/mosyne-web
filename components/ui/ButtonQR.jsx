import { css } from "@emotion/core";
import React from "react";

import Button from "./Button";

import IconCloud from "./icons/IconCloud";

const ButtonQR = ({ id }) => {
  return (
    <a
      href={`https://api-mosine.appspot.com/api/angels/${id}/qr`}
      target="__blank"
      css={css`
        text-decoration: none;
        width: 50%;
        button {
          margin: 10px 0 0 10px;
          width: 50%;
          width: ${(props) => (props.menu === true ? "60%" : "45%")};
          justify-content: center;
          align-items: center;
          font-size: 9px;
          padding: 2px;
          border-radius: 2.5px;
          svg {
            margin-right: 5px;
          }
        }
      `}
    >
      <Button
        bgColor="var(--blue)"
        textColor="#FAFAFA"
        borderColor="var(--blue)"
      >
        <IconCloud /> Descargar codigo QR
      </Button>
    </a>
  );
};

export default ButtonQR;
