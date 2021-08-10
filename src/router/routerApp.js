
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contactos from "../pages/contactos";
import Home from "../pages/home";

function RouterApp() {
  return (
    <Router>
     
        <Switch>

          <Route path="/contacto">
            <Contactos/>
          </Route>

          <Route path="/">
            <Home/>
          </Route>

        </Switch>

    </Router>
  );
}

export default RouterApp;