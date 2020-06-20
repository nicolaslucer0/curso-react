import React from 'react';
import styled from 'styled-components';
import BurgerMenu from './BurgerMenu.jsx';
import Logo from '../Logo.jsx';

const Navbar = () => {
    return(
        <NavbarContainer>
            <Logo/>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Experiencia</ListItem>
                <ListItem>Contacto</ListItem>
            </List>
            <BurgerMenu/>
        </NavbarContainer>
    )
}
export default Navbar;

const NavbarContainer = styled.nav`{
    width: 100%;
    background-color: var(--primary);
    position: fixed;
    display:flex;
    height: 8vh;
    align-items: center;
    justify-content: space-around;
    
}`;

const List = styled.ul`{
    width: 50%;
    display: flex;
    justify-content: space-around;
    @media(max-width: 768px){
        display: none;
        justify-content: flex-end;
    }
}`;

const ListItem = styled.li`{
    list-style: none;
    color: white;
}`;
