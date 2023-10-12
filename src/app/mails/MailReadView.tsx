"use client";
import {
    Avatar,
    Container,
    Flex,
    Group,
    ScrollArea,
    Title,
    Text,
    Stack,
    UnstyledButton,
} from "@mantine/core";
import {
    HiOutlineStar,
    HiOutlineDotsVertical,
    CgCornerUpLeft,
    CgCornerDoubleUpLeft,
    CgCornerUpRight,
} from "../../components/IconsIndex";

export default function MailReadView() {
    return (
        <Container p={10}>
            <Flex
                gap={"sm"}
                w={"100%"}
                align={"center"}
            >
                <Avatar
                    src={null}
                    alt="no image here"
                    color="indigo"
                    size="lg"
                />
                <Flex justify={"space-between"} w={"100%"}>
                    <Stack gap={"0.5rem"}>
                        <Title order={4} style={{ color: "#696969" }}>
                            Title - Email
                        </Title>
                        <Flex align={"center"} gap={"sm"}>
                            <Text
                                styles={(theme) => ({
                                    root: {
                                        color: theme.colors.principalTheme[6],
                                    },
                                })}
                            >
                                Para:
                            </Text>
                            <Text>(correo@correo.com)</Text>
                        </Flex>
                    </Stack>
                    <Stack gap={"0.5rem"}>
                        <Flex align={"center"} justify={"end"} gap={"xs"}>
                            <UnstyledButton style={{ color: "#696969" }}>
                                <HiOutlineStar size="1.5rem" />
                            </UnstyledButton>
                            <UnstyledButton style={{ color: "#696969" }}>
                                <CgCornerUpLeft size="1.5rem" />
                            </UnstyledButton>
                            <UnstyledButton style={{ color: "#696969" }}>
                                <CgCornerDoubleUpLeft size="1.5rem" />
                            </UnstyledButton>
                            <UnstyledButton style={{ color: "#696969" }}>
                                <CgCornerUpRight size="1.5rem" />
                            </UnstyledButton>
                            <UnstyledButton style={{ color: "#696969" }}>
                                <HiOutlineDotsVertical size="1.5rem" />
                            </UnstyledButton>
                        </Flex>
                        <Flex align={"center"}>
                            <Text>Para:</Text>
                            <Text>(correo@correo.com)</Text>
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>
            <ScrollArea h={520} offsetScrollbars></ScrollArea>
        </Container>
    );
}
