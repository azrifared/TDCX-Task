import React, { useCallback, useContext } from "react";
import styled, { css } from 'styled-components';
import { UserData } from '../../api/types';
import { BASE_URL } from '../../api/index';
import { px2vw } from '../utils';
import { userSubject } from '../../observables/userAuthObservable';
import { TableContextWrapper } from './context';

const Header = () => {
  const logoutHandler = useCallback(() => {
    userSubject.next({ isLogged: false, data: null, clearCached: true, loading: false });
  }, []);
  const userData = useContext(TableContextWrapper) as UserData;
  
  return (
    <TopBar>
      <Image src={`${BASE_URL}${userData?.image}`} />
      <Text>{userData?.token?.name}</Text>
      <Logout onClick={logoutHandler}>Logout</Logout>
    </TopBar>
  );
};


const styledText = css`
  padding-left: 10px;
  color: #333;
  font-size: 3rem;
  font-family: Segoe UI;
  color: #585858;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const TopBar = styled.div`
  background: white;
  display: flex;
  align-items: center;
  height: 60px;
  box-shadow: 0 5px 3px -3px #D8D8D8;
  @media (min-width: 768px) {
    height: 70px;
    padding-left: ${px2vw(200)};
    padding-right: ${px2vw(200)};
  }
  @media (min-width: 1024px) {
    height: 70px;
    padding-left: ${px2vw(200)};
    padding-right: ${px2vw(200)};
  }
`;

const Image = styled.img`
  width: ${px2vw(125, 1000)};
  height: ${px2vw(125, 1000)};
  border-radius: 50%;
  object-fit: cover;
  margin-left: 20px

  @media (min-width: 1024px) {
    width: ${px2vw(20, 700)};
    height: ${px2vw(20, 700)};
  }
`;

const Text = styled.div`
  ${styledText}
`;

const Logout = styled.div`
  ${styledText}
  margin-left: auto;
  margin-right: 20px
`;

export default Header;