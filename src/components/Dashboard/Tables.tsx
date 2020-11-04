import React, { useContext, useEffect } from "react";
import { useObservableState } from 'observable-hooks';
import styled from 'styled-components';
import { TableContextWrapper } from './context';
import { UserData } from '../../api/types';
import { BoxTitle } from "../styled";
import { Box } from './styled';
import TableBarField from './TableBarField';
import CenteredSpinner from '../Spinner';
import { taskObservable, taskActionSubject } from './observables';
import TableRowField from './TableRowField';
import { AsyncState } from '../../observables';
import { AllTaskType } from '../../api/types';

const Tables = () => {
  const userData = useContext(TableContextWrapper) as UserData;
  const token = userData.token.token;
  const allTaskState = useObservableState(taskObservable)

  useEffect(() => {
    taskActionSubject.next({ token })
  }, []);

  const renderData = () => {
    const { loading, data } = allTaskState as AsyncState<AllTaskType>;

    if (loading) return <CenteredSpinner />;

    if (data?.tasks?.length === 0) return <Message>No records found.</Message>

    return (
      <>
        {data.tasks.map((task) => (
          <TableRowField task={task} key={task._id} />
        ))}
      </>
    );
  }

  return (
    <Box>
      <BoxTitle>Tasks</BoxTitle>
      <TableBarField />
      {renderData()}
    </Box>
  );
};

const Message = styled.div`
  text-align: center;
  font-size: 2em;
  font-family: Segoe UI;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;


export default Tables;