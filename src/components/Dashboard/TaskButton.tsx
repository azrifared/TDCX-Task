import React from 'react';
import { useObservableState } from 'observable-hooks';
import styled from 'styled-components';
import { popupObservable } from './observables';

type ButtonProps = {
  bgColor: string;
}

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button<ButtonProps>`
  height: 30px;
  border: none;
  border-radius: 5px;
  background: ${({ bgColor }) => bgColor};
  color: white;
  margin-right: 5px;
  width: 50px;
`;

const Buttons = ({ onClose }: { onClose: () => void }) => {
  const isPopup = useObservableState(popupObservable);
  return (
    <ButtonContainer>
      <Button bgColor='#24a0ed'>Save</Button>
      <Button bgColor='grey' onClick={onClose}>Cancel</Button>
    </ButtonContainer>
  );
}

export default Buttons;