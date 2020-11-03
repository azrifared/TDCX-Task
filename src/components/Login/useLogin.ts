import useForm from '../../hooks/useForm';
import { FormValues } from './types';
import { FormContext } from '../../hooks/types';
import { usePromiseAction, AsyncState } from '../../observables';
import { fetchUserData } from '../../api';
import { UserData } from '../../api/types';
import { userSubject } from '../../observables/userAuthObservable'

const INITIAL_VALUES: FormValues = {
  id: null,
  name: null,
};

const useLogin = (): [FormContext<FormValues>, AsyncState<UserData>] => {
  const [state, onSubmit] = usePromiseAction(
    async ({ id, name }) => {
      const data = await fetchUserData(id, name);
      if (data?.token) {
        userSubject.next({
          isLogged: true,
          data,
          clearCached: false,
          loading: false,
          cachedUser: null
        });
      }
      return data;
    }
  );
  const formContext = useForm<FormValues>({ initialValues: INITIAL_VALUES, onSubmit });
  

  return [formContext, state];
};

export default useLogin;