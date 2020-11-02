export type FormContext<TValues> = {
  values: TValues;

  handleSubmit: (event: any) => void;

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
