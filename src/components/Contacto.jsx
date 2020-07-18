import React, { useState } from "react";
import styled from "styled-components";

const Contacto = () => {
  const [color, setColor] = useState("blanco");

  return (
    <FlexContainerRow className={`container ${color}`}>
      {color}
      <FlexContainerColumn>
        <Button onClick={() => setColor("verde")}>Cambiar a verde</Button>
        <Button onClick={() => setColor("rojo")}>Cambiar a rojo</Button>
      </FlexContainerColumn>
      <Button onClick={() => setColor("blanco")}>Resetear</Button>
    </FlexContainerRow>
  );
};

export default Contacto;

const FlexContainerRow = styled.div`
   {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    flex-direction: column;

    &.verde {
      background: green;
    }

    &.rojo {
      background: red;
    }
  }
`;

const FlexContainerColumn = styled.div`
   {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

const Button = styled.button`
   {
    background: white;
    padding: 1em;
    margin: 2em 1em;
    border-radius: 10px;
    border: 1px solid gray;
    outline: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;
