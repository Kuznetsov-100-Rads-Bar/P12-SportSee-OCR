/**
 * @file NotFoundPage.jsx is the page that display if number of user doesn't exist
 * @author Behar Rahala AbdelKader
 * @see https://github.com/Kuznetsov-100-Rads-Bar/P12-SportSee-OCR/blob/main/src/pages/NotFoundPage.jsx
 */
import React from "react";

import styled from "styled-components";

import Header from "../components/Header/Header";
import NotFound from "../components/NotFound/NotFound.component";
import Sidebar from "../components/Sidebar/Sidebar";

/**
 * It's a function that returns a component that displays a dashboard.
 * @returns The data is being returned as a string.
 */
export default function NotFoundPage() {
  return (
    <StyledDashboard>
      <Header />
      <DashboardContainer>
        <DashboardLeft>
          <Sidebar />
        </DashboardLeft>
        <DashboardRight>
          <NotFound />
        </DashboardRight>
      </DashboardContainer>
    </StyledDashboard>
  );
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
