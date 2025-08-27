import { Field, Flex, TextArea } from "@ophelia/ui";
import { useListingForm } from "../listing-form";
import styles from "./job-description.module.css";
import { capitalize } from "@ophelia/utils";

export const JobDescription = () => {
  const { form, setField, orgName } = useListingForm();

  return (
    <Flex direction="column" gap={6} fullWidth>
      <Field.Root fullWidth>
        <Field.Label className={styles.label}>
          About {capitalize(orgName, true)}
        </Field.Label>
        <TextArea
          minHeight={80}
          size={2}
          placeholder="Write a brief overview of the company"
          value={form.aboutCompany ?? ""}
          onChange={(e) => setField("aboutCompany", e.target.value)}
        />
      </Field.Root>

      <Field.Root fullWidth>
        <Field.Label className={styles.label}>
          About the role
          <Field.Required />
        </Field.Label>
        <TextArea
          minHeight={160}
          size={2}
          placeholder="Write a summary of the position"
          value={form.aboutRole}
          onChange={(e) => setField("aboutRole", e.target.value)}
        />
      </Field.Root>

      <Field.Root fullWidth>
        <Field.Label className={styles.label}>
          Responsibilities
          <Field.Required />
        </Field.Label>
        <TextArea
          minHeight={160}
          size={2}
          placeholder="Write what the person will do in the role"
          value={form.responsibilities}
          onChange={(e) => setField("responsibilities", e.target.value)}
        />
      </Field.Root>

      <Field.Root fullWidth>
        <Field.Label className={styles.label}>
          Candidate requirements
          <Field.Required />
        </Field.Label>
        <TextArea
          minHeight={160}
          size={2}
          placeholder="Write what are you looking for in a candidate"
          value={form.requirements}
          onChange={(e) => setField("requirements", e.target.value)}
        />
      </Field.Root>

      <Field.Root fullWidth>
        <Field.Label className={styles.label}>Outro</Field.Label>
        <TextArea
          minHeight={80}
          size={2}
          placeholder="Write a closing statement to encourage candidates to apply"
          value={form.outro ?? ""}
          onChange={(e) => setField("outro", e.target.value)}
        />
      </Field.Root>
    </Flex>
  );
};
