import React from 'react';
import { Login, Content } from './styled';
import { Container, BoxTitle } from "../styled";
import LoginForm from './LoginForm'
import useLogin from './useLogin';
import Spinner from '../Spinner';

const LoginPage = () => {
  const [formContext, state] = useLogin();
  const { loading, data } = state;
  
  return (
    <Container>
      <Login>
        <Content>
          {loading
            ? <Spinner />
            : (
              <>
                <BoxTitle>Login</BoxTitle>
                <LoginForm formContext={formContext} userData={data} />
              </>
            )
          }
        </Content>
      </Login>
    </Container>
  );
};

export default LoginPage;