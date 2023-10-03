import {
    ActionIcon,
    Drawer,
    ScrollArea,
    Stack,
    Tooltip,
    UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiOutlineEye } from "../IconsIndex";
import btnClass from "../styles/BtnStyles.module.css";
import { TitleLayout } from "../TitleLayout";
import RegisterInfo from "../RegisterInfo";
import StatusBadge from "../base-de-datos/StatusBadge";
import BtnBack from "./BtnBack";

export default function BtnSee() {
    const [opened, { open, close }] = useDisclosure(false);

    const fakeArr = {
        id: 1,
        name: "Mario",
        lastName: "Hurtado",
        car: "car",
        carID: "da6s5d4",
        site: "Estado",
        phone: "32165487",
        email: "correo@gmail.com",
        status: <StatusBadge title="GENERACION" />,
        birthdate: "16-12-1996",
    };

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
                <Stack>
                    <Stack
                        style={{
                            padding: "1rem 1rem 0 1rem",
                            height: "96vh",
                        }}
                    >
                        <TitleLayout title="Registro del cliente" />
                        <ScrollArea
                            h={"90vh"}
                            offsetScrollbars
                            scrollbarSize={4}
                        >
                            <Stack>
                                <RegisterInfo
                                    keyInput={"Nombre: "}
                                    valueInput={fakeArr.name}
                                />
                                <RegisterInfo
                                    keyInput={"Apellido: "}
                                    valueInput={fakeArr.lastName}
                                />
                                <RegisterInfo
                                    keyInput={"Vehiculo: "}
                                    valueInput={fakeArr.car}
                                />
                                <RegisterInfo
                                    keyInput={"Numero de Placa: "}
                                    valueInput={fakeArr.carID}
                                />
                                <RegisterInfo
                                    keyInput={"Estado: "}
                                    valueInput={fakeArr.site}
                                />
                                <RegisterInfo
                                    keyInput={"Telefono: "}
                                    valueInput={fakeArr.phone}
                                />
                                <RegisterInfo
                                    keyInput={"Correo: "}
                                    valueInput={fakeArr.email}
                                />
                                <RegisterInfo
                                    keyInput={"Status: "}
                                    valueInput={fakeArr.status}
                                />
                                <RegisterInfo
                                    keyInput={"Facebook: "}
                                    valueInput={"Facebook"}
                                />
                                <RegisterInfo
                                    keyInput={"Whatsapp: "}
                                    valueInput={fakeArr.phone}
                                />
                                <RegisterInfo
                                    keyInput={"Instagram: "}
                                    valueInput={"Instagram"}
                                />
                            </Stack>
                        </ScrollArea>
                        <BtnBack close={close} />
                    </Stack>
                </Stack>
            </Drawer>
            <Tooltip
                label="Ver"
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
                    aria-label="Ver"
                    className={btnClass.btnEditView_item}
                    onClick={open}
                >
                    <HiOutlineEye />
                </UnstyledButton>
            </Tooltip>
        </>
    );
}
