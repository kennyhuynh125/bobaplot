import React, { Component } from 'react';
import { Route } from 'react-router';

import Home from '../Home';

class Main extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
            </div>
        )
    }
}

export default Main;
