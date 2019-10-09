// import react
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

// import components

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handleSubmit");
    this.props.login(this.state.username, this.state.password);
    this.setState({
      redirectTo: "/"
    });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <form style={{ marginTop: 10 }}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Link to="/signup">Register</Link>
        </form>
      );
    }
  }
}

export default LoginForm;
