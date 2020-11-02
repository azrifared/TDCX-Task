import { useState, useEffect, useRef } from "react";

export type FormConfig<TValues> = {
  initialValues: TValues;
  onSubmit: (values: TValues) => Promise<void>;
};

function useForm <TValues>({ initialValues, onSubmit }: FormConfig<TValues>) {
  const [values, setValues] = useState<TValues>(initialValues);

    const [errors, setErrors] = useState({});

    const formRendered = useRef(true);

    useEffect(() => {
      if (!formRendered.current) {
        setValues(initialValues);
        setErrors({});
      }
      formRendered.current = false;
    }, [initialValues]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = event;
      const { name, value } = target;
      event.persist();
      setValues({ ...values, [name]: value });
    };


    const handleSubmit = (event: any) => {
      if (event) event.preventDefault();
      setErrors({ ...errors });
      onSubmit(values);
    };

    return {
      values,
      handleChange,
      handleSubmit
    };
};

export default useForm;