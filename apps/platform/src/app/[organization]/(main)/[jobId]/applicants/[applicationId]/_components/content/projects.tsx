import { Flex, Text } from "@ophelia/ui";
import styles from "./content.module.css";
import { ApplicationAggregate } from "@ophelia/db/dist/crud";

interface ProjectsProps {
  projects: ApplicationAggregate["projects"];
}

export const Projects = (props: ProjectsProps) => {
  const { projects } = props;

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <Flex direction="column" gap={8}>
      <Text role="heading" size="sm" color="text-90">
        Projects
      </Text>

      <Flex direction="column" gap={6}>
        {projects.map((project, index) => (
          <Flex key={index} direction="column" gap={2}>
            <Text role="paragraph" size="sm" color="text-50">
              {project.date}
            </Text>

            <Text role="label" size="xl" color="text-90">
              {project.name}
            </Text>

            {project.description && (
              <Text role="paragraph" size="md" color="text-70">
                {project.description}
              </Text>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                {project.link}
              </a>
            )}
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};
