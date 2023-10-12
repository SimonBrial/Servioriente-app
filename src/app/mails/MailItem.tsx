"use client";

import {
    HiOutlineMailOpen,
    HiOutlineTrash,
    HiOutlineStar,
    HiOutlineSave,
} from "@/components/IconsIndex";
import {
    ActionIcon,
    Box,
    Button,
    Checkbox,
    Flex,
    Group,
    Text,
    Title,
    Avatar,
    Stack,
} from "@mantine/core";

export default function MailItem() {
    return (
        <Group
            mb={5}
            styles={{
                root: {
                    padding: "0.3rem 1rem",
                    border: "1px solid #CDCDCD",
                    backgroundColor: "#FFF",
                    borderRadius: "6px",
                    /* width: "30%", */
                },
            }}
        >
            <Flex
                justify={"start"}
                gap={"md"}
                style={{
                    width: "100%",
                    cursor: "pointer",
                    padding: "0.5rem",
                }}
            >
                <Avatar
                    src={null}
                    alt="no image here"
                    color="indigo"
                    size="md"
                />
                <Stack gap={0} style={{ width: "100%" }}>
                    <Title order={5}>Titulo del mail</Title>
                    <Flex justify={"space-between"}>
                        <Text
                            styles={(theme) => ({
                                root: {
                                    color: `${theme.colors.principalTheme[6]}`,
                                },
                            })}
                        >
                            Header del correo
                        </Text>
                        <Text
                            styles={(theme) => ({
                                root: {
                                    color: `${theme.colors.principalTheme[6]}`,
                                },
                            })}
                        >
                            12/10/2023
                        </Text>
                    </Flex>
                    <Text>Descripcion del mai...............</Text>
                </Stack>
            </Flex>
        </Group>
    );
}
