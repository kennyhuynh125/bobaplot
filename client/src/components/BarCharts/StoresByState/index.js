import React from 'react';
import Plot from 'react-plotly.js';

const StoresByState = (props) => {
    const data = [{
        type: 'bar',
        x: props.states,
        y: props.stateCount,
    }];

    const layout = {
        title: 'Number of Stores by State',
        autosize: true,
    };

    return (
        <Plot
            data={data}
            layout={layout}
        />
    )
}

export default StoresByState;
