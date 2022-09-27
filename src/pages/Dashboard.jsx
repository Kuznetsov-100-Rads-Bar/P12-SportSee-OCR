import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Dashboard() {
  return (
    <StyledDashboard>
      <DashboardLeft>
        <Sidebar />
      </DashboardLeft>
      <DashboardRight>
        <DashboardProfile>Bonjour </DashboardProfile><DashboardProfilUserName>Thomas</DashboardProfilUserName>
        <DashboardSlogan>Félicitation ! Vous avez explosé vos objectifs hier 👏</DashboardSlogan>
      </DashboardRight>
    </StyledDashboard>
  )
}

const StyledDashboard = styled.section`display: flex`;

const DashboardLeft = styled.aside``;

const DashboardRight = styled.div``;

const DashboardProfile = styled.h1``;

const DashboardProfilUserName = styled.span`color: #ff0101`;

const DashboardSlogan = styled.p``;
