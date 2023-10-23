"use client";

import {
    ScrollArea,
    Container,
    Stack,
    Title,
    Text,
    Flex,
    Box,
    Center,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { TitleLayout } from "@/components/TitleLayout";
import { AlarmProps } from "@/interface/interface";
import PrivateInput from "./PrivateInput";
import AutomatedInput from "./AutomatedInput";
import BtnActions from "@/components/buttons/BtnActions";
import { HiOutlinePencil, MdOutlinePlace } from "@/components/IconsIndex";

export default function AlarmDescription({ objAlarm }: AlarmProps) {
    const { height } = useViewportSize();
    const {
        privateAlarm,
        privateUser,
        description,
        automated,
        createdTo,
        createAt,
        color,
        title,
        icon,
        id,
    } = objAlarm;

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
            {objAlarm ? (
                <Stack h={"100%"} justify={"space-between"}>
                    <Stack gap={height <= 720 ? 1 : 2} mah={"90%"}>
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
                                size="sm"
                                styles={(theme) => ({
                                    root: {
                                        color: theme.colors.principalTheme[6],
                                    },
                                })}
                            >
                                {createAt}
                            </Text>
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Title order={4}>Para:</Title>
                            <Text
                                size="sm"
                                styles={(theme) => ({
                                    root: {
                                        color: theme.colors.principalTheme[6],
                                    },
                                })}
                            >
                                {createdTo}
                            </Text>
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Title order={4}>Cliente:</Title>
                            <Text>Cliente</Text>
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Title order={4}>Privado:</Title>
                            <PrivateInput
                                userName={privateUser}
                                privateStatus={privateAlarm}
                            />
                        </Flex>
                        <Flex justify={"space-between"}>
                            <Title order={4}>Automatizado:</Title>
                            <AutomatedInput automatedStatus={automated} />
                        </Flex>
                        <Stack gap={1} h={height <= 720 ? "53%" : "70%"}>
                            <Title order={4}>Descripción:</Title>
                            <ScrollArea
                                h={"100%"}
                                maw={"100%"}
                                offsetScrollbars
                            >
                                <Box>
                                    <Text>{description}</Text>
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
            ) : (
                <Stack
                    h={"100%"}
                    gap={5}
                    justify="center"
                    align="center"
                    styles={(theme) => ({
                        root: {
                            color: "rgba(105, 105, 105, 0.3)",
                            fontSize: "12rem",
                        },
                    })}
                >
                    <MdOutlinePlace />
                    <Text size="2.5rem" style={{ textAlign: "center" }}>
                        Selecciona un recordatorio
                    </Text>
                </Stack>
            )}
        </Container>
    );
}
