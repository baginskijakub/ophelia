import { Application } from "@ophelia/types";

export type FormErrors = {[K in keyof Application]?: string} & {
  saveApplication?: string;
};

export interface FormContextValue {
  values: Application;
  errors: FormErrors;
  setFieldValue: <T extends keyof Application>(
    field: T,
    value: Application[T]
  ) => void;
  handleSubmit: () => void;
}
