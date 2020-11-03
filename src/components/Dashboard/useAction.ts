import { useContext } from 'react';
import { TableContextWrapper } from './context';
import { deleteTask } from '../../api';
import { UserData } from '../../api/types';
import { usePromiseAction } from '../../observables';
import { taskActionSubject } from './observables';

const useAction = () => {
  const userData = useContext(TableContextWrapper) as UserData;
  const [, actionHandler] = usePromiseAction(
    async (taskId) => {
      const token = userData?.token?.token;
      const res = await deleteTask(token, taskId);
      taskActionSubject.next({ token });

      return res;
    }
  );

  return actionHandler;
}

export default useAction;
