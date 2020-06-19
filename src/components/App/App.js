import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home";
import NewPost from "../NewPost";

function App() {
  return (
    <Router>
      <>
        <Link to="/" className="links">
          <h1> Name/Logo Goes Here </h1>
        </Link>
        <Switch>
          <Route path="/newPost">
            <NewPost />
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
