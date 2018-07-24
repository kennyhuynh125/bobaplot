import React from 'react';
import {
    strToNum,
    storesByRatings,
    storesByState,
    topTenStores
} from '../../helper';

import Ratings from './Ratings';
import StoresByState from './StoresByState';
import TopTenStores from './TopTenStores';

const BarCharts = (props) => {
    const data = strToNum(props.data);
    const numStoresByRatings = storesByRatings(data);
    const numStoresByState = storesByState(data);
    const topTen = topTenStores(data);
    console.log(topTen);
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
            <TopTenStores
                stores={Object.keys(topTen)}
                count={Object.values(topTen)}
            />
        </div>
    );
}

export default BarCharts;
