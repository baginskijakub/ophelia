import { ApplicationForm } from "@ophelia/types";

export type FormErrors = { [K in keyof ApplicationForm]?: string } & {
  saveApplication?: string;
};

export interface FormContextValue {
  values: ApplicationForm;
  errors: FormErrors;
  setFieldValue: <T extends keyof ApplicationForm>(
    field: T,
    value: ApplicationForm[T],
  ) => void;
  handleSubmit: () => void;
}
