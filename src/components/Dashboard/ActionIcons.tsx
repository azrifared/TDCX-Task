import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import useAction from './useAction';
import EditTask from './CreateTask';
import { TaskType } from '../../api/types';
import useEdit from './useEdit';

const Container = styled.div`
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  padding: 0 2px;
`;

const ActionIcons = ({ task }: { task: TaskType }) => { 
  const [isPopup, setPopup] = useState(false);
  const actionHandler = useAction();

  const [formContext, state] = useEdit(task);

  return (
    <Container>
      <Icon icon='edit' onClick={() => setPopup(true)} />
      <Icon icon='trash' onClick={() => actionHandler(task?._id)} />
      {isPopup && (
        <EditTask
          formContext={formContext}
          state={state}
          onClose={() => setPopup(false)}
        />
      )}
    </Container>
  );
};

export default ActionIcons;
