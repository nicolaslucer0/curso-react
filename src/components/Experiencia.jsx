import React from "react";
import styled from "styled-components";

// Como importar una imagen?
//import img from "../assets/img/logo.png";
//const img = require("../assets/img/logo.png");

const Experiencia = ({ titulo, color }) => {
  return (
    <FlexContainer className="container">
      <Card>
        <Title>{titulo}</Title>
        <Img src={require("../assets/img/logo.png")} />
      </Card>
    </FlexContainer>
  );
};

export default Experiencia;

const FlexContainer = styled.div`
   {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dddddd;
  }
`;

const Card = styled.div`
   {
    width: 20%;
    position: relative;
    border-size: border-box;
    background: #3366ff;
    border: 1px solid #dddddd;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 2em;
  }
`;

const Img = styled.img`
   {
    width: 100%;
  }
`;

const Title = styled.h2`
   {
  }
`;
