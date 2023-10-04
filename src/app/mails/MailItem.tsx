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
    Collapse,
    Flex,
    Group,
    Text,
    Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function MailItem() {
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <Box mx="auto">
            <Group
                onClick={toggle}
                mb={5}
                styles={{
                    root: {
                        padding: "0.3rem 1rem",
                        border: "1px solid #CDCDCD",
                        backgroundColor: "#F8F8F8",
                        borderRadius: "6px",
                    },
                }}
            >
                <Flex
                    justify={"space-between"}
                    style={{ width: "100%", cursor: "pointer" }}
                >
                    <Group>
                        <Flex align={"center"}>
                            <Checkbox size="sm" />
                            <ActionIcon
                                variant="transparent"
                                color="yellow"
                                size="lg"
                                aria-label="Favorites"
                            >
                                <HiOutlineStar />
                            </ActionIcon>
                        </Flex>
                        <Flex
                            align={"center"}
                            gap={"xs"}
                            style={{ marginLeft: "-0.8rem" }}
                        >
                            <Title order={4}>Titulo del mail</Title>
                            <Title order={5}>
                                Titulo del cuerpo del correo
                            </Title>
                            <Text>Descripcion del mail</Text>
                        </Flex>
                    </Group>
                    <Flex>
                        <ActionIcon
                            variant="transparent"
                            color="yellow"
                            size="lg"
                            aria-label="Favorites"
                        >
                            <HiOutlineTrash />
                        </ActionIcon>
                        <ActionIcon
                            variant="transparent"
                            color="yellow"
                            size="lg"
                            aria-label="Favorites"
                        >
                            <HiOutlineMailOpen />
                        </ActionIcon>
                        <ActionIcon
                            variant="transparent"
                            color="yellow"
                            size="lg"
                            aria-label="Favorites"
                        >
                            <HiOutlineSave />
                        </ActionIcon>
                    </Flex>
                </Flex>
            </Group>

            <Collapse in={opened}>
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
                </ul>
                {/* <Text>
                </Text> */}
            </Collapse>
        </Box>
    );
}
