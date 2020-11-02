import React from 'react';
import { FormContext } from '../../hooks/types';
import { FormValues } from './types';
import InputField from './InputField';
import Form from '../Fields/Form'
import Button from './Button';

type FormProps = {
  formContext: FormContext<FormValues>;
};

const LoginForm = ({ formContext }: FormProps) => (
  <Form formContext={formContext}>
    <InputField
      type='text'
      placeholder='ID'
      formContext={formContext}
      name='id'
    />
    <InputField
      type='text'
      placeholder='NAME'
      name='name'
      formContext={formContext}
    />
    <Button />
  </Form>
);

export default LoginForm;
