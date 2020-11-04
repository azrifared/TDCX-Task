import React from 'react'
import styled from 'styled-components';
import { DashboardDataType } from '../../api/types';
import { px2vw } from '../utils';

const BoxNumber = ({ data }: { data: DashboardDataType }) => (
  <Container>
    <CompletedNumber>
      {data?.tasksCompleted}
    </CompletedNumber>
    <Slash>/</Slash>
    <TotalNumber>
      {data?.totalTasks}
    </TotalNumber>
  </Container>
);

const CompletedNumber = styled.div`
  font-size: 15rem;
  font-family: Segoe UI;
  color: #008B8B;

  @media (min-width: 1024px) {
    font-size: 8rem;
  }
`;

const TotalNumber = styled.div`
  font-size: 5rem;
  font-family: Segoe UI;
  margin-top: 50px;
  color: #A0A0A0;
  @media (min-width: 1024px) {
    margin-top: 55px;
    font-size: 4rem;
  }
`;

const Slash = styled.div`
  font-size: 5rem;
  font-family: Segoe UI;
  margin-top: 49px;
  color: #A0A0A0;
  @media (min-width: 1024px) {
    margin-top: 50px;
    font-size: 4rem;
  }
`;

const Container = styled.div`
  margin: ${px2vw(50)};
  display: flex;

  @media (min-width: 1024px) {
    margin: ${px2vw(20)};
  }
`;

export default BoxNumber;