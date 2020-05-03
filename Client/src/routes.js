import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/ClientArea';
import Search from './pages/Search';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/search" exact component={Search} />
      </Switch>
    </BrowserRouter>
  );
}