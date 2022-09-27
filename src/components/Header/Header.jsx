import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/LogoSportSee.png';

export default function Header() {
  return (
    <StyledHeader> 
    <NavbarContainer>
      <NavbarLogo src={logo} alt="Logo SportSee" />
        <NavbarMenusLinks>
          <NavbarMenuLink to='/'>Accueil</NavbarMenuLink>
          <NavbarMenuLink to='/'>Profil</NavbarMenuLink>
          <NavbarMenuLink to='/'>Réglage</NavbarMenuLink>   
          <NavbarMenuLink to='/'>Communauté</NavbarMenuLink>
        </NavbarMenusLinks>
    </NavbarContainer>
    </StyledHeader>
  )
}

const StyledHeader = styled.header``;

const NavbarLogo = styled.img``;

const NavbarContainer = styled.nav`
    background-color: #020203;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 29px;
`;

const NavbarMenusLinks = styled.li`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 6vw 0 10vw;`;

const NavbarMenuLink = styled(Link)`
    color: white;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
`;
 