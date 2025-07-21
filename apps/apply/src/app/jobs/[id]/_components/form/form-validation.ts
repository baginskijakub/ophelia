import { ApplicationForm } from "@ophelia/types";
import { FormErrors } from "./types";

export const validate = (values: ApplicationForm): FormErrors => {
  const errors: FormErrors = {};

  if (!values.firstName) errors.firstName = "First name is required";

  if (!values.lastName) errors.lastName = "Last name is required";

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.resume) errors.resume = "A resume is required";

  return errors;
};
