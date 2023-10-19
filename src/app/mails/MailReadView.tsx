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
import { useViewportSize } from "@mantine/hooks";
import {
    HiOutlineStar,
    HiOutlineDotsVertical,
    CgCornerUpLeft,
    CgCornerDoubleUpLeft,
    CgCornerUpRight,
} from "../../components/IconsIndex";

export default function MailReadView() {
    const { height, width } = useViewportSize();
    console.log(height * 0.88);

    return (
        <>
            <Container
                style={{
                    height: "12%",
                    padding: "0.2rem 0.2rem 0.5rem 0.2rem"
                }}
            >
                <Flex style={{}} gap={"sm"} w={"100%"} align={"center"}>
                    <Avatar
                        src={null}
                        alt="no image here"
                        color="indigo"
                        size="lg"
                    />
                    <Stack justify={"space-between"} w={"100%"}>
                        <Flex
                            justify={"space-between"}
                            w={"100%"}
                            style={{ marginBottom: "-1rem" }}
                        >
                            <Title
                                order={4}
                                style={{
                                    color: "#696969",
                                    marginBottom: "-0.25rem",
                                }}
                            >
                                Title - Email
                            </Title>
                            <Flex
                                style={{ marginBottom: "-0.25rem" }}
                                align={"center"}
                                justify={"end"}
                                gap={"xs"}
                            >
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
                        </Flex>
                        <Flex justify={"space-between"} w={"100%"}>
                            <Flex align={"center"} gap={"sm"}>
                                <Text
                                    styles={(theme) => ({
                                        root: {
                                            color: theme.colors
                                                .principalTheme[6],
                                        },
                                    })}
                                >
                                    Para:
                                </Text>
                                <Text>(correo@correo.com)</Text>
                            </Flex>
                            <Flex align={"center"}>
                                <Text>Para:</Text>
                                <Text>(correo@correo.com)</Text>
                            </Flex>
                        </Flex>
                    </Stack>
                </Flex>
            </Container>
            <Container
                p={10}
                style={{
                    height: "88%",
                    border: "1px solid #696969",
                    borderRadius: "6px",
                    backgroundColor: "#fff",
                }}
            >
                <ScrollArea
                    h={"100%"}
                    style={{ borderRadius: "6px" }}
                    offsetScrollbars
                >
                    <ul>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                        <li>Prueba</li>
                    </ul>
                </ScrollArea>
            </Container>
        </>
    );
}
