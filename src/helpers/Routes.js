import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Home from '../views/Home';

export default function Routes({ user }) {
  return (
    <Switch>
      <Route
      exact
      path='/'
      component={() => <Home user={user} />}/>
      <Route component={NotFound} />
    </Switch>
  );
}
