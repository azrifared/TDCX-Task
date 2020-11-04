import React, { useContext } from 'react';
import { ActionStateType } from '../../observables';
import { DashboardDataType } from '../../api/types';

export type DashboardWrapType = {
  actionState?: string;
  data?: DashboardDataType;
  loading?: boolean;
};

export const TableContextWrapper = React.createContext({});

export const DashboardContextWrapper = React.createContext<DashboardWrapType>({});

export const useDashboardContext = () => useContext(DashboardContextWrapper);
