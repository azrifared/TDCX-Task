import React, { useCallback } from "react";
import styled, { css } from 'styled-components';
import { UserData } from '../../api/types';
import { BASE_URL } from '../../api/index';
import { px2vw } from '../utils';
import { userAuthObservable } from '../../observables/userAuthObservable'
type DashboardProps = {
  userData: UserData;
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
    width: ${px2vw(25, 700)};
    height: ${px2vw(25, 700)};
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

const Header = ({ userData }: DashboardProps) => {
  const logoutHandler = useCallback(() => {
    userAuthObservable.next({ isLogged: false, userData: null });
  }, []);
  
  return (
    <TopBar>
      <Image src={`https://dev.teledirectasia.com:3092/images/profile.jpg`} />
      <Text>{userData?.token?.name}</Text>
      <Logout onClick={logoutHandler}>Logout</Logout>
    </TopBar>
  );
};

export default Header;