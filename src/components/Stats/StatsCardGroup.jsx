/**
 * @file StatsCardGroup.jsx It displays a styled  with the 4 components: calorie, protein, carbohydrate and lipids
 * @author Behar Rahala AbdelKader
 * @see https://github.com/Kuznetsov-100-Rads-Bar/P12-SportSee-OCR/blob/main/src/components/Stats/StatsCardGroup.jsx
 */

/* Importing the React library. */
import React from 'react'
/* A library that allows you to check the types of the props that you are passing to a component. */
import PropTypes from "prop-types";

/* Importing the StatsCard component from the StatsCard.js file. */
import StatsCard from './StatsCard'

/* Importing the styled-components library. */
import styled from 'styled-components'


/* A function that returns a styled component. */
export default function StatsCardGroup(props) {
    const keyData = props.keyData;


/* Returning a styled component. */
    return (
        <StyledStatsCardGroup>
            <StatsCard
                value={keyData.calorieCount}
                unit="kCal"
                name="Calories"
            />
            <StatsCard
                value={keyData.proteinCount}
                unit="g"
                name="Proteines"
            />
            <StatsCard
                value={keyData.carbohydrateCount}
                unit="g"
                name="Glucides"
            />
            <StatsCard
                value={keyData.lipidCount}
                unit="g"
                name="Lipides"
            />
        </StyledStatsCardGroup>
    )
}

/* A way to check the type of the props that you are passing to a component. */
StatsCardGroup.propTypes = {
    keyData: PropTypes.shape({
        calorieCount: PropTypes.number.isRequired,
        carbohydrateCount: PropTypes.number.isRequired,
        lipidCount: PropTypes.number.isRequired,
        proteinCount: PropTypes.number.isRequired
    }).isRequired
};


const StyledStatsCardGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  flex: 1;
`;
