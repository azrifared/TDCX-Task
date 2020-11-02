import useForm from '../../hooks/useForm';
import { FormValues } from './types';
import { FormContext } from '../../hooks/types';
import { usePromiseAction, AsyncState } from '../../observables';
import { fetchUserData } from '../../api';

const INITIAL_VALUES: FormValues = {
  id: null,
  name: null,
};

const useLogin = (): [FormContext<FormValues>, AsyncState<void>] => {
  const [state, onSubmit] = usePromiseAction(
    async ({ id, name }) => await fetchUserData(id, name)
  );
  const formContext = useForm<FormValues>({ initialValues: INITIAL_VALUES, onSubmit });

  return [formContext, state];
};

export default useLogin;