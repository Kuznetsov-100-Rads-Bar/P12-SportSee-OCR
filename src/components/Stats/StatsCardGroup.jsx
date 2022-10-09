/* Importing the React library. */
import React from 'react'
/* A library that allows you to check the types of the props that you are passing to a component. */
import PropTypes from "prop-types";

/* Importing the StatsCard component from the StatsCard.js file. */
import StatsCard from './StatsCard'

/* Importing the styled-components library. */
import styled from 'styled-components'

/* Importing the `getDefaultKeyData` and `useSportSeeAPI` functions from the `useSportSeeAPI.js` file. */
import { getDefaultKeyData, useSportSeeAPI } from '../../services/useSportSeeAPI'

export default function StatsCardGroup({ userId }) {
    const { data, isLoading, error } = useSportSeeAPI("key-data", userId);

    let keyData = data;

    if (error || isLoading) {
        keyData = getDefaultKeyData();
    }

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
    userId: PropTypes.number.isRequired,
};


const StyledStatsCardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
