import React from "react";
import "./App.css";
import logo from "./community-grey.svg";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import NewPost from "../NewPost";
import IndividualPost from "../IndividualPost";

function App() {
  return (
    <Router>
      <>
        <Link to="/" className="links">
          <img src={logo} alt="logo" className="logo" />
          <h2 className="title">Community Forum!!!</h2>
        </Link>
        <Switch>
          <Route path="/newPost">
            <NewPost />
          </Route>
          <Route path="/:id">
            <IndividualPost />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
