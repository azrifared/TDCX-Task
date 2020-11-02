import React from "react";
import { UserData } from '../../api/types';
import { data } from '../../mock';
import { Container, Box, BoxTitle, BoxText } from "../styled";
import Header from './Header';

type DashboardProps = {
  userData: UserData;
};

const Dashboard = ({ userData }: DashboardProps) => {
  console.log('userData', userData)
  return (
    <>
      <Header userData={userData} />
      <Container>
        {data.map(box => (
          <Box key={box.id} >
            <BoxTitle>{box.title}</BoxTitle>
            <BoxText>{box.text}</BoxText>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Dashboard;