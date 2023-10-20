import { Container, Flex, Group, ScrollArea } from "@mantine/core";

import MailItem from "../MailItem";
import MailReadView from "../MailReadView";

export default function page() {
    return (
        <Flex gap={"sm"} style={{ height: "100%" }}>
            <Container
                py={10}
                px={5}
                style={{
                    width: "35%",
                    height: "100%",
                    backgroundColor: "#F8F8F8",
                    borderRadius: "6px",
                    border: "1px solid #CDCDCD",
                }}
            >
                <ScrollArea
                    h={"100%"}
                    style={{ borderRadius: "6px" }}
                    offsetScrollbars
                >
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                    <MailItem />
                </ScrollArea>
            </Container>
            <Container
                p={10}
                style={{
                    height: "100%",
                    width: "70%",
                    backgroundColor: "#F8F8F8",
                    borderRadius: "6px",
                    border: "1px solid #CDCDCD",
                }}
            >
                <MailReadView />
            </Container>
        </Flex>
    );
}
