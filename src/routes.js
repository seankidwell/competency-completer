import React from 'react';
import {Switch, Route} from 'react-router-dom';
import StatePage from './components/StatePage/StatePage';

export default (
  <Switch>
    <Route path={'/state'} component={StatePage}/>
  </Switch>
)