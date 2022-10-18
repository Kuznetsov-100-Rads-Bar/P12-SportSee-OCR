import React from "react";
import styled from "styled-components";
import iconMeditate from "../../assets/icons/meditate.svg";
import iconSwim from "../../assets/icons/swim.svg";
import iconBike from "../../assets/icons/bike.svg";
import iconDumbbell from "../../assets/icons/fitness.svg";
import { Link } from "react-router-dom";

/**
 * It returns a styled sidebar with a sidebar container that contains a sidebar links section and a
 * sidebar copyright section.
 * @returns A styled component.
 */
export default function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarContainer>
        <SidebarLinks>
          <SidebarLink to="/">
            <SidebarLinkIcon src={iconMeditate} />
          </SidebarLink>
          <SidebarLink to="/">
            <SidebarLinkIcon src={iconSwim} />
          </SidebarLink>
          <SidebarLink to="/">
            <SidebarLinkIcon src={iconBike} />
          </SidebarLink>
          <SidebarLink to="/">
            <SidebarLinkIcon src={iconDumbbell} />
          </SidebarLink>
        </SidebarLinks>
        <SidebarCopyright>Copyright, SportSee 2020</SidebarCopyright>
      </SidebarContainer>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.nav``;

const SidebarContainer = styled.div`
  background-color: #020203;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 117px;
  height: calc(100vh - 108px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transform: translateY(-25%);
  padding: 0;
`;

const SidebarLink = styled(Link)``;

const SidebarLinkIcon = styled.img``;

const SidebarCopyright = styled.p`
  color: white;
  font-size: 0.75rem;
  font-family: "Roboto", sans-serif;
  position: absolute;
  white-space: nowrap;
  transform: rotate(-90deg);
  bottom: 6rem;
`;
