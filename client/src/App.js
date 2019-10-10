// import react
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import NoMatch from "./pages/NoMatch/NoMatch.js";
import Battle from "./pages/Battle/Battle.js";
import Home from "./pages/Home/Home.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-view">
          <Switch>
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/battle" component={() => <Battle />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
