import { Flex } from "@ophelia/ui";
import {FooterLink} from "./footer-link";

export const FooterLinks = () => {
    return (
        <Flex direction="row" gap={4}>
            <FooterLink href="/candidates">Contact us</FooterLink>

            <FooterLink href="/candidates">Help</FooterLink>
        </Flex>
    );
};
