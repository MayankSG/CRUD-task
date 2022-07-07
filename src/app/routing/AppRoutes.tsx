import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { Loader } from '../../components/Loader';
import { FormType } from '../../utils/constants.enum';
import { AppRoute } from './AppRoute.enum';

const HomeContainer = lazy(() => import('../../pages/home/HomeContainer'));
const FormContainer = lazy(() => import('../../pages/form/FormContainer'));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    <Router>
      <Switch>
        <Route path={AppRoute.home} component={HomeContainer} />
        <Route path={AppRoute.create} component={() => <FormContainer type={FormType.create} />} />
        <Route path={`${AppRoute.details}/:id`} component={() => <FormContainer type={FormType.edit} />} />
        <Redirect to={AppRoute.home} />
      </Switch>
    </Router>
  </Suspense>
);

export default AppRoutes;
