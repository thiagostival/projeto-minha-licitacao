import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/ClientArea';
import Search from './pages/Search';
import OrderAbstract from './pages/OrderAbstract';
import Orders from './pages/Order';
import Offers from './pages/Offers';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/search" exact component={Search} />
        <Route path="/dashboard/search/abstract" exact component={OrderAbstract} />
        <Route path="/dashboard/orders" exact component={Orders} />
        <Route path="/dashboard/orders/offers" exact component={Offers} />
      </Switch>
    </BrowserRouter>
  );
}