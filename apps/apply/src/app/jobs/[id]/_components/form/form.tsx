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

interface Props extends UseDisclosureProps {}

export const Form = (props: Props) => {
  console.log(props);
  return (
    <Dialog.Root fullScreen {...props} open>
      <Dialog.Content className={styles.root}>
        <div className={styles.inputs}>
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

            <FileInput placeholder="Upload your resume" size={2} />

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
