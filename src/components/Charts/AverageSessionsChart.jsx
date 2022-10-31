import React from "react";

import PropTypes from "prop-types";

import styled from "styled-components";

import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/* A function that takes in a prop called props and returns a styled component called
StyledAverageSessions. */
export default function AverageSessionsChart(props) {
  let { averageSessions } = props;

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
            type={"monotone"}
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
            cursor={<CustomizedCursor />}
            cursorStyle={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 20
            }}
            wrapperStyle={{ outline: 'none' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </StyledAverageSessions>
  );
}

AverageSessionsChart.propTypes = {
  averageSessions: PropTypes.arrayOf(PropTypes.shape({
    day: PropTypes.string.isRequired,
    sessionLength: PropTypes.number.isRequired
  }).isRequired).isRequired
};

/**
 * If the active prop is true and the payload prop is not null, return a TooltipContainer component
 * with the value of the first element in the payload array.
 * @returns A function that takes in an object with two properties: active and payload.
 */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
  }
  return null;
};


/**
 * CustomizedCursor is a function that takes in two props, points and width, and returns a rectangle
 * with a width of width + 20, a height of 400, an x value of X - 9, and a y value of Y - 70, and a
 * style of a red background with an opacity of 0.1.
 * @returns A Rectangle component with a width of width + 20, a height of 400, an x value of X - 9, a y
 * value of Y - 70, and a style of background: "red", opacity: 0.1.
 */
function CustomizedCursor({ points, width }) {
  const X = points[0].x;
  const Y = points[0].y;
  return (
    <Rectangle
      width={width + 20}
      height={400}
      x={X - 9}
      y={Y - 70}
      style={{ background: "red", opacity: 0.1 }}
    />
  );
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};



const StyledAverageSessions = styled.div`
  position: relative;
  background: red;
  border-radius: 5px;
  width: 20vh;
  aspect-ratio: 1;
  
  @media screen and (min-width: 1280px) {
    width: 25vh;
  }
`;
const AverageSessionsTitle = styled.h2`
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  @media screen and (min-width: 1280px) {
    font-size: 1rem;
  }
`;
const AverageSessionsNewLine = styled.br``;
const TooltipContainer = styled.div`
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background: #fff;
`;
