"use client";

import React from "react";
import { SidebarSectionSelection } from "./SidebarSectionSelection";
import { Divider, Stack, Text, useMantineColorScheme } from "@mantine/core";

export const SidebarSectionContainer = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={4}>
      <Text>Secciones de la Sidebar</Text>
      <Divider color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"} />
      <SidebarSectionSelection label="Dashboard" />
      <SidebarSectionSelection label="Process" />
      <SidebarSectionSelection label="Chats" />
      <SidebarSectionSelection label="Base de Datos" />
      <SidebarSectionSelection label="Calendario" />
      <SidebarSectionSelection label="Correo" />
      <SidebarSectionSelection label="Recordatorios" />
      <SidebarSectionSelection label="Bloc de Notas" />
      <Divider color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"} />
    </Stack>
  );
};
