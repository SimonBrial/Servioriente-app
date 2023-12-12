import { AutoCompleteInput } from "@/components/AutoCompleteInput";
import { GeneralFilterLayout } from "@/components/GeneralFilterLayout";
import BtnAdd from "@/components/buttons/BtnAdd";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import BtnReportGenerate from "@/components/buttons/BtnReportGenerate";
import { Flex, Stack, Container } from "@mantine/core";
import { CountIndicator } from "../data-base/CountIndicator";
import { HiOutlineUserCircle } from "@/components/IconsIndex";
import CreateClientLayout from "./CreateClientLayout";
import { BoardSectionList } from "./prueba/BoardSectionList";

function page(): JSX.Element {
  return (
    <Container>
      <Stack>
        <Flex
          gap={"sm"}
          align={"center"}
          style={{ height: "2.5rem", width: "100%" }}
        >
          <CountIndicator
            count={24}
            iconSection={<HiOutlineUserCircle />}
            description="Total de usuario"
          />
          <AutoCompleteInput />
          <BtnFilter>
            <GeneralFilterLayout />
          </BtnFilter>
          <BtnReportGenerate />

          <BtnAdd iconTag="add-user" label="Nuevo Cliente">
            <CreateClientLayout />
          </BtnAdd>
        </Flex>
        <BoardSectionList />
      </Stack>
    </Container>
  );
}

export default page;
