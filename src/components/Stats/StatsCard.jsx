import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export default function StatsCard({ value, name, unit }) {
  const bgColor =
    name === "Calories"
      ? "rgba(235, 64, 52, 0.1);"
      : name === "Proteines"
        ? "rgba(74, 184, 255, 0.1);"
        : name === "Glucides"
          ? "rgba(252, 186, 3, 0.1)"
          : "rgba(253, 81, 129, 0.1);";
  return (
    <StyledStatsCard>
      <StatsCardIcon>
        <StatsCardIconImage
          bgColor={bgColor}
          src={`${process.env.PUBLIC_URL
            }/assets/icons/${name.toLowerCase()}.svg`}
        />
      </StatsCardIcon>
      <StatsCardWrapper>
        <StatsCardValue>
          {value}
          {unit}
        </StatsCardValue>
        <StatsCardName>{name}</StatsCardName>
      </StatsCardWrapper>
    </StyledStatsCard>
  );
}

StatsCard.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired
}

const StyledStatsCard = styled.div`
  background-color: #fbfbfb;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 124px;
  width: 258px;
  border-radius: 5px;
  padding: 0 30px;
`;
const StatsCardIcon = styled.div``;
const StatsCardWrapper = styled.div``;
const StatsCardIconImage = styled.img`
  padding: 20px;
  display: block;
  width: 22px;
  height: 22px;
  background-color: ${(props) => props.bgColor};
  border-radius: 6px;
`;
const StatsCardValue = styled.h2`
  font-weight: 500;
  margin: 0;
  width: 100px;
`;
const StatsCardName = styled.p`
  padding: 0;
  margin: 0;
  font-weight: 500;
  color: #74798c;
`;
