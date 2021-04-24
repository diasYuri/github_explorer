import React from 'react';
import {Switch, Route} from 'react-router-dom'


import { Dashboard } from '../pages/dashboard'
import {Repository} from '../pages/repository'


export const Router: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository } />
  </Switch>
);
