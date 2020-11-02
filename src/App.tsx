import React from "react";
import { useObservableState } from 'observable-hooks'
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';
import { Global } from './components/styled';
import { userAuthObservable } from './observables/userAuthObservable';

export default () => {
  const { isLogged, userData } = useObservableState(userAuthObservable);

  return (
    <>
      <Global />
      {isLogged ? <Dashboard userData={userData}/> : <LoginPage />}
    </>
  );
}
