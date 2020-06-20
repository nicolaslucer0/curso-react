import React from 'react';
import styled from 'styled-components';

const Experiencia = () => {
    return (
            <FlexContainer className="container">Experiencia</FlexContainer>
    )
}

export default Experiencia;


const FlexContainer = styled.nav`{
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #DDDDDD;
}`;