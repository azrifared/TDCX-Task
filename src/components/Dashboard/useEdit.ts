import { useContext } from 'react';
import { TableContextWrapper } from './context';
import useForm from '../../hooks/useForm';
import { TaskType } from '../../api/types';
import { usePromiseAction, AsyncState } from '../../observables';
import { FormContext } from '../../hooks/types';
import { postEditTask } from '../../api';
import { UserData } from '../../api/types';
import { taskActionSubject, dashboardActionSubject } from './observables';

type FormValues = {
  name: string;
};

const useEdit = (task: TaskType): [FormContext<FormValues>, AsyncState<any>] => {
  const INITIAL_VALUES = {
    name: task?.name
  }
  const userData = useContext(TableContextWrapper) as UserData;
  const token = userData?.token?.token;
  const [state, onSubmit] = usePromiseAction(
    async ({ name }) => {
      const newData = { ...task, name }
      const res = await postEditTask(token, newData);
      taskActionSubject.next({ token });
      dashboardActionSubject.next(token);
      return res;
    }
  );
  const formContext = useForm({ initialValues: INITIAL_VALUES, onSubmit });

  return [formContext, state];
}

export default useEdit