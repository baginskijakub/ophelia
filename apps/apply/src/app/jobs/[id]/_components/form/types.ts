export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  resume: File | null;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  resume?: string;
}

export interface FormContextValue {
  values: FormValues;
  errors: FormErrors;
  setFieldValue: <T extends keyof FormValues>(
    field: T,
    value: FormValues[T]
  ) => void;
  handleSubmit: () => void;
}
