import React from 'react'
import { Box, BoxTitle } from "../styled";
import { useDashboardContext } from './context';
import Spinner from '../Spinner';
import { Message } from './styled';
import BoxNumber from './BoxNumber';

const TaskCompDashboard = () => {
  const value = useDashboardContext();
  const { loading, data } = value;
  const renderContent = () => {
    if (loading) return <Spinner />;

    if (data?.totalTasks === 0) return <Message>No records found.</Message>;

    return <BoxNumber data={data} />;
  }

  return (
    <Box>
      <BoxTitle>Tasks Completed</BoxTitle>
      {renderContent()}
    </Box>
  );
};

export default TaskCompDashboard;