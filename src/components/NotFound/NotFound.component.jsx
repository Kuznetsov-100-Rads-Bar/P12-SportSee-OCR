/**
 * @file NotFound.component.jsx It displays the links including the two user profile links, and the 404 page
 * @author Behar Rahala AbdelKader
 * @see https://github.com/Kuznetsov-100-Rads-Bar/P12-SportSee-OCR/blob/main/src/components/NotFound/NotFound.component.jsx
 */

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundDescription>
        Oups! La page que vous demandez n'existe pas.
      </NotFoundDescription>
      <NotFoundLink as={Link} to="/user/12">
        Retourner sur la page d'accueil
      </NotFoundLink>
      <NotFoundLink as={Link} to="/user/12">
        Aller vers le profil utilisateur 12
</NotFoundLink>
      <NotFoundLink as={Link} to="/user/18">
        Aller vers le profil utilisateur 18
</NotFoundLink>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  margin: 30px;
`;
const NotFoundTitle = styled.h1`
  color: #FF0101;
  margin: 0;
  text-align: center;
  font-size: 6rem;
`;
const NotFoundDescription = styled.p`
  color: #A9A9A9;
  text-align: center;
  font-size: 1.125rem;
`;

const NotFoundLink = styled.a`
  color: #A9A9A9;
  text-align: center;
  display: block;
  margin: 100px 0 0 0;
`;
