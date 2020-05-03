import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Dashboard from './pages/Dashboard';
import Offer from './pages/Offer';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/offer" exact component={Offer} />
      </Switch>
    </BrowserRouter>
  );
}