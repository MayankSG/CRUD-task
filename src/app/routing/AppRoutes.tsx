import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import CreateItem from '../../pages/createItem/CreateItem';
import ItemDetails from '../../pages/itemDetails/ItemDetails';
import HomeContainer from '../../pages/home/HomeContainer';
import { AppRoute } from './AppRoute.enum';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path={AppRoute.home} component={HomeContainer} />
      <Route path={AppRoute.create} component={CreateItem} />
      <Route path={`${AppRoute.details}/:itemId`} component={ItemDetails} />
      <Redirect to={AppRoute.home} />
    </Switch>
  </Router>
);

export default AppRoutes;
