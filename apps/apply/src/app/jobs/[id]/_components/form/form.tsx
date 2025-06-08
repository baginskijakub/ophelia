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
import { useState, useRef } from "react";
import { Head } from "./head";

interface Props extends UseDisclosureProps {}

export const Form = (props: Props) => {
  const { ...restProps } = props;
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleClearFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Dialog.Root fullScreen {...restProps} open>
      <Dialog.Content className={styles.root}>
        <div className={styles.inputs}>
          <Head />

          <Flex gap={5} className={styles.row}>
            <Field.Root fullWidth>
              <Field.Label>
                First name
                <Field.Required />
              </Field.Label>
              <Input placeholder="John" size={2} />
            </Field.Root>

            <Field.Root fullWidth>
              <Field.Label>
                Last name
                <Field.Required />
              </Field.Label>
              <Input placeholder="Doe" size={2} />
            </Field.Root>
          </Flex>

          <Field.Root fullWidth>
            <Field.Label>
              Email
              <Field.Required />
            </Field.Label>
            <Input placeholder="example@gmail.com" size={2} />
          </Field.Root>

          <Field.Root fullWidth>
            <Field.Label>
              Resume
              <Field.Required />
            </Field.Label>

            <FileInput
              ref={fileInputRef}
              size={2}
              placeholder="Upload your resume"
              fileName={file?.name}
              onChange={handleFileChange}
              onClear={handleClearFile}
            />

            <Field.AssistiveText>
              Uploaded files should be PDFs under 3.5MB.
            </Field.AssistiveText>
          </Field.Root>

          <Button fullWidth size="lg" className={styles.button}>
            Submit application
          </Button>
        </div>

        <Dialog.Close />
      </Dialog.Content>
    </Dialog.Root>
  );
};
