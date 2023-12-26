"use client";

import {
  HiOutlineDocumentText,
  HiOutlineDotsVertical,
} from "@/icons";
import { Box, Center, Flex, Stack, Text, Title } from "@mantine/core";
import React from "react";

export const TemplateCardLayout = (): JSX.Element => {
  return (
    <Box
      style={{
        border: "1px solid #696969",
        borderRadius: "6px",
        backgroundColor: "white",
        padding: "0.3rem 0.5rem",
      }}
    >
      <Flex justify={"space-between"}>
        <Flex gap={5}>
          <Center>
            <HiOutlineDocumentText
              style={{
                fontSize: "2.5rem",
                color: "#696969",
                strokeWidth: "1",
              }}
            />
          </Center>
          <Stack gap={0}>
            <Title
              order={5}
              styles={(theme) => ({ root: { color: "#696969" } })}
            >
              Mario Hurtado
            </Title>
            <Text
              styles={(theme) => ({
                root: {
                  color: `${theme.colors.principalTheme[6]}`,
                  fontSize: "0.8rem",
                },
              })}
            >
              Plantilla para Cumpleaños
            </Text>
          </Stack>
        </Flex>
        <Center>
          <HiOutlineDotsVertical
            style={{ fontSize: "1.5rem", color: "#696969", strokeWidth: "1.5" }}
          />
        </Center>
      </Flex>
    </Box>
  );
};
