import React from "react";

import PropTypes from "prop-types";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styled from "styled-components";

/* A function that returns a component. */
export default function DailyActivityChart(props) {
  const { dailyActivities } = props;

  return (
    <StyledDailyActivityChart>
      <DailyActivityChartHeader>
        <DailyActivityChartHeaderTitle>
          Activité quotidienne
        </DailyActivityChartHeaderTitle>
        <DailyActivityChartHeaderLegends>
          <DailyActivityChartHeaderLegendsInfo>
            <DailyActivityChartHeaderLegendsInfoBullet
              style={{ background: "#282D30" }}
            />
            Poids (kg)
          </DailyActivityChartHeaderLegendsInfo>
          <DailyActivityChartHeaderLegendsInfo>
            <DailyActivityChartHeaderLegendsInfoBullet
              style={{ background: "#E60000" }}
            />
            Calories brûlées (kCal)
          </DailyActivityChartHeaderLegendsInfo>
        </DailyActivityChartHeaderLegends>
      </DailyActivityChartHeader>
      <DailyActivityChartContent>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            margin={{ top: 0, right: 48, bottom: 16, left: 48 }}
            barGap={8}
            barCategoryGap="35%"
            data={dailyActivities}>

            {/* data={dailyActivity}
            margin={{ top: 80, right: 48, bottom: 32, left: 48 }}
            barGap={8}
            barCategoryGap="35%" */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#dedede"
            />
            <XAxis
              dataKey={"day"}
              tickFormatter={(value) => {
                const splittedValue = value.split('-');
                return splittedValue[2].charAt(0) === '0' ? splittedValue[2].replace('0', '')
                  : splittedValue[2]
              }}
              dy={12}
              padding={{ left: -48, right: -48 }}
              stroke="#9b9eac"
              tickLine={false}
              tick={{ fontSize: 14, fontWeight: 500 }}
            />
            <YAxis
              yAxisId="kg"
              dataKey="kilogram"
              domain={["dataMin - 1", "dataMax + 2"]}
              allowDecimals={false}
              dx={48}
              orientation="right"
              stroke="#9b9eac"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="cal"
              dataKey="calories"
              domain={[0, "dataMax + 50"]}
              hide={true}
            />
            <Bar
              yAxisId="kg"
              dataKey="kilogram"
              barSize={8}
              fill="#2b2d30"
              radius={[50, 50, 0, 0]}
            />
            <Bar
              yAxisId="cal"
              dataKey="calories"
              barSize={8}
              fill="#ff0101"
              radius={[50, 50, 0, 0]}
            />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              cursor={{ fill: "rgba(0, 0, 0, 0.1)" }}
              viewBox={{ x: 0, y: 0 }}
              contentStyle={{
                backgroundColor: "#E60000",
                padding: "8px 6px",
                border: "none",
              }}
              itemStyle={{ fontSize: "12px", color: "white", fontWeight: 300 }}
              labelFormatter={(value) => ""}
              formatter={(value, name, props) => [
                name === "kilogram"
                  ? `${value}kg`
                  : name === "calories"
                    ? `${value}Kcal`
                    : null,
              ]}
            />
          </BarChart>
        </ResponsiveContainer>
      </DailyActivityChartContent>
    </StyledDailyActivityChart>
  );
}

DailyActivityChart.propTypes = {
  dailyActivities: PropTypes.arrayOf(PropTypes.shape({
    calories: PropTypes.number.isRequired,
    day: PropTypes.string.isRequired,
    kilogram: PropTypes.number.isRequired
  }).isRequired).isRequired
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <TooltipContainer>
        <TooltipLine background="#2b2d30">
          {`${payload[0].value} kg`}
        </TooltipLine>
        <TooltipLine background="#ff0101">
          {`${payload[1].value} kCal`}
        </TooltipLine>
      </TooltipContainer>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const DailyActivityChartContent = styled.div`
    height: 200px;
    width: 100%;
    margin-top: 32px;
`

const StyledDailyActivityChart = styled.div`
    width: 100%;
    height: 30vh;
    background: #fbfbfb;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`;
const DailyActivityChartHeader = styled.div`
  display: flex;
  align-items: center;
`;
const DailyActivityChartHeaderTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.938rem;
  color: #20253a;
  margin: 24px 0 0 32px;
`;
const DailyActivityChartHeaderLegends = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 auto;
  gap: 30px;
  margin-top: 24px;
  margin-right: 32px;
`;
const DailyActivityChartHeaderLegendsInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  color: #74798c;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const DailyActivityChartHeaderLegendsInfoBullet = styled.div`
  border-radius: 100px;
  height: 8px;
  width: 8px;
`;

const TooltipContainer = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const TooltipLine = styled.div`
  padding: 0.75rem;
  margin: 0;
  color: white;
  font-size: 0.7rem;
  font-weight: 500;
  background: ${(props) => props.background};
`;
