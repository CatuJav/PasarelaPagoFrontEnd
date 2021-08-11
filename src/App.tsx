import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Inicio } from "./Pages/Inicio";
import { CarritoPage } from "./Pages/CarritoPage";
export const App = () => {
  return (
    <Router>
      <div className="container">
        <h1>EMPRESA FAS</h1>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={{pathname:"/carrito", state:[]}}>Carrito</Link>
            </li>
          </ul>
          <hr />
        </div>





        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/carrito">
            <CarritoPage />
          </Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
