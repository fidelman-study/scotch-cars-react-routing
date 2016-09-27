import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
// Import routing components
import { Router, Route, Redirect, IndexRedirect, IndexRoute, hashHistory, browserHistory } from 'react-router';
// Import Custom Components
import Home from './common/home.component.jsx';
import About from './common/about.component.jsx';
import Car from './car/car.component.jsx';



render(
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/car" component={Car} />
        <Route path="/about" component={About} />
    </Router>




    , document.getElementById('container'));
