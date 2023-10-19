"use client";

import {
    TextInput,
    Checkbox,
    Divider,
    Select,
    Button,
    Stack,
    Title,
    Flex,
} from "@mantine/core";
//import { Calendar, DateInput } from "@mantine/dates";
import {
    HiOutlineUser,
    AiOutlineCar,
    MdOutlinePlace,
    HiDevicePhoneMobile,
    BsFilter,
} from "./IconsIndex";
import { TitleLayout } from "./TitleLayout";
import { CalendarInput } from "./CalendarInput";

export function GeneralFilterLayout() {
    return (
        <Stack
            gap={"xs"}
            styles={{
                root: { padding: "1rem" },
            }}
        >
            <TitleLayout title="FILTRAR CATEGORIA" />
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Nombre
                </Title>
                <Checkbox aria-label="My checkbox" />
            </Flex>
            <Divider size={"xs"} />
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Apellido
                </Title>
                <Checkbox aria-label="My checkbox" />
            </Flex>
            <Divider size={"xs"} />
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Vehiculo
                </Title>
                <Checkbox aria-label="My checkbox" />
            </Flex>
            <Divider size={"xs"} />
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Estado
                </Title>
                <Checkbox aria-label="My checkbox" />
            </Flex>
            <Divider size={"xs"} />
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Telefono
                </Title>
                <Checkbox aria-label="My checkbox" />
            </Flex>
            <Divider size={"xs"} />
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Red Social
                </Title>
                <Checkbox aria-label="My checkbox" />
            </Flex>
            <Divider size={"xs"} />
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Estatus
                </Title>
                <Checkbox aria-label="My checkbox" />
            </Flex>
            <Divider size={"xs"} />
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Desde
                </Title>
                <p>Aqui va el input del calendario</p>
            </Flex>
            <Button
                leftSection={<BsFilter />}
                styles={(theme) => ({
                    section: { fontSize: "1.8rem" },
                    root: {
                        backgroundColor: `${theme.colors.principalTheme[6]}`,
                    },
                })}
            >
                Aplicar Filtros
            </Button>
        </Stack>
    );
}
