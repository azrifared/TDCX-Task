import { FormContext } from '../../hooks/types';

export type FormValues =  {
  id: string | null,
  name: string | null,
};

export type FormProps = {
  formContext: FormContext<FormValues>;
};
