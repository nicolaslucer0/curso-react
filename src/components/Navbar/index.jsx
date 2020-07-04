import React from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu.jsx";
import Logo from "../Logo.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <List>
        <Item to="/">Import imagen</Item>
        <Item to="personas">Personas from json</Item>
        <Item to="contacto">Hook de estado</Item>
        <Item to="proyectos">Hook de efecto y estado</Item>
      </List>
      <BurgerMenu />
    </NavbarContainer>
  );
};
export default Navbar;

const NavbarContainer = styled.nav`
   {
    width: 100%;
    background-color: var(--primary);
    position: fixed;
    display: flex;
    height: 8vh;
    align-items: center;
    justify-content: space-around;
  }
`;

const List = styled.ul`
   {
    width: 60%;
    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
      display: none;
      justify-content: flex-end;
    }
  }
`;

const Item = styled(Link)`
  list-style: none;
  color: white;
`;
