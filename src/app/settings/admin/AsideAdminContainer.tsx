"use client";

import { ContainerInside } from "@/components/container/ContainerInside";
import { TbEdit } from "@/icons";
import { Avatar, Button, Stack, Text } from "@mantine/core";
import React from "react";

export const AsideAdminContainer = () => {
  return (
    <ContainerInside width="30%">
      <Stack justify="space-between" style={{ height: "100%" }}>
        <Stack style={{ height: "100%", paddingTop: "9.8rem" }} align="center">
          <Avatar size={"7rem"} />
          <Stack gap={4} align="center">
            <Text style={{ fontSize: "1.2rem" }}>Simon Briceño</Text>
            <Text
              styles={(theme) => ({
                root: {
                  fontSize: "0.8rem",
                  color: `${theme.colors.principalTheme[6]}`,
                },
              })}
            >
              Admin
            </Text>
            <Text>27 años</Text>
            <Text>correo@correo.com</Text>
            <Text>Carabobo, Valencia VE</Text>
            <Text>16 Dic. 1996</Text>
            <Text>Ofi. Valencia</Text>
          </Stack>
        </Stack>
        <Button
          leftSection={<TbEdit />}
          styles={(theme) => ({
            section: { fontSize: "1.2rem" },
            root: { backgroundColor: `${theme.colors.principalTheme[6]}` },
          })}
        >
          Editar
        </Button>
      </Stack>
    </ContainerInside>
  );
};
