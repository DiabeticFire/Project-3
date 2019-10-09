// import react
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// import pages
import LoginForm from "./pages/Auth/LoginForm";
import SignupForm from "./pages/Auth/SignupForm";
import NoMatch from "./pages/NoMatch/NoMatch.js";
import Battle from "./pages/Battle/Battle.js";

// import utils
import AUTH from "./utils/AUTH";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      user: null
    };
  }

  componentDidMount() {
    const token = sessionStorage.getItem("token");
    AUTH.getUser({ token: token }).then(response => {
      console.log(response.data);
      if (!!response.data.user) {
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      } else {
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    });
  }

  logout = event => {
    event.preventDefault();
    this.setState(
      {
        loggedIn: false,
        user: null
      },
      () => sessionStorage.removeItem("token")
    );
  };

  login = (username, password) => {
    AUTH.login(username, password).then(response => {
      console.log(response);
      if (response.status === 200) {
        // update the state
        this.setState(
          {
            loggedIn: true,
            user: response.data.user
          },
          () => sessionStorage.setItem("token", response.data.token)
        );
      }
    });
  };

  render() {
    return (
      <div className="App">
        {!this.state.loggedIn && (
          <div>
            <div className="main-view">
              <Switch>
                {/* <Route exact path="/" component={() => <Home />} /> */}
                <Route exact path="/battle" component={() => <Battle />} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        )}
        {!this.state.loggedIn && (
          <div className="auth-wrapper" style={{ paddingTop: 40 }}>
            <Route
              exact
              path="/"
              component={() => <LoginForm login={this.login} />}
            />
            <Route
              exact
              path="/books"
              component={() => <LoginForm user={this.login} />}
            />
            <Route exact path="/signup" component={SignupForm} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
