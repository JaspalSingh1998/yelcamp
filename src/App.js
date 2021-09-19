import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import AllCamps from "./components/AllCamps";
import SingleCamp from "./components/SingleCamp";
import Landing from "./components/Landing";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import * as ROUTES from "./constants/Routes";

function App() {
  return (
    <div className="font-Archivo container mx-auto py-10 px-5">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <>
            <Navigation />
            <Route exact path={ROUTES.ALLCAMPS} component={AllCamps} />
            <Route exact path={ROUTES.SINGLECAMP} component={SingleCamp} />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
