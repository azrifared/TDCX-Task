import React from 'react';
import styled from 'styled-components';
import Spinner from '.';

const CenteredDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
`;

const CenteredSpinner = () => (
  <CenteredDiv><Spinner /></CenteredDiv>
);

export default CenteredSpinner;
