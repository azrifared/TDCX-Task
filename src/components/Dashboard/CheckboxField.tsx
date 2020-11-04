import React, { useCallback, useState, useContext } from "react";
import { TaskType } from '../../api/types';
import { TableContextWrapper } from './context';
import { UserData } from '../../api/types';
import { postEditTask } from '../../api';
import { taskActionSubject, dashboardActionSubject } from './observables';

type TableRowFieldProps = {
  task: TaskType
}

const CheckboxField = ({ task }: TableRowFieldProps) => {
  const [isChecked, setChecked] = useState(task?.completed);
  const userData = useContext(TableContextWrapper) as UserData;
  const token = userData?.token?.token;
  const checkHandler = useCallback(
    async (e) => {
      const value = e.target.checked;
      const newData = { ...task, completed: value };
      setChecked(value)
      await postEditTask(token, newData);
      taskActionSubject.next({ token });
      dashboardActionSubject.next(token);
    }, []
  );

  return (
    <input
      type='checkbox'
      checked={isChecked}
      onChange={checkHandler}
    />
  );
};

export default CheckboxField;
