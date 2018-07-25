import React from 'react';
import {
    strToNum,
    storesByRatings,
    storesByState,
    topTenStores,
    topTenReviewCount
} from '../../helper';

import BarChart from './BarChart';

const BarCharts = (props) => {
    const data = strToNum(props.data);
    const numStoresByRatings = storesByRatings(data);
    const numStoresByState = storesByState(data);
    const topTen = topTenStores(data);
    const tenReviewCount = topTenReviewCount(data);
    console.log(topTen);
    return (
        <div>
            <h1>Bar charts</h1>
            <BarChart
                xList={Object.keys(numStoresByRatings)}
                yList={Object.values(numStoresByRatings)}
                title={'Number of Ratings'}
            />
            <BarChart
                xList={Object.keys(numStoresByState)}
                yList={Object.values(numStoresByState)}
                title={'Number of Stores by State'}
            />
            <BarChart
                xList={Object.keys(topTen)}
                yList={Object.values(topTen)}
                title={'Top Ten Most Stores Across the US'}
            />
            <BarChart
                xList={Object.keys(tenReviewCount)}
                yList={Object.values(tenReviewCount)}
                title={'Top Ten Stores with Most Review Counts'}
            />
        </div>
    );
}

export default BarCharts;
