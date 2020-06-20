import React from 'react';
import styled from 'styled-components';

const SobreMi = () => {
    return (
        <FlexContainer className="container">SobreMi</FlexContainer>
    )
}

export default SobreMi;


const FlexContainer = styled.nav`{
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #EEEEEE;
}`;