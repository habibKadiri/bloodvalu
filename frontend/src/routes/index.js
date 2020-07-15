import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Template from "../components/Test";
import Credentials from "../components/Credentials";
import Navigation from "../components/Navigation";
import { LandingPage } from "../components/LandingPage";
import {
  DonorValidationPageOne,
  DonorValidationPageTwo,
} from "../components/Credentials/ValidationDonor";
import GenericDonorRequestBar from "../components/GenericDonorRequestBar";
import CreateTestModal from "../components/CreateTestModal";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Navigation>
            <Route path="/templates" component={Template} />
            <Route path="/home" component={LandingPage} />
            <Route path="/auth" component={Credentials} />
            {/* <Route path="/donorbartest" component={GenericDonorRequestBar} /> */}
            {/*<Route path="/auth" component={Credentials} />*/}
            <Route path="/modal" component={CreateTestModal} />
          </Navigation>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
