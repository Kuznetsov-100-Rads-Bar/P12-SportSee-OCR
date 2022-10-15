import React from "react";
import { useParams, Navigate } from "react-router-dom";

import styled from "styled-components";

import Header from "../components/Header/Header";
import ActivitiesChart from "../components/Charts/ActivitiesChart";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart";
import DailyActivityChart from "../components/Charts/DailyActivityChart";
import ScoreChart from "../components/Charts/ScoreChart";
import Sidebar from "../components/Sidebar/Sidebar";
import StatsCardGroup from "../components/Stats/StatsCardGroup";

import { useSportSeeAPI } from "../services/useSportSeeAPI";

export default function Dashboard() {
  const { id } = useParams();
  const parsedId = parseInt(id);
  const { data, isLoading, error } = useSportSeeAPI("firstName", parsedId);

  let firstName = data;

  if (error || firstName === "unknown user") {
    return <Navigate to='user/12' />
  }

  return (
    <StyledDashboard>
      <Header />
      <DashboardContainer>
        <DashboardLeft>
          <Sidebar />
        </DashboardLeft>
        <DashboardRight>
          <DashboardAbout>
            <DashboardProfile>
              Bonjour{" "}
              <DashboardProfileSpan>
                {!isLoading && firstName}
              </DashboardProfileSpan>
            </DashboardProfile>
            <DashboardSlogan>
              {isLoading || firstName === "unknown user" ? null : "Félicitation ! Vous avez explosé vos objectifs hier 👏"}
            </DashboardSlogan>
          </DashboardAbout>
          <DashboardWrapper>
            <DashboardCharts>
              <DailyActivityChart userId={parsedId} />
              <DailyChartsWrapper>
                <AverageSessionsChart userId={parsedId} />
                <ActivitiesChart userId={parsedId} />
                <ScoreChart userId={parsedId} />
              </DailyChartsWrapper>
            </DashboardCharts>
            <StatsCardGroup userId={parsedId} />
          </DashboardWrapper>
        </DashboardRight>
      </DashboardContainer>
    </StyledDashboard>
  );
}

const StyledDashboard = styled.div``;

const DashboardContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const DashboardLeft = styled.aside``;

const DashboardRight = styled.div`
  padding: 30px 30px 0 30px;

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
  }
`;

const DashboardAbout = styled.div``;

const DashboardProfile = styled.h1`
  margin: 0;
  font-size: 3rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
`;

const DashboardProfileSpan = styled.span`
  color: #ff0101;
  font-weight: 500;
`;

const DashboardSlogan = styled.p`
  margin: 20px 0 0 0;
  font-family: "Roboto", sans-serif;
`;

const DashboardWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;
const DashboardCharts = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 60px 0 0 0;
  }
`;
const DailyChartsWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;