import React from 'react';
import styled from 'styled-components';
import { FormProps } from './types';

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
  const { handleChange } = formContext;

  return (
    <Container>
      <Input onChange={handleChange} type='text' {...props} />
    </Container>
  );
};

export default InputField;