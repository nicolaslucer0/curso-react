import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return(
        <NavbarContainer>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Experiencia</ListItem>
                <ListItem>Contacto</ListItem>
            </List>
        </NavbarContainer>
    )
}
export default Navbar;

const NavbarContainer = styled.nav`{
    width: 100%;
    background-color: aquamarine;
    position: fixed;
}`;

const List = styled.ul`{
    display: flex;
    justify-content: space-around;
}`;

const ListItem = styled.li`{
    list-style: none;
}`;
