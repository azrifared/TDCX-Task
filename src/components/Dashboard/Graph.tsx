import React from 'react';
import styled from 'styled-components';
import { px2vw } from '../utils';
import { Box, BoxTitle } from "../styled";
import { useDashboardContext } from './context';
import Spinner from '../Spinner';
import { Message } from './styled';
import Chart from '../DonutChart';
import { ChartTotal } from '../DonutChart/styled';

const DonutChartLarge = styled(Chart)`
  margin: 10px;
  height: 150px;
  width: 150px;
  ${ChartTotal} {
    fill: grey;
  }
`;

const getChartData = (tasksCompleted: number, totalTasks: number) => {
  const remainingTask = totalTasks - tasksCompleted;
  return [
    {
      count: tasksCompleted,
      color: 'green',
      showText: false,
    },
    {
      count: remainingTask,
      color: null,
      showText: false,
    },
  ]
}

const Graph = () => {
  const value = useDashboardContext();
  const chartData = getChartData(value?.data?.tasksCompleted, value?.data?.totalTasks);
  const { loading, data } = value;
  const renderContent = () => {
    if (loading) return <Spinner />;

    if (data?.totalTasks === 0) return <Message>No records found.</Message>;

    return (
      <Container>
        <DonutChartLarge
          data={chartData}
          showTotal
        />
      </Container>
    );
  }
  return (
    <Box>
      <BoxTitle>Chart</BoxTitle>
      {renderContent()}
    </Box>
  );
};

const Container = styled.div`
  margin: ${px2vw(20)};
  display: flex;

  @media (min-width: 1024px) {
    margin: ${px2vw(20)};
  }
`;

export default Graph;