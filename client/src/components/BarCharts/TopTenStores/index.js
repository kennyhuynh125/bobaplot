import React from 'react';
import Plot from 'react-plotly.js';

const TopTenStores = (props) => {
    const data = [{
        type: 'bar',
        x: props.stores,
        y: props.count
    }];

    const layout = {
        title: 'Top Ten Most Stores Across the US',
        autosize: true,
    };

    return (
        <Plot
            data={data}
            layout={layout}
        />
    )
}

export default TopTenStores;
