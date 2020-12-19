import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Home from '../views/Home';
import GearDetailsToPrint from '../components/PrintDetails';
import GearForm from '../components/GearForm';
import CollectionContainer from '../components/CollectionContainer';
import TourContainer from '../components/TourContainer';
import TourDetails from '../views/TourDetails';

export default function Routes({ user }) {
  return (
    <Switch>
      <Route exact path='/' component={() => <Home user={user} />} />
      <Route
        exact
        path='/collection'
        component={() => <CollectionContainer user={user} />}
      />
      <Route
        exact
        path='/gear/:id'
        component={(props) => <GearDetailsToPrint user={user} {...props} />}
      />
      <Route
        exact
        path='/gear-form'
        component={(props) => <GearForm user={user} {...props} />}
      />
      <Route
        exact
        path='/tour'
        component={() => <TourContainer user={user} />}
      />
      <Route
        exact
        path='/tour/:id'
        component={(props) => <TourDetails user={user} {...props} />}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
