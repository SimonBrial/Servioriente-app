import { Container, Flex, ScrollArea, Stack } from "@mantine/core";
import InsideContainer from "@/components/InsideContainer";
import { CountIndicator } from "@/components/base-de-datos/CountIndicator";
import { HiOutlineExclamationCircle } from "@/components/IconsIndex";
import { AutoCompleteInput } from "@/components/AutoCompleteInput";
import { GeneralFilterLayout } from "@/components/GeneralFilterLayout";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import BtnAdd from "@/components/buttons/BtnAdd";
import AlarmDescription from "./AlarmDescription";
import { AlarmObj } from "@/interface/interface";

const fakeAlarmDescription: AlarmObj = {
  id: crypto.randomUUID(),
  title: "Cumpleaños",
  color: "red",
  icon: "😎",
  createAt: "20/9/2023 - 10:58 AM",
  createdTo: "21/9/2023 - 10:00 AM",
  privateAlarm: true,
  privateUser: "Simon Briceño",
  description: `t is a long established fact that a reader
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
    here, making it look like readable English.`,
  automated: true,
};

function page(): JSX.Element {
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
          <AlarmDescription objAlarm={fakeAlarmDescription} />
        </Flex>
      </InsideContainer>
    </Stack>
  );
}

export default page;
