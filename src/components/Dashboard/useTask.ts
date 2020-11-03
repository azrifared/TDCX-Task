import { useContext } from "react";
import { useObservableState } from 'observable-hooks';
import { FormValues } from './TaskField';
import useForm from '../../hooks/useForm';
import { FormContext } from '../../hooks/types';
import { usePromiseAction, AsyncState } from '../../observables';
import { postNewTask } from '../../api';
import { TableContextWrapper } from './context';
import { UserData } from '../../api/types';
import { popupObservable } from './observables';
import { taskActionSubject } from './observables';

const INITIAL_VALUES = {
  name: '',
};

const useTask = (): [FormContext<FormValues>, AsyncState<any>] => {
  const userData = useContext(TableContextWrapper) as UserData;
  const isPopup = useObservableState(popupObservable);
  const [state, onSubmit] = usePromiseAction(
    async ({ name }) => {
      const token = userData?.token?.token;
      const res = await postNewTask(token, name)
      popupObservable.next(!isPopup);
      taskActionSubject.next({ token });
      return res
    }
  );
  const formContext = useForm<FormValues>({
    initialValues: INITIAL_VALUES,
    onSubmit
  });

  return [formContext, state];
}

export default useTask;