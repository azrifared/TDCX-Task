import React, { useContext } from 'react';
import { TableContextWrapper } from './context';
import { UserData } from '../../api/types';
import styled from 'styled-components';
import { px2vw } from '../utils';
import { taskActionSubject } from './observables';

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px;
  border: none;
  background: #E8E8E8;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 2rem;
  text-align: center;
  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    margin-right: 0;
    font-size: 0.8rem;
  }
`;

const SearchField = () => {
  const userData = useContext(TableContextWrapper) as UserData;
  const token = userData?.token?.token;
  return (
    <Input
      type='text'
      onChange={(e) => {
        const value = e.target.value;
        taskActionSubject.next({ token, searchString: value })
      }}
      placeholder='Search by task name'
    />
  )
}

export default SearchField;