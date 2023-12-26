"use client";

import { CustomDivider } from "@/components/CustomDivider";
import { HiHeart } from "@/icons";
import { CardContainerHeader } from "@/types/types";
import {
  Avatar,
  Center,
  Stack,
  Title,
  Flex,
  Text,
  Box,
  Badge,
} from "@mantine/core";
import React from "react";

export const CardChatLayout = ({
  colorUser,
}: {
  colorUser: CardContainerHeader;
}): JSX.Element => {
  console.log(colorUser);
  return (
    <Box
      style={{
        border: "1px solid #696969",
        borderRadius: "6px",
        padding: "0.5rem",
      }}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Flex gap={5} align={"center"}>
          <CustomDivider
            colorUser={colorUser}
            dividerHeight={"2.5rem"}
            dividerWidth={"5px"}
          />
          <Avatar />
          <Stack gap={0}>
            <Title order={6}>Nombre del Usuario</Title>
            <Text style={{ fontSize: "0.8rem" }}>Ultimo mensaje</Text>
          </Stack>
        </Flex>
        <Stack align="end">
          <Flex gap={3} align={"center"}>
            <Center
              styles={(theme) => ({
                root: {
                  color: `${theme.colors.principalTheme[6]}`,
                  fontSize: "0.8rem",
                },
              })}
            >
              <HiHeart />
            </Center>
            <Text style={{ fontSize: "0.6rem" }}>10:30 AM</Text>
          </Flex>
          <Badge color="#1F7BF2" radius="sm">
            +1
          </Badge>
        </Stack>
      </Flex>
    </Box>
  );
};

/*
background: rgb(250,199,93);
background: linear-gradient(180deg, rgba(250,199,93,1) 0%, rgba(253,14,120,1) 50%, rgba(45,104,221,1) 100%);

*/
