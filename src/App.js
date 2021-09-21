import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import AllCamps from "./components/AllCamps";
import SingleCamp from "./components/SingleCamp";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import * as ROUTES from "./constants/Routes";
import { withAuthentication } from "./components/Session";
import AddCampground from "./components/AddCampground";
import AddComment from "./components/AddComment";

function App() {
  return (
    <div className="font-Archivo">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <React.Fragment>
            <Navigation />
            <Route exact path={ROUTES.ALLCAMPS} component={AllCamps} />
            <Route exact path={ROUTES.SINGLECAMP} component={SingleCamp} />
            <Route
              exact
              path={ROUTES.ADDCAMPGROUND}
              component={AddCampground}
            />
            <Route exact path={ROUTES.ADDCOMMENT} component={AddComment} />
          </React.Fragment>
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthentication(App);
