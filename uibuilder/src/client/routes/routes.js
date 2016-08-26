'use strict';

import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import HomePage from './HomePage.js';
import Projects from './Projects.js';
import OpenTasks from './OpenTasks.js';
import YourTasks from './YourTasks.js';
import MentorLandingPage from './MentorLandingPage.js';

export default function() {
    const history = useRouterHistory(createHistory)();
    return (
        <Router onUpdate={ () => window.scrollTo(0, 0) } history={ history }>
            <Route path="/" component="div">
                <IndexRoute component={ HomePage } />
                <Route path="/home" component={ HomePage } />
                <Route path="/projects" component={ Projects } />
                <Route path="/opentasks" component={ OpenTasks } />
                <Route path="/:name" component={ YourTasks } />
                <Route path="/mentor" component={ MentorLandingPage } />
                <Route path="*" component={ HomePage } />
            </Route>
        </Router>
        );
}