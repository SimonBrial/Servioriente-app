import { Flex } from "@mantine/core";
import ListDataBase from "@/app/data-base/ListDataBase";
import ListLayout from "./layout";
import { FilterContainer } from "@/components/FilterContainer";
import { CountIndicator } from "@/app/data-base/CountIndicator";
import { HiOutlineUserCircle } from "@/components/IconsIndex";
import { AutoCompleteInput } from "@/components/AutoCompleteInput";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import { GeneralFilterLayout } from "@/components/GeneralFilterLayout";
import BtnReportGenerate from "@/components/buttons/BtnReportGenerate";
import BtnAdd from "@/components/buttons/BtnAdd";
import ClientRegister from "@/components/ClientRegister";

function page(): JSX.Element {
  return (
    <ListLayout>
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

        <BtnAdd iconTag="add-user" label="Nuevo Usuario">
          <ClientRegister />
        </BtnAdd>
      </Flex>
      <FilterContainer />
      <ListDataBase />
    </ListLayout>
  );
}

export default page;
