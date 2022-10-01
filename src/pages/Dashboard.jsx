import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Dashboard() {
  return (
    <StyledDashboard>
      <DashboardContainer> 
      <DashboardLeft>
        <Sidebar />
      </DashboardLeft>
      <DashboardRight>
        <DashboardProfile>Bonjour </DashboardProfile><DashboardProfilUserName>Thomas</DashboardProfilUserName>
        <DashboardSlogan>Félicitation ! Vous avez explosé vos objectifs hier 👏</DashboardSlogan>
      </DashboardRight>
      </DashboardContainer>
    </StyledDashboard>
  )
}

const StyledDashboard = styled.section`display: flex`;

const DashboardContainer = styled.div`display: flex;
  gap: 30px`;

const DashboardLeft = styled.aside``;

const DashboardRight = styled.div``;

const DashboardProfile = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-family: "Roboto", sans-serif`;

const DashboardProfilUserName = styled.span`
color: #ff0101`;

const DashboardSlogan = styled.p`
  margin: 20px 0 0 0;
  font-family: "Roboto", sans-serif`;
