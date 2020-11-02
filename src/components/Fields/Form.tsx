import React, { useCallback } from 'react';
import { FormContext } from '../../hooks/types';

type FormProps<TValues> = {
  formContext: FormContext<TValues>
  children: React.ReactNode
}

function Form <TValues>({ formContext, children, ...others }: FormProps<TValues>) {
  const onSubmitHandler = useCallback(
    (ev: React.FormEvent<HTMLFormElement>) => {
      if (ev != null) {
        ev.preventDefault();
        ev.stopPropagation();
      }

      formContext?.handleSubmit?.(ev);
    },
    [formContext?.handleSubmit],
  );

  return <form {...others} onSubmit={onSubmitHandler}>{children}</form>;
};

export default Form;