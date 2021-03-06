/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import Homepage from "views/homepage/Homepage";
import Footer from "components/Footer/Footer";
import SearchJobs from "views/jobs/SearchJobs";
import Employer from "views/Employer/Employer";

ReactDOM.render(
  <BrowserRouter>
    <IndexNavbar />
    <div className="wrapper">
      <Switch>
        <Route exact path="/" render={(props) => <Homepage {...props} />} />
        <Route
          exact
          path="/Employer"
          render={(props) => <Employer {...props} />}
        />
        <Route
          exact
          path="/jobs"
          render={(props) => <SearchJobs {...props} />}
        />
        <Route exact path="/example" render={(props) => <Index {...props} />} />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/register-page"
          render={(props) => <RegisterPage {...props} />}
        />
        <Route path="/aboutUs" render={(props) => <ProfilePage {...props} />} />
        <Redirect from="/" to="/example" />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>,
  document.getElementById("root")
);
