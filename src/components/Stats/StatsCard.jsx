/**
 * @file StatsCard.jsx It displays a styled div with an image and a value
 * @author Behar Rahala AbdelKader
 * @see https://github.com/Kuznetsov-100-Rads-Bar/P12-SportSee-OCR/blob/main/src/components/Stats/StatsCard.jsx
 */

import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

/**
 * It returns a styled div with an image and a value
 * @returns A component that is a styled div with a styled div inside of it.
 */
export default function StatsCard(props) {
/* Destructuring the props object. */
  const { value, name, unit } = props;

/* A ternary operator. It is a shorthand if/else statement. */
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

/* A propTypes object. It is used to validate the props that are passed to the component. */
StatsCard.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired
}

const StyledStatsCard = styled.div`
    display: flex;
    align-items: center;
    padding: 2vh 3vh;
    background: #fbfbfb;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
    border-radius: 5px;
`;
const StatsCardIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
`;
const StatsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 24px;
`;
const StatsCardIconImage = styled.img`
  padding: 21px;
  width: 24px;
  background-color: ${(props) => props.bgColor};
  border-radius: 6px;
  margin: 0;
`;
const StatsCardValue = styled.h2`
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 20px;
    color: #282D30;
`;
const StatsCardName = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  color: #74798C;
`;
