import { Container, Flex, ScrollArea } from "@mantine/core";
import MailItem from "./MailItem";
import MailReadView from "./MailReadView";

function page() {
    return (
        <Container px={0} style={{ width: "100%" }}>
            <Flex  gap={"sm"}>
                <Container
                    py={10}
                    px={5}
                    style={{
                        width: "30%",
                        backgroundColor: "#F8F8F8",
                        borderRadius: "6px",
                        border: "1px solid #CDCDCD",
                    }}
                >
                    <ScrollArea h={520} offsetScrollbars>
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
                    py={10}
                    px={5}
                    style={{
                        width: "70%",
                        backgroundColor: "#F8F8F8",
                        borderRadius: "6px",
                        border: "1px solid #CDCDCD",
                    }}
                >
                    <MailReadView />
                </Container>
            </Flex>
        </Container>
    );
}

export default page;
