import { Flex } from "@ophelia/ui";
import {Navlink} from "./navlink";

export const FooterLinks = () => {
    return (
        <Flex direction="row" gap={4}>
            <Navlink href="/candidates">Contact us</Navlink>

            <Navlink href="/candidates">Help</Navlink>
        </Flex>
    );
};
