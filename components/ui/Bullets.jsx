import React from "react";
import styled from "@emotion/styled";

const BulletsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
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
    &:nth-of-type(${(props) => props.bullet}) {
      background-color: var(--purple1);
    }
  }
`;

const Bullets = ({ bullet }) => {
  return (
    <BulletsContainer bullet={bullet}>
      <hr />
      <h3>1</h3>
      <h3>2</h3>
      <h3>3</h3>
    </BulletsContainer>
  );
};

export default Bullets;
