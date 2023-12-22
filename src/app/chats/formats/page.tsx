import { TitleLayout } from "@/components/layout/TitleLayout";
import { AsideSearch } from "../AsideSearch";
import { BtnBackSection } from "@/components/buttons/BtnBackSection";
import InsideContainer from "@/components/container/InsideContainer";
import { Divider, ScrollArea, Stack } from "@mantine/core";
import { TemplateCardLayout } from "./TemplateCardLayout";

const page = (): JSX.Element => {
  return (
    <div>
      <div style={{ width: "40%" }}>
        <BtnBackSection
          label="Volver a Chats"
          dir="/chats"
          withStyles={false}
        />
      </div>
      <Stack gap={3}>
        <TitleLayout
          color="blue"
          icon=""
          onText={false}
          title="Buscar Plantilla"
        />
        <AsideSearch />
        <Divider style={{ marginBottom: "0.2rem" }} />
        <InsideContainer offset={220}>
          <ScrollArea h={"98%"} maw={"100%"} offsetScrollbars scrollbarSize={2}>
            <Stack gap={5} h={"50%"}>
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
              <TemplateCardLayout />
            </Stack>
          </ScrollArea>
        </InsideContainer>
      </Stack>
    </div>
  );
};

export default page;
