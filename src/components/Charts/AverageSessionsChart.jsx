import React from "react";

import PropTypes from "prop-types";

import styled from "styled-components";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { USER_AVERAGE_SESSIONS } from "../../data/MockedData";

export default function AverageSessionsChart({ userId }) {
  const averageSessions = USER_AVERAGE_SESSIONS.find(
    (data) => data.userId === userId
  ).sessions;

  return (
    <StyledAverageSessions>
      <AverageSessionsTitle>
        Durée moyenne des
        <AverageSessionsNewLine />
        sessions
      </AverageSessionsTitle>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={averageSessions}
          outerRadius="75%"
          margin={{ top: 0, right: 12, bottom: 21, left: 12 }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            dy={10}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 60"]}
            hide={true}
          />
          <Line
            dataKey="sessionLength"
            type={`${userId === "18" ? "step" : "monotone"}`}
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255, 255, 255, 0.6)",
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </StyledAverageSessions>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

AverageSessionsChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

const StyledAverageSessions = styled.div`
  position: relative;
  background: red;
  border-radius: 5px;
  height: 263px;
  width: 258px;
`;
const AverageSessionsTitle = styled.h2`
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
`;
const AverageSessionsNewLine = styled.br``;
const TooltipContainer = styled.div`
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background: #fff;
`;
