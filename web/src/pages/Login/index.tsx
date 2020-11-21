import React from "react";
import { Component } from "react";
import UserProxy from "../../services/user.proxy";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";

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
            <Input
              icon={FiMail}
              placeholder="E-mail"
              name="email"
              onChange={this.handleChange}
            />
            <Input
              icon={FiLock}
              placeholder="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            <Button type="submit">Sign in</Button>
          </form>
        </Content>
      </Container>
    );
  }
}
