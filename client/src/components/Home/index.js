import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Map from '../Map';
import BarCharts from '../BarCharts';
import ChoroplethMap from '../ChoroplethMap';

import {
    storesByState
} from '../../helper';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bobaStores: [],
            latList: [],
            lonList: [],
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
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        console.log(this.state.bobaStores);
        const stores = storesByState(this.state.bobaStores);
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>BobaPlot</h1>
                            <p>Various graphs to visualize data of boba stores across the United States</p>
                            <Map
                                lonList={this.state.lonList}
                                latList={this.state.latList}
                                names={this.state.names}
                            />
                            <ChoroplethMap
                                locations={Object.keys(stores)}
                                values={Object.values(stores)}
                            />
                        </div>
                        <Row>
                            <BarCharts
                                data={this.state.bobaStores}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
