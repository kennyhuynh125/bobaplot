import React from 'react';
import Plot from 'react-plotly.js';

const Map = (props) => {
    const data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lon: props.lonList,
        lat: props.latList,
        hoverinfor: props.names,
        text: props.names,
        mode: 'markers',
        marker: {
            size: 8,
            opacity: 0.8,
            reversescale: true,
            autocolorscale: false,
            symbol: 'square'
        }
    }];

    const layout = {
        title: 'Boba Stores In The United States',
        colorbar: true,
        autosize: true,
        geo: {
            scope: 'usa',
            projection: {
                type: ' albers usa',
            },
            showframe: false,
            showland: true,
            showcoastlines: true,
            landcolor: 'rgb(250,250,250)',
            subunitcolor: 'rgb(217,217,217)',
            countrycolor: 'rgb(217,217,217)',
            countrywidth: 0.5,
            subunitwidth: 0.5
        },
        width: 1000,
        height: 1000,
    };

    return (
        <Plot
            data={data}
            layout={layout}
        />
    )
}

export default Map;
