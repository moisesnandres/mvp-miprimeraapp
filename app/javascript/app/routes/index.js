import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import App from '../components/app';
import ProjectIndex from '../components/projects/';
import ProjectShow from '../components/projects/show'
import NotFound from '../components/public-pages/not-found';


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/projects/:id" component={ProjectShow} />
      <Route path="/projects" component={ProjectIndex} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)