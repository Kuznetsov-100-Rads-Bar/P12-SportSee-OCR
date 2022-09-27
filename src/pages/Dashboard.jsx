import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Dashboard() {
  return (
    <StyledDashboard>
      <div className='dashboard-left'>
        <Sidebar />
        </div>
        <div className="dashboard-right">
                  
        <h1 className='dashboardProfile'>Bonjour <span className='dashboardProfileUsername'>Thomas</span></h1>
        <p className='dashboardSlogan'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
        
    </StyledDashboard>
  )
}

const StyledDashboard = styled.section`display: flex`;

