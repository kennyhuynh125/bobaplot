import React from 'react';
import {
    strToNum,
    storesByRatings,
    storesByState,
} from '../../helper';

import Ratings from './Ratings';
import StoresByState from './StoresByState';

const BarCharts = (props) => {
    const data = strToNum(props.data);
    const numStoresByRatings = storesByRatings(data);
    const numStoresByState = storesByState(data);
    return (
        <div>
            <h1>Bar charts</h1>
            <Ratings
                ratings={Object.keys(numStoresByRatings)}
                ratingCount={Object.values(numStoresByRatings)}
            />
            <StoresByState
                states={Object.keys(numStoresByState)}
                stateCount={Object.values(numStoresByState)}
            />
        </div>
    );
}

export default BarCharts;
