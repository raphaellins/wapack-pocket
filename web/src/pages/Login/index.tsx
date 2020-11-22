import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { useHistory } from "react-router-dom";

import { Container, Content } from "./styles";
import { useAuth } from "../../hooks/AuthContext";

interface UserLogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: UserLogin) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string().required("Required").email("Invalid Email"),
          password: Yup.string().required("Required"),
        });

        await schema.validate(data, { abortEarly: false });

        const logged = await signIn({
          email: data.email,
          password: data.password,
        });

        if (logged) {
          history.push("/dashboard");
        }
      } catch (err) {
        formRef.current?.setErrors(getValidationErrors(err));
      }
    },
    [signIn, history]
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Wapack Pocket</h1>
          <Input icon={FiMail} placeholder="E-mail" name="email" />
          <Input
            icon={FiLock}
            placeholder="Password"
            type="password"
            name="password"
          />
          <Button type="submit">Sign in</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
