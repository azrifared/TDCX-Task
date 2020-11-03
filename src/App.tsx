import React from "react";
import { useObservableState } from 'observable-hooks';
import LoginPage from './components/Login';
import Dashboard from './components/Dashboard';
import { Global } from './components/styled';
import { userAuthObservable } from "./observables/userAuthObservable";
import CenteredSpinner from './components/Spinner/CenteredSpinner';

export default () => {
  const userDataState = useObservableState(userAuthObservable);
  const { isLogged, data, loading } = userDataState;

  if (loading) return <CenteredSpinner />

  return (
    <>
      <Global />
      {isLogged ? <Dashboard userData={data}/> : <LoginPage />}
    </>
  );
}
