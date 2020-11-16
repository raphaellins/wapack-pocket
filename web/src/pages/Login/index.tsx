import React from "react";

import { Container, Content } from "./styles";

const Login: React.FC = () => (
  <Container>
    <Content>
      <form>
        <h1>Login</h1>

        <input placeholder="E-mail" name="wapackpocket_login_name" />
        <input
          placeholder="Password"
          type="password"
          name="wapackpocket_login_password"
        />

        <button>Sign in</button>
      </form>
    </Content>
  </Container>
);

export default Login;
