import React from 'react';
import Plot from 'react-plotly.js';

const Ratings = (props) => {
    const data = [{
        type: 'bar',
        x: props.ratings,
        y: props.ratingCount,
    }];

    const layout = {
        title: 'Number of Ratings',
        autosize: true,
    };

    return (
        <Plot
            data={data}
            layout={layout}
        />
    )
}

export default Ratings;
