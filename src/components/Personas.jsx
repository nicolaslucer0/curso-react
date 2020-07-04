import React, { useState } from "react";
import styled from "styled-components";
import personas from "../assets/json/personas.json";

const Personas = () => {
  const [personaSeleccionada, setPersonaSeleccionada] = useState();
  const handleChange = (e) => setPersonaSeleccionada(e.target.value);

  return (
    <FlexContainerColumn className="container">
      <Select onChange={(e) => handleChange(e)}>
        <option selected disabled>
          Selecciona una opción
        </option>
        {personas.map((persona) => (
          <option>{persona.nombre}</option>
        ))}
      </Select>

      {personas
        .filter((persona) => persona.nombre === personaSeleccionada)
        .map((persona) => (
          <Card>
            <CardSection>
              <b>Nombre:</b> {persona.nombre}
            </CardSection>
            <CardSection>
              <b>Edad:</b> {persona.edad}
            </CardSection>
            <CardSection>
              <b>Sexo:</b> {persona.sexo}
            </CardSection>
            <CardSection>
              <b>Trabaja:</b> {persona.trabaja ? "Si" : "No"}
            </CardSection>
          </Card>
        ))}
    </FlexContainerColumn>
  );
};

export default Personas;

const FlexContainerColumn = styled.nav`
   {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #eeeeee;
  }
`;
const Select = styled.select`
   {
    padding: 1em;
    border-radius: 20px;
    background: white;
    outline: none;
  }
`;

const Card = styled.div`
   {
    display: flex;
    padding: 3em;
    margin: 3em;
    border: 1px solid #eeeeee;
    border-radius: 20px;
    background: white;
    flex-direction: column;
  }
`;

const CardSection = styled.div`
   {
  }
`;
