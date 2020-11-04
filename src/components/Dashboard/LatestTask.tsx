import React from 'react';
import { Box, BoxTitle } from "../styled";
import { useDashboardContext } from './context';
import Spinner from '../Spinner';
import { Message } from './styled';
import List from './List';

const LatestTask = () => {
  const value = useDashboardContext();
  const { loading, data } = value;
  const renderContent = () => {
    if (loading) return <Spinner />;

    if (data?.totalTasks === 0) return <Message>No records found.</Message>;

    return <List data={data} />;
  }
  return (
    <Box>
      <BoxTitle>Latest Created Task</BoxTitle>
      {renderContent()}
    </Box>
  );
};

export default LatestTask;