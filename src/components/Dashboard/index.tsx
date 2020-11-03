import React from "react";
import { UserData } from '../../api/types';
import { data } from '../../mock';
import { Container, Box, BoxTitle, BoxText } from "../styled";
import Header from './Header';
import Tables from './Tables';
import { usePromise } from '../../observables';
import { fetchDashboardData } from '../../api';
import { TableContextWrapper } from './context';

type DashboardProps = {
  userData: UserData;
};

const Dashboard = ({ userData }: DashboardProps) => {
  const dataState = usePromise(() => fetchDashboardData(userData?.token?.token), []);
  
  return (
    <TableContextWrapper.Provider value={userData}>
      <Header />
      <Container>
        <Tables />
      </Container>
    </TableContextWrapper.Provider>
  );
};

export default Dashboard;