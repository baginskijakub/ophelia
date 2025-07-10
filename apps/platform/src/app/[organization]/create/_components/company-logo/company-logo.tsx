import { Flex, Text } from "@ophelia/ui"
import styles from "./company-logo.module.css"

interface CompanyLogoProps {
  src: string;
  name: string;
}

export const CompanyLogo = (props: CompanyLogoProps) => {
  const { src, name } = props;

  return (
    <Flex align="center" gap={2}>
      <img src={src} alt={name} className={styles.image} />
      <Text role="label" size="md" color="text-70" >{name}</Text>
    </Flex >
  )
}
