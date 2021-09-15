import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alert from "./components/Alert";
import String from "./components/String";

const Home = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Alert />
        </Route>
        <Route path="/string">
          <String />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;
