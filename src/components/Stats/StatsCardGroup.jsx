import React from 'react'
import PropTypes from "prop-types";

import StatsCard from './StatsCard'

import styled from 'styled-components'

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

StatsCardGroup.propTypes = {
    userId: PropTypes.number.isRequired,
};


const StyledStatsCardGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
