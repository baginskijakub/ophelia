import { ApplicationAggregate } from "@ophelia/db/dist/crud";
import { Flex, Text } from "@ophelia/ui";

interface Props {
  requirementsMet: ApplicationAggregate["requirementsMet"];
  requirementsNotMet: ApplicationAggregate["requirementsNotMet"];
}

export const Requirements = (props: Props) => {
  const { requirementsMet, requirementsNotMet } = props;

  return (
    <Flex direction="row" gap={6} fullWidth>
      <Flex direction="column" gap={2}>
        <Text role="label" size="md" color="text-50">
          Requirements met
        </Text>

        {!requirementsMet ||
          (requirementsMet.length === 0 && (
            <Text role="paragraph" size="md" color="text-30">
              No requirements met
            </Text>
          ))}

        {requirementsMet && requirementsMet.length > 0 && (
          <Flex direction="column" gap={1}>
            {requirementsMet.map((requirement, index) => (
              <Text key={index} role="paragraph" size="md" color="text-70">
                • {requirement}
              </Text>
            ))}
          </Flex>
        )}
      </Flex>

      <Flex direction="column" gap={2}>
        <Text role="label" size="md" color="text-50">
          Unmet requirements
        </Text>

        {!requirementsNotMet ||
          (requirementsNotMet.length === 0 && (
            <Text role="paragraph" size="md" color="text-30">
              There are no unmet requirements
            </Text>
          ))}

        {requirementsNotMet && requirementsNotMet.length > 0 && (
          <Flex direction="column" gap={1}>
            {requirementsNotMet.map((requirement, index) => (
              <Text key={index} role="paragraph" size="md" color="text-70">
                • {requirement}
              </Text>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
