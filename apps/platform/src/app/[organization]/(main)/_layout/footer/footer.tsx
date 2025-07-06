import {Flex, FullLogo, Separator} from "@ophelia/ui";
import {FooterLinks} from "../links";
import styles from "./footer.module.css";

export const Footer = () => {

    return (
        <div className={styles.root}>
            <Separator orientation="horizontal"/>

            <div className={styles.inner}>
                <div className={styles.side}>
                    <FullLogo size="lg"/>
                </div>

                <Flex className={styles.side}>
                    <FooterLinks/>
                </Flex>
            </div>
        </div>
    );
};
