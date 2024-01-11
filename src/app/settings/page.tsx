import { Divider, Flex, Stack, Text } from "@mantine/core";
import { ColorThemeSelection } from "./ColorThemeSelection";
import { FontSizeSelection } from "./FontSizeSelection";
import { GlobalLayout } from "./GlobalLayout";
import { GlobalTheme } from "./GlobalTheme";
import { SidebarSectionSelection } from "./SidebarSectionSelection";
import { BtnSave } from "@/components/buttons/BtnSave";
import { BtnCancel } from "@/components/buttons/BtnCancel";
import { UserDBCountView } from "./UserDBCountView";

export default function page(): JSX.Element {
  return (
    <GlobalLayout>
      <Stack>
        <GlobalTheme />
        <ColorThemeSelection />
        <FontSizeSelection />
        <UserDBCountView />
        <Stack gap={4}>
          <Text>Secciones de la Sidebar</Text>
          <Divider />
          <SidebarSectionSelection label="Dashboard" />
          <SidebarSectionSelection label="Process" />
          <SidebarSectionSelection label="Chats" />
          <SidebarSectionSelection label="Base de Datos" />
          <SidebarSectionSelection label="Calendario" />
          <SidebarSectionSelection label="Correo" />
          <SidebarSectionSelection label="Recordatorios" />
          <SidebarSectionSelection label="Bloc de Notas" />
          <Divider />
        </Stack>
      </Stack>
      <Flex gap={4}>
        <BtnCancel />
        <BtnSave />
      </Flex>
    </GlobalLayout>
  );
}
