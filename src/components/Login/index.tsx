import React from 'react';
import { Login, Content } from './styled';
import { Container, BoxTitle } from "../styled";
import LoginForm from './LoginForm'
import useLogin from './useLogin';

const LoginPage = () => {
  const [formContext, state] = useLogin();
  console.log(state)
  
  return (
    <Container>
      <Login>
        <Content>
          <BoxTitle>Login</BoxTitle>
          <LoginForm formContext={formContext} />
        </Content>
      </Login>
    </Container>
  );
};

export default LoginPage;