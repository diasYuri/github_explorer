import React from 'react';
import {Switch, Route} from 'react-router-dom'


import {Dashboard} from '../pages/dashboard/dashboard'

export const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route />
  </Switch>
);
