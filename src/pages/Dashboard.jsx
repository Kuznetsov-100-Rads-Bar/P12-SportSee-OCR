import React from "react";
import styled from "styled-components";
import ActivitiesChart from "../components/Charts/ActivitiesChart";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart";
import DailyActivityChart from "../components/Charts/DailyActivityChart";
import ScoreChart from "../components/Charts/ScoreChart";
import Sidebar from "../components/Sidebar/Sidebar";
import StatsCard from "../components/Stats/StatsCard";
import { USER_MAIN_DATA } from "../data/MockedData";

export default function Dashboard() {
  const userId = 12;
  const data = USER_MAIN_DATA.find((data) => data.id === userId);
  return (
    <StyledDashboard>
      <DashboardContainer>
        <DashboardLeft>
          <Sidebar />
        </DashboardLeft>
        <DashboardRight>
          <DashboardAbout>
            <DashboardProfile>
              Bonjour{" "}
              <DashboardProfileSpan>
                {data.userInfos.firstName}
              </DashboardProfileSpan>
            </DashboardProfile>
            <DashboardSlogan>
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </DashboardSlogan>
          </DashboardAbout>
          <DashboardWrapper>
            <DashboardCharts>
              <DailyActivityChart userId={12} />
              <DailyChartsWrapper>
                <AverageSessionsChart userId={12} />
                <ActivitiesChart userId={12} />
                <ScoreChart userId={12} />
              </DailyChartsWrapper>
            </DashboardCharts>
            <DashboardStats>
              <StatsCard
                value={data.keyData.calorieCount}
                unit="kCal"
                name="Calories"
              />
              <StatsCard
                value={data.keyData.proteinCount}
                unit="g"
                name="Proteines"
              />
              <StatsCard
                value={data.keyData.carbohydrateCount}
                unit="g"
                name="Glucides"
              />
              <StatsCard
                value={data.keyData.lipidCount}
                unit="g"
                name="Lipides"
              />
            </DashboardStats>
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
`;

const DashboardProfileSpan = styled.span`
  color: #ff0101;
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
const DashboardStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
