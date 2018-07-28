import React from 'react';
import Plot from 'react-plotly.js';

const ChoroplethMap = (props) => {
    const data =[{
        type: 'choropleth',
        locationmode: 'USA-states',
        locations: props.locations,
        z: props.values,
        text: props.locations,
        zmin: 0,
        zmax: 17000,
        colorscale: [
            [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
            [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
            [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
        ],
        colorbar: {
            title: 'Store Count',
            thickness: 0.2
        },
        marker: {
            line: {
                color: 'rgb(255,255,255)',
                width: 2,
            }
        }
    }];
    
    const layout = {
        title: 'Choropleth Map of # of Stores by State',
        geo: {
            scope: 'usa',
            showlakes: true,
            lakecolor: 'rgb(255,255,255)'
        }
    }

    return (
        <Plot
            data={data}
            layout={layout}
        />
    )
}

export default ChoroplethMap;
