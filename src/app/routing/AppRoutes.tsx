import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import CreateContainer from '../../pages/create/CreateContainer';
import DetailsContainer from '../../pages/details/DetailsContainer';
import HomeContainer from '../../pages/home/HomeContainer';
import { AppRoute } from './AppRoute.enum';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path={AppRoute.home} component={HomeContainer} />
      <Route path={AppRoute.create} component={CreateContainer} />
      <Route path={`${AppRoute.details}/:itemId`} component={DetailsContainer} />
      <Redirect to={AppRoute.home} />
    </Switch>
  </Router>
);

export default AppRoutes;
