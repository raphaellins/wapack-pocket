import React, { useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import UserProxy from "../../services/user.proxy";
import { FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";

import { Container, Content } from "./styles";

interface UserLogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: UserLogin) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required("Email required").email("Invalid Email"),
        password: Yup.string().min(6, "Less than 6 characters"),
      });

      await schema.validate(data, { abortEarly: false });

      const token = await new UserProxy().login(data.email, data.password);

      if (token) {
        localStorage.setItem("AuthToken", `Bearer ${token}`);
      } else {
        //TODO error
      }
    } catch (err) {
      formRef.current?.setErrors(getValidationErrors(err));
    }
  }, []);

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
