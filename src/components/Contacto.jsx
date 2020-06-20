import React from 'react';
import styled from 'styled-components';

const Contacto = () => {
    return (
        <FlexContainer className="container">Contacto</FlexContainer>
    )
}

export default Contacto;


const FlexContainer = styled.nav`{
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
}`;