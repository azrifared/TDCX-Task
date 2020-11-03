import React from 'react';
import styled from 'styled-components';
import { FormContext } from '../../hooks/types';

export type FormValues =  {
  name: string | null;
};

export type FormProps = {
  formContext: FormContext<FormValues>;
};

type InputFieldProps = FormProps & {
  name: string;
  placeholder: string;
};

const Container = styled.div`
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 10px;
  border: none;
  background: #E8E8E8;
  border-radius: 5px;
`;

const InputField = ({ formContext, ...props }: InputFieldProps) => {
  const { handleChange, values } = formContext;

  return (
    <Container>
      <Input onChange={handleChange} value={values?.name} type='text' {...props} />
    </Container>
  );
};

export default InputField;