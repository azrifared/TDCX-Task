import React from "react";
import { UserData } from '../../api/types';
import { data } from '../../mock';
import { Container, Box, BoxTitle, BoxText } from "../styled";
import Header from './Header';
import Tables from './Tables';

type DashboardProps = {
  userData: UserData;
};

const Dashboard = ({ userData }: DashboardProps) => {
  return (
    <>
      <Header userData={userData} />
      <Container>
        <Tables />
      </Container>
    </>
  );
};

export default Dashboard;