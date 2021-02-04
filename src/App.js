import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import HomePage from "./components/homePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Photography from "./components/Photography";
import PhotoPlaceholder from "./components/PhotoPlaceholder";
import Engineering from "./components/Engineering";
import Software from "./components/Software";

function App() {
  return (
    <React.Fragment>
      <div id="Wrap">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/degg" exact>
              <HomePage />
            </Route>
            <Route path="/degg/Photography">
              <Photography />
            </Route>
            <Route
              path="/degg/Gallery/:typeOfPhotography"
              exact
              children={<PhotoPlaceholder />}
            ></Route>
            <Route path="/degg/Software">
              <Software />
            </Route>
            <Route>
              <Engineering />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
