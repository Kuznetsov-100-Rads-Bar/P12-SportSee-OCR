import PropTypes from "prop-types";
import React from "react";

import styled from "styled-components";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

/* A function that returns a styled component. */
export default function ScoreChart(props) {
  const todayScore = parseFloat(props.todayScore);
  
  return (
    <StyledScoreChart>
      <ScoreChartTitle>Score</ScoreChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={'100%'} height={'100%'}>
          <Pie
            data={[
              { value: todayScore },
              { value: 1 - todayScore }
            ]}
            dataKey="value"
            innerRadius={'65%'}
            cornerRadius={50}
            outerRadius={'75%'}
            startAngle={90}
            endAngle={450}
          >
            <Cell fill={'#ff0101'} radius={50} />
            <Cell fill={'transparent'} radius={50} />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ScoreChartKPI>
        <ScoreChartKPIValue>{`${todayScore * 100}%`}</ScoreChartKPIValue>
        {/* <ScoreChartNewLine /> */}
        de votre
        <ScoreChartNewLine />
        objectif
      </ScoreChartKPI>
    </StyledScoreChart>
  );
}

ScoreChart.propTypes = {
  todayScore: PropTypes.number.isRequired,
};

const StyledScoreChart = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbfbfb;
  border-radius: 5px;
  width: 20vh;
  aspect-ratio: 1;
  
  @media screen and (min-width: 1280px) {
    width: 25vh;
  }
`;
const ScoreChartTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #20253a;
  position: absolute;
  top: 12px;
  left: 16px;
  margin: 0;
`;
const ScoreChartNewLine = styled.br``;
const ScoreChartKPI = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0;
  font-size: 14px;
  color: #74798c;
  font-weight: 500;
  text-align: center;
  font-family: "Roboto", sans-serif;
  line-height: 20px;
`;
const ScoreChartKPIValue = styled.div`
  margin: 0;
  color: #282d30;
  font-weight: 700;
  text-align: center;
  font-size: 18px;
`;
