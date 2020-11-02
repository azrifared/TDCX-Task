import React from 'react';
import { Login, Content } from './styled';
import { Container, BoxTitle } from "../styled";
import LoginForm from './LoginForm'
import useLogin from './useLogin';

const LoginPage = () => {
  const [formContext, state] = useLogin();
  const { loading, data } = state;
  
  return (
    <Container>
      <Login>
        <Content>
          <BoxTitle>Login</BoxTitle>
          <LoginForm formContext={formContext} userData={data} />
        </Content>
      </Login>
    </Container>
  );
};

export default LoginPage;