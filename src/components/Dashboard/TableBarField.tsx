import React, { useCallback } from 'react';
import { useObservableState } from 'observable-hooks';
import { TableBar, AddButton } from './styled';
import SearchField from './SearchField';
import CreateTask from './CreateTask';
import { popupObservable } from './observables';
import useTask from './useTask';

const TableBarField = () => {
  const isPopup = useObservableState(popupObservable);
  const [formContext, state] = useTask();
  const addHandler = useCallback(() => {
    popupObservable.next(!isPopup)
  }, [isPopup])
  
  return (
    <>
      <TableBar>
        <SearchField />
        <AddButton onClick={addHandler}>New Task</AddButton>
        {isPopup && (
          <CreateTask
            formContext={formContext}
            state={state}
            onClose={() => { popupObservable.next(!isPopup) }}
          />
        )}
      </TableBar>
    </>
  );
};

export default TableBarField;