import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Plot from 'react-plotly.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bobaStores: [],
            lat: 51.505,
            lng: -0.09,
            zoom: 13,
            markers: [],
            latList: [],
            lonList: [],
            isLoading: true,
            names: [],
        }
    }

    // when component mounts, get data from api and store latitude, longitude, and names to state
    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/');
            const bobas = await res.json();
            this.setState({
                bobaStores: bobas,
                latList: bobas.map(x => x.latitude),
                lonList: bobas.map(x => x.longitude),
                names: bobas.map(x => x.name),
            });
            this.setMarkers(bobas, (markers) => {
                this.setState({
                    markers: markers,
                    isLoading: false,
                });
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const data = [{
            type: 'scattergeo',
            locationmode: 'USA-states',
            lon: this.state.lonList,
            lat: this.state.latList,
            hoverinfor: this.state.names,
            text: this.state.names,
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
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>BobaPlot</h1>
                            <p>Various graphs to visualize data of boba stores across the United States</p>
                        </div>
                        <Plot
                            data={data}
                            layout={layout}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
