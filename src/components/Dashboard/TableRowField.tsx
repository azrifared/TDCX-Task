import React from "react";
import styled from 'styled-components';
import {
  TableRow, TableDataContainer, ActionContainer
} from './styled';
import ActionIcons from './ActionIcons';
import { TaskType } from '../../api/types';
import CheckboxField from './CheckboxField';

type TableRowFieldProps = {
  task: TaskType
}

type NameProps = {
  completed: boolean;
};

const Name = styled.div<NameProps>`
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none' };
`;

const TableRowField = ({ task }: TableRowFieldProps) => {
  return (
    <TableRow>
      <TableDataContainer>
        <CheckboxField task={task} />
      </TableDataContainer>
      <TableDataContainer>
        <Name completed={task?.completed}>
          {task?.name}
        </Name>
      </TableDataContainer>
      <ActionContainer>
        <TableDataContainer>
          <ActionIcons task={task} />
        </TableDataContainer>
      </ActionContainer>
    </TableRow>
  )
};

export default TableRowField;