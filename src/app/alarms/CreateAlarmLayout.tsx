import { MdOutlineInsertEmoticon, MdTitle } from "@/components/IconsIndex";
import { TitleLayout } from "@/components/TitleLayout";
import VerticalInputLayout from "@/components/VerticalInputLayout";
import { Flex, Stack, Title, Text, ScrollArea } from "@mantine/core";
import PrivateInput from "./PrivateInput";
import AutomatedInput from "./AutomatedInput";
import WarningInfo from "@/components/WarningInfo";
import TimeSelect from "./TimeSelect";
import SelectInput from "@/components/SelectInput";
import TextEditor from "@/components/TextEditor";
import { CalendarInput } from "@/components/CalendarInput";

export default function CreateAlarmLayout({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <ScrollArea offsetScrollbars scrollbarSize={2} scrollHideDelay={500}>
      <Stack
        gap={"0.4rem"}
        styles={{
          root: { padding: "0 0.2rem" },
        }}
      >
        <TitleLayout title={title} color="" icon="" onText={ false } />
        <VerticalInputLayout label="Titulo" icon={<MdTitle />} />
        <VerticalInputLayout label="Icono" icon={<MdOutlineInsertEmoticon />} />
        <CalendarInput />
        <Flex justify={"space-between"} align={"center"}>
          <Title order={4}>Fecha de Creacion</Title>
          <Flex gap={4}>
            <Text>20/9/2023 - 10:58 AM</Text>
            <WarningInfo description="Este valor no se puede modificar" />
          </Flex>
        </Flex>
        <TimeSelect label="Hora" />
        <PrivateInput privateStatus={false} userName="" />
        <AutomatedInput automatedStatus={false} />
        <SelectInput title="Selecciona una Carpeta" />
        <TextEditor />
      </Stack>
    </ScrollArea>
  );
}
