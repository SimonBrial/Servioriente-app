import { Container, Flex, ScrollArea, Stack } from "@mantine/core";
import InsideContainer from "@/components/InsideContainer";
import { CountIndicator } from "@/components/base-de-datos/CountIndicator";
import { HiOutlineExclamationCircle } from "@/components/IconsIndex";
import { AutoCompleteInput } from "@/components/AutoCompleteInput";
import { GeneralFilterLayout } from "@/components/GeneralFilterLayout";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import BtnAdd from "@/components/buttons/BtnAdd";
import AlarmDescription from "./AlarmDescription";

function page() {
    return (
        <Stack gap={12}>
            <Flex
                gap={"sm"}
                align={"center"}
                style={{ height: "2.5rem", width: "100%" }}
            >
                <CountIndicator
                    count={5}
                    iconSection={<HiOutlineExclamationCircle />}
                    description="Total de usuario"
                />
                <AutoCompleteInput />
                <BtnFilter>
                    <GeneralFilterLayout />
                </BtnFilter>

                <BtnAdd iconTag="add" label="Nueva Alerta" />
            </Flex>
            <InsideContainer offset={120}>
                <Flex gap={"sm"} style={{ height: "100%" }}>
                    <Container
                        p={10}
                        style={{
                            height: "100%",
                            width: "70%",
                            backgroundColor: "#F8F8F8",
                            borderRadius: "6px",
                            border: "1px solid #CDCDCD",
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
                            </ul>
                        </ScrollArea>
                    </Container>
                    <AlarmDescription
                        color="red"
                        title="Cumpleaños"
                        icon="😎"
                    />
                </Flex>
            </InsideContainer>
        </Stack>
    );
}

export default page;
