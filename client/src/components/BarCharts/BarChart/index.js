import React from 'react';
import Plot from 'react-plotly.js';

// component to handle creating any type of bar chart
// props passed in are the lists for the x & y axis
// and title of the chart
const BarChart = (props) => {
    const data = [{
        type: 'bar',
        x: props.xList,
        y: props.yList
    }];

    const layout = {
        title: props.title,
        autosize: true,
    };

    return (
        <Plot
            data={data}
            layout={layout}
        />
    )
}

export default BarChart;