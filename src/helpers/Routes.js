import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Home from '../views/Home';
import GearDetails from '../views/GearDetails';

export default function Routes({ user }) {
  return (
    <Switch>
      <Route
      exact
      path='/'
      component={() => <Home user={user} />}/>
      <Route
      exact
      path='/gear/:id'
      component={(props) => <GearDetails user={user} {...props} />}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
