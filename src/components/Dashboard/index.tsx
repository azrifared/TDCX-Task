import React, { useEffect } from "react";
import { useObservableState } from 'observable-hooks';
import { UserData } from '../../api/types';
import { Container } from "../styled";
import Header from './Header';
import Tables from './Tables';
import { TableContextWrapper, DashboardContextWrapper } from './context';
import TaskCompDashboard from './TaskCompletedDashboard';
import LatestTask from './LatestTask';
import Graph from './Graph';
import { DashboardWrapType } from './context';
import { dashboardObservable, dashboardActionSubject } from './observables';

type DashboardProps = {
  userData: UserData;
};

const Dashboard = ({ userData }: DashboardProps) => {
  const dataState: DashboardWrapType = useObservableState(dashboardObservable);

  useEffect(() => {
    dashboardActionSubject.next(userData?.token?.token);
  },[]);

  return (
    <TableContextWrapper.Provider value={userData}>
      <Header />
      <DashboardContextWrapper.Provider value={dataState}>
        <Container>
          <TaskCompDashboard />
          <LatestTask />
          <Graph />
        </Container>
      </DashboardContextWrapper.Provider>
      <Container>
        <Tables />
      </Container>
    </TableContextWrapper.Provider>
  );
};

export default Dashboard;