import React from 'react';
import styled from 'styled-components';
import { FormContext } from '../../hooks/types';
import { FormValues } from './types';
import InputField from './InputField';
import Form from '../Fields/Form'
import Button from './Button';
import { UserData } from '../../api/types';

type FormProps = {
  formContext: FormContext<FormValues>;
  userData: UserData
};

type MessageProps = {
  userData: UserData;
};

const Message = styled.div<MessageProps>`
  font-size: 12px;
  margin: 5px;
  color: ${({ userData }) => userData?.token ? 'green' : 'red'};
  font-family: Segoe UI;
`;

const LoginForm = ({ formContext, userData }: FormProps) => (
  <Form formContext={formContext}>
    <InputField
      placeholder='ID'
      formContext={formContext}
      name='id'
    />
    <InputField
      placeholder='NAME'
      name='name'
      formContext={formContext}
    />
    {userData && (
      <Message userData={userData} >{userData?.msg}</Message>
    )}
    <Button />
  </Form>
);

export default LoginForm;
