"use client";

import { Flex, Stack, Text, TextInput, Title } from "@mantine/core";
import React from "react";

export const FormatsHeader = () => {
  return (
    <Stack gap={4}>
      <Flex gap={6}>
        <Title order={3}>Titulo: </Title>
        <TextInput style={{ width: "100%" }} />
      </Flex>
      <Flex gap={6}>
        <Title order={5}>Creado por: </Title>
        <Text
          styles={(theme) => ({
            root: {
              color: `${theme.colors.principalTheme[6]}`,
              fontWeight: "light",
            },
          })}
        >
          Mario Hurtado
        </Text>
      </Flex>
    </Stack>
  );
};
