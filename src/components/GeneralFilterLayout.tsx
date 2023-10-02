"use client";

import {
    Divider,
    Flex,
    Select,
    Stack,
    TextInput,
    Title,
    Button,
} from "@mantine/core";
//import { Calendar, DateInput } from "@mantine/dates";
import {
    HiOutlineUser,
    AiOutlineCar,
    MdOutlinePlace,
    HiDevicePhoneMobile,
    BsFilter,
} from "./IconsIndex";
import { CalendarInput } from "./CalendarInput";

export function GeneralFilterLayout() {
    return (
        <Stack>
            <Title order={2} style={{ color: "#696969", textAlign: "center" }}>
                FILTRAR CATEGORIA
                <Divider
                    size="md"
                    styles={(theme) => ({
                        root: {
                            borderColor: `${theme.colors.principalTheme[6]}`,
                        },
                    })}
                />
            </Title>
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Nombre
                </Title>
                <TextInput
                    leftSection={<HiOutlineUser />}
                    variant="default"
                    size="xs"
                    placeholder="Nombre"
                />
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Apellido
                </Title>
                <TextInput
                    leftSection={<HiOutlineUser />}
                    variant="default"
                    size="xs"
                    placeholder="Apellido"
                />
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Vehiculo
                </Title>
                <TextInput
                    leftSection={<AiOutlineCar />}
                    variant="default"
                    size="xs"
                    placeholder="Vehiculo"
                />
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Estado
                </Title>
                <TextInput
                    leftSection={<MdOutlinePlace />}
                    variant="default"
                    size="xs"
                    placeholder="Estado"
                />
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Telefono
                </Title>
                <div style={{ display: "flex", gap: "8px" }}>
                    <Select
                        style={{ width: "100px" }}
                        size="xs"
                        label=""
                        placeholder="Codigo"
                        data={["0412", "0424", "0416"]}
                    />
                    <TextInput
                        leftSection={<HiDevicePhoneMobile />}
                        variant="default"
                        size="xs"
                        placeholder="Telefono"
                    />
                </div>
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Red Social
                </Title>
                <Select
                    size="xs"
                    label=""
                    placeholder="Red Social"
                    data={["Facebook", "Instagram", "Whatsapp"]}
                />
            </Flex>
            <Flex justify={"space-between"} align={"center"}>
                <Title order={5} style={{ color: "#696969" }}>
                    Estatus
                </Title>
                <Select
                    size="xs"
                    label=""
                    placeholder="Estatus"
                    data={[
                        "Muy Importante",
                        "Importante",
                        "Normal",
                        "Poco Importante",
                        "Muy Poco Importante",
                    ]}
                />
            </Flex>
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
