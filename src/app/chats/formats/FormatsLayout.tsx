import { TitleLayout } from "@/components/layout/TitleLayout";
import { AsideSearch } from "../AsideSearch";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import InsideContainer from "@/components/container/InsideContainer";
import { Button, Divider, Flex, ScrollArea, Stack } from "@mantine/core";
import { TemplateCardLayout } from "./TemplateCardLayout";
import { HiOutlineDocumentAdd } from "@/icons";

export const FormatsLayout = (): JSX.Element => {
  return (
    <Stack gap={3}>
      <TitleLayout
        color="blue"
        icon=""
        onText={false}
        title="Buscar Plantilla"
      />
      <AsideSearch />
      <Divider style={{ marginBottom: "0.2rem" }} />
      <InsideContainer offset={252}>
        <ScrollArea h={"98%"} maw={"100%"} offsetScrollbars scrollbarSize={2}>
          <Stack gap={5} h={"50%"}>
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
            <TemplateCardLayout />
          </Stack>
        </ScrollArea>
      </InsideContainer>
      <Flex style={{ width: "100%" }} gap={5}>
        <BtnBackSection label="Volver" dir="/chats" withStyles />
        <Button
          leftSection={<HiOutlineDocumentAdd />}
          variant={"blue"}
          size="xs"
          fullWidth
        >
          Crear Plantilla
        </Button>
      </Flex>
    </Stack>
  );
};
