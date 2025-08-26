import { Flex, Text } from "@ophelia/ui";
import clsx from "clsx";
import { useListing } from "../../context";
import { capitalize } from "@ophelia/utils";
import { useMemo } from "react";

export const Body = () => {
  const { listing } = useListing();
  const { aboutCompany, aboutRole, responsibilities, requirements, outro } =
    listing;

  const blocks = useMemo(() => {
    const arr: { label: string; content: string }[] = [];

    if (aboutCompany) {
      arr.push({
        label: `About ${capitalize(listing.company.name, true)}`,
        content: aboutCompany,
      });
    }

    arr.push(
      { label: "About the role", content: aboutRole },
      { label: "Responsibilities", content: responsibilities },
      { label: "Requirements", content: requirements },
    );

    if (outro) {
      arr.push({ label: "Outro", content: outro });
    }

    return arr;
  }, [
    aboutCompany,
    aboutRole,
    responsibilities,
    requirements,
    outro,
    listing.company.name,
  ]);

  return (
    <Flex direction="column" gap={8} fullWidth>
      {blocks.map((block, i) => (
        <Flex
          key={block.label}
          direction="column"
          gap={4}
          fullWidth
          className={clsx("unfold", `delay-${i + 3}`)}
        >
          <Text role="heading" size="xs">
            {block.label}
          </Text>
          <Text role="paragraph" size="md" color="text-70">
            {block.content}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
