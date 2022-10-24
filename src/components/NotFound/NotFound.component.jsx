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
