/**
 * @file ActivitiesCharts.jsx is the file that contains the component with the user's activities chart in the form of radar
 * @author Behar Rahala AbdelKader
 * @see https://github.com/Kuznetsov-100-Rads-Bar/P12-SportSee-OCR/blob/main/src/components/Charts/ActivitiesChart.jsx
 */

import PropTypes from "prop-types";
import React from "react";

import styled from "styled-components";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

/**
 * It's a function that takes a userId as a prop and returns a chart that displays the user's activity
 * data.
 * @returns The return is a chart.
 */
/**
 * It's a function that returns a styled div that contains a responsive container that contains a radar
 * chart that contains a polar grid, a polar angle axis, and a radar.
 * @returns A React component.
 */
export default function ActivitiesChart(props) {
  let { performances } = props;

  return (
    <StyledActivitiesChart>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={performances}
          outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="activity"
            stroke="white"
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 10,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            fill="#ff0101"
            fillOpacity={0.7}
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </StyledActivitiesChart>
  );
}

ActivitiesChart.propTypes = {
  performances: PropTypes.arrayOf(PropTypes.shape({
    activity: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  }).isRequired).isRequired,
};

const StyledActivitiesChart = styled.div`
  background: #2b2d30;
  border-radius: 5px;
  width: 20vh;
  aspect-ratio: 1;
  
  @media screen and (min-width: 1280px) {
    width: 25vh;
  }
`;
