import React from 'react';
import styled from 'styled-components';
import { DashboardDataType } from '../../api/types';

type TextListProps = {
  completed: boolean;
};

const List = ({ data }: { data: DashboardDataType }) => (
  <Container>
    {data?.latestTasks?.map(({ _id, name, completed }) => (
      <TextContainer key={_id}>
        <TextList
          completed={completed}
          key={_id}
        >
          {name}
        </TextList>
      </TextContainer>
    ))}
  </Container>
);

const Container = styled.div`
  align-items: center;
`;

const TextContainer = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  padding: 5px;
`;

const TextList = styled.div<TextListProps>`
  font-size: 3rem;
  font-family: Segoe UI;
  text-decoration: ${({ completed }) => completed ? 'line-through' : 'none' };
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export default List;