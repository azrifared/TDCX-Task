import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: #24a0ed;
  color: white;
`;

const Button = () => (
  <div>
    <StyledButton type='submit'>Login</StyledButton>
  </div>
);

export default Button;