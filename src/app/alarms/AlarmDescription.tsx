"use client";
import {
    Text,
    Flex,
    Stack,
    Title,
    Box,
    ScrollArea,
    Container,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { TitleLayout } from "@/components/TitleLayout";
import { TitleLayoutProps } from "@/interface/interface";
import PrivateInput from "./PrivateInput";
import AutomatedInput from "./AutomatedInput";
import BtnActions from "@/components/buttons/BtnActions";
import { HiOutlinePencil } from "@/components/IconsIndex";

export default function AlarmDescription({
    color,
    title,
    icon,
}: TitleLayoutProps) {
    const { height } = useViewportSize();

    return (
        <Container
            p={15}
            style={{
                width: "30%",
                height: "100%",
                backgroundColor: "#F8F8F8",
                borderRadius: "6px",
                border: "1px solid #CDCDCD",
            }}
        >
            <Stack h={"100%"} justify={"space-between"}>
                <Stack gap={2} mah={"90%"}>
                    <TitleLayout title={title} color={color} icon={icon} />
                    <Flex justify={"space-between"}>
                        <Title order={4}>Titulo:</Title>
                        <Text style={{ color: `${color}` }}>{title}</Text>
                    </Flex>
                    <Flex justify={"space-between"}>
                        <Title order={4}>Icono:</Title>
                        <Text size="1.2rem">{icon}</Text>
                    </Flex>
                    <Flex justify={"space-between"}>
                        <Title order={4}>Creado:</Title>
                        <Text
                            styles={(theme) => ({
                                root: {
                                    color: theme.colors.principalTheme[6],
                                },
                            })}
                        >
                            20/9/2023 - 10:58 AM
                        </Text>
                    </Flex>
                    <Flex justify={"space-between"}>
                        <Title order={4}>Cliente:</Title>
                        <Text>Cliente</Text>
                    </Flex>
                    <Flex justify={"space-between"}>
                        <Title order={4}>Privado:</Title>
                        <PrivateInput />
                    </Flex>
                    <Flex justify={"space-between"}>
                        <Title order={4}>Automatizado:</Title>
                        <AutomatedInput />
                    </Flex>
                    <Stack gap={1} h={height <= 720 ? "58%" : "70%"}>
                        <Title order={4}>Descripción:</Title>
                        <ScrollArea h={"100%"} maw={"100%"} offsetScrollbars>
                            <Box>
                                <Text>
                                    t is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using Content here, content
                                    here, making it look like readable English.t
                                    is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using Content here, content
                                    here, making it look like readable English.t
                                    is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using Content here, content
                                    here, making it look like readable English.
                                    t is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using Content here, content
                                    here, making it look like readable English.t
                                    is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using Content here, content
                                    here, making it look like readable English.t
                                    is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout. The
                                    point of using Lorem Ipsum is that it has a
                                    more-or-less normal distribution of letters,
                                    as opposed to using Content here, content
                                    here, making it look like readable English.
                                </Text>
                            </Box>
                        </ScrollArea>
                    </Stack>
                </Stack>
                <BtnActions
                    close={() => console.log("prueba")}
                    icon={<HiOutlinePencil />}
                    title="Editar"
                />
            </Stack>
        </Container>
    );
}
