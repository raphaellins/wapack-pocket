import React from "react";
import { Component } from "react";
import UserProxy from "../../services/user.proxy";

import { Container, Content } from "./styles";

export default class Login extends Component<any, any> {
  constructor() {
    super({});

    this.state = { email: "", password: "" };
  }

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event: any) => {
    event.preventDefault();

    const token = await new UserProxy().login(
      this.state.email,
      this.state.password
    );

    if (token) {
      localStorage.setItem("AuthToken", `Bearer ${token}`);
    } else {
      //TODO error
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <form onSubmit={this.handleSubmit}>
            <h1>Wapack Pocket</h1>
            <input
              placeholder="E-mail"
              name="email"
              onChange={this.handleChange}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <button type="submit">Sign in</button>
          </form>
        </Content>
      </Container>
    );
  }
}
