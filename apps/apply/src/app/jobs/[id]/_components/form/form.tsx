"use client";

import {
  Button,
  Dialog,
  Field,
  Flex,
  Input,
  type UseDisclosureProps,
  FileInput,
} from "@ophelia/ui";
import styles from "./form.module.css";
import { useForm } from "./form-context";
import { useRef } from "react";
import { Head } from "./head";

interface Props extends UseDisclosureProps {}

export const Form = (props: Props) => {
  const { ...restProps } = props;
  const { values, errors, setFieldValue, handleSubmit } = useForm();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClearFile = () => {
    setFieldValue("resume", null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Dialog.Root fullScreen {...restProps}>
      <Dialog.Content className={styles.root}>
        <div className={styles.inputs}>
          <Head />

          <Flex gap={5} className={styles.row}>
            <Field.Root fullWidth>
              <Field.Label>
                First name <Field.Required />
              </Field.Label>
              <Input
                placeholder="John"
                size={2}
                value={values.firstName}
                onChange={(e) => setFieldValue("firstName", e.target.value)}
              />
              <Field.ErrorText>{errors.firstName}</Field.ErrorText>
            </Field.Root>

            <Field.Root fullWidth>
              <Field.Label>
                Last name <Field.Required />
              </Field.Label>
              <Input
                placeholder="Doe"
                size={2}
                value={values.lastName}
                onChange={(e) => setFieldValue("lastName", e.target.value)}
              />
              <Field.ErrorText>{errors.lastName}</Field.ErrorText>
            </Field.Root>
          </Flex>

          <Field.Root fullWidth>
            <Field.Label>
              Email <Field.Required />
            </Field.Label>
            <Input
              placeholder="example@gmail.com"
              size={2}
              value={values.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <Field.ErrorText>{errors.email}</Field.ErrorText>
          </Field.Root>

          <Field.Root fullWidth>
            <Field.Label>
              Resume <Field.Required />
            </Field.Label>
            <FileInput
              ref={fileInputRef}
              size={2}
              placeholder="Upload your resume"
              fileName={values.resume?.name}
              onChange={(e) =>
                setFieldValue("resume", e.target.files?.[0] ?? null)
              }
              onClear={handleClearFile}
            />
            <Field.ErrorText>{errors.resume}</Field.ErrorText>
          </Field.Root>

          <Button
            fullWidth
            size="lg"
            className={styles.button}
            onClick={handleSubmit}
          >
            Submit application
          </Button>
        </div>
        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Root>
  );
};
