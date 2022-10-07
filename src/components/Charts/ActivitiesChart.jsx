import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import styled from "styled-components";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { USER_PERFORMANCE } from "../../data/MockedData";

const ACTIVITIES_ORDER_IN_CHART = [
  {
    value: "Cardio",
    kind: 1,
  },
  {
    value: "Energie",
    kind: 2,
  },
  {
    value: "Endurance",
    kind: 3,
  },
  {
    value: "Force",
    kind: 4,
  },
  {
    value: "Rapidité",
    kind: 5,
  },
  {
    value: "Intensité",
    kind: 6,
  },
];

export default function ActivitiesChart({ userId }) {
  const [orderedActivities, setOrderedActivities] = useState([]);

  const activities = USER_PERFORMANCE.find((data) => data.userId === userId);

  // useEffect(() => {
  let array = [];
  for (let activity of ACTIVITIES_ORDER_IN_CHART) {
    for (let item of activities.data) {
      if (item.kind === activity.kind) {
        array.push({
          activity: activity.value,
          value: item.value,
        });
      }
    }
  }
  // setOrderedActivities(array);
  // }, [activities]);

  //probleme de connexion ?
  // https://meet.google.com/ekr-jxjj-mns

  return (
    <StyledActivitiesChart>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          // data={orderedActivities}
          data={array}
          outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="activity"
            stroke="white"
            dy={4}
            tickLine={false}
            tick={{
              fontSize: 12,
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
  userId: PropTypes.number.isRequired,
};

const StyledActivitiesChart = styled.div`
  background: #2b2d30;
  border-radius: 5px;
  height: 263px;
  width: 258px;
`;
