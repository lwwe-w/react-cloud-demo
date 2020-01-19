import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/home";
import Login from "pages/login";

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Login} />
        <Route path={`/home`} component={Home} />
      </Switch>
    </Router>
  );
};
export default AppRoute;
