import { Flex, Text } from "@ophelia/ui";
import styles from "./content.module.css";
import { ApplicationAggregate } from "@ophelia/db/dist/crud";

interface ExperienceProps {
  workExperience: ApplicationAggregate["workExperience"];
}

export const Experience = (props: ExperienceProps) => {
  const { workExperience } = props;

  return (
    <Flex direction="column" gap={8}>
      <Text role="heading" size="sm" color="text-90">
        Experience
      </Text>

      {!workExperience ||
        (workExperience.length === 0 && (
          <Text role="paragraph" size="md" color="text-50">
            No relevant experience provided.
          </Text>
        ))}

      {workExperience && workExperience.length > 0 && (
        <Flex direction="column" gap={6}>
          {workExperience.map((experience, index) => (
            <Flex key={index} direction="column" gap={2}>
              <Flex align="center" gap={2}>
                <Text role="paragraph" size="sm" color="text-50">
                  {experience.company}
                </Text>

                <span className={styles.separator} />

                <Text role="paragraph" size="sm" color="text-50">
                  {experience.date}
                </Text>
              </Flex>

              <Text role="label" size="xl" color="text-90">
                {experience.position}
              </Text>

              {experience.description && (
                <Text role="paragraph" size="md" color="text-70">
                  {experience.description}
                </Text>
              )}
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
};
