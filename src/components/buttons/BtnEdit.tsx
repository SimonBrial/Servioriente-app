import {
    ActionIcon,
    TextInput,
    Button,
    Drawer,
    Select,
    Stack,
    Title,
    Flex,
    Tooltip,
    UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
    HiDevicePhoneMobile,
    MdOutlinePlace,
    HiOutlineCheck,
    HiOutlineUser,
    AiOutlineCar,
    HiLink,
    HiOutlinePencil,
    HiOutlineSave,
} from "../IconsIndex";
import { TitleLayout } from "../TitleLayout";
import btnClass from "../styles/BtnStyles.module.css";
import BtnActions from "./BtnActions";

export default function BtnEdit({ label }: { label: string }) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Drawer
                opened={opened}
                onClose={close}
                position="right"
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                styles={{
                    header: { display: "none" },
                }}
            >
                <Stack
                    justify="space-between"
                    style={{
                        padding: "1rem 1rem 0 1rem",
                        height: "96vh",
                    }}
                >
                    <Stack gap={"xs"}>
                        <TitleLayout title="Editar Registro" />
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
                                Estatus
                            </Title>
                            <Select
                                size="xs"
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
                        <TitleLayout title="Redes Sociales" />
                        <Flex justify={"space-between"} align={"center"}>
                            <Title order={5} style={{ color: "#696969" }}>
                                Facebook
                            </Title>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "0.5rem",
                                    alignItems: "center",
                                }}
                            >
                                <TextInput size="xs" placeholder="Facebook" />

                                <ActionIcon
                                    variant="transparent"
                                    color="#696969"
                                    aria-label="Settings"
                                >
                                    <HiLink />
                                </ActionIcon>
                            </div>
                        </Flex>
                        <Flex justify={"space-between"} align={"center"}>
                            <Title order={5} style={{ color: "#696969" }}>
                                Whatsapp
                            </Title>
                            <Title
                                order={5}
                                styles={{
                                    root: {
                                        color: "#696969",
                                        width: "55%",
                                        textAlign: "center",
                                    },
                                }}
                            >
                                0424 -589.85.76
                            </Title>
                        </Flex>
                        <Flex justify={"space-between"} align={"center"}>
                            <Title order={5} style={{ color: "#696969" }}>
                                Instagram
                            </Title>
                            <div
                                style={{
                                    display: "flex",
                                    gap: "0.5rem",
                                    alignItems: "center",
                                }}
                            >
                                <TextInput size="xs" placeholder="Instagram" />
                                <ActionIcon
                                    variant="transparent"
                                    color="#696969"
                                    aria-label="Settings"
                                >
                                    <HiLink />
                                </ActionIcon>
                            </div>
                        </Flex>
                    </Stack>
                    <BtnActions icon={<HiOutlineSave />} title="Guardar" close={close}/>
                </Stack>
            </Drawer>
            <Tooltip
                label="Editar"
                withArrow
                position="top"
                styles={(theme) => ({
                    tooltip: {
                        background: `${theme.colors.principalTheme[6]}`,
                    },
                })}
            >
                <UnstyledButton
                    variant="transparent"
                    color="gray"
                    aria-label="Editar"
                    className={btnClass.btnEditEdit_item}
                    onClick={open}
                >
                    <HiOutlinePencil />
                </UnstyledButton>
            </Tooltip>
        </>
    );
}
