import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import HomePage from "./components/homePage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
