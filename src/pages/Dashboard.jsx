/**
 * @file Dashboard.jsx is the homepage of the application with all charts
 * @author Behar Rahala AbdelKader
 * @see https://github.com/Kuznetsov-100-Rads-Bar/P12-SportSee-OCR/blob/main/src/pages/Dashboard.jsx
 */

import React from "react";

import styled from "styled-components";

import Header from "../components/Header/Header";
import ActivitiesChart from "../components/Charts/ActivitiesChart";
import AverageSessionsChart from "../components/Charts/AverageSessionsChart";
import DailyActivityChart from "../components/Charts/DailyActivityChart";
import ScoreChart from "../components/Charts/ScoreChart";
import Sidebar from "../components/Sidebar/Sidebar";
import StatsCardGroup from "../components/Stats/StatsCardGroup";
import PropTypes from 'prop-types'


export default function Dashboard(props) {
  const { dailyActivities, averageSessions, activities } = props;
  const { firstName, todayScore, keyData } = props.userInfos;
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
                  {firstName}
                </DashboardProfileSpan>
              </DashboardProfile>
              <DashboardSlogan>
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </DashboardSlogan>
            </DashboardAbout>
            <DashboardWrapper>
              <DashboardCharts>
                <DailyActivityChart dailyActivities={dailyActivities} />
                <DailyChartsWrapper>
                  <AverageSessionsChart averageSessions={averageSessions} />
                  <ActivitiesChart performances={activities} />
                  <ScoreChart todayScore={todayScore} />
                </DailyChartsWrapper>
              </DashboardCharts>
              <StatsCardGroup keyData={keyData} />
            </DashboardWrapper>
          </DashboardRight>
      </DashboardContainer>
    </StyledDashboard>
  );
}

Dashboard.propTypes = {
  userInfos: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired
    }).isRequired,
    todayScore: PropTypes.number.isRequired
  }).isRequired
}

const StyledDashboard = styled.div``;

const DashboardContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-right: 30px;
`;

const DashboardLeft = styled.aside``;

const DashboardRight = styled.div`
  padding: 30px 30px 0 30px;
  width: 100%;
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
  font-size: 18px;
  font-weight: 300;
  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

const DashboardWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr;
    gap: 50px;
    margin-top: 32px;
  }
`;
const DashboardCharts = styled.div`
  width: 100%;
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    flex-wrap: nowrap;
    height: 100%;
    gap: 28px;
  }
`;
const DailyChartsWrapper = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;
