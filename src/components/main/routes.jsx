import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../app';
import PlanetFeed from '../planets/planetFeed';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/feed" component={PlanetFeed} />
            <Route path="*" component={App} />
        </Switch>
    </Router>
);

export default Routes;

