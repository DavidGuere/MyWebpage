import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import HomePage from "./components/homePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Photography from "./components/Photography";

function App() {
  return (
    <React.Fragment>
      <div id="Wrap">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/Photography">
              <Photography />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
