"use client";

import { CustomDivider } from "@/components/CustomDivider";
import { HiHeart } from "@/icons";
import { CardContainerHeader } from "@/types/types";
import {
  Avatar,
  Badge,
  Center,
  Divider,
  Flex,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import React from "react";
import { SearchInChat } from "./SearchInChat";

interface UserChatHeaderProps {
  colorUser: CardContainerHeader;
  status: boolean;
}

export const UserChatHeader = ({
  colorUser,
  status,
}: UserChatHeaderProps): JSX.Element => {
  return (
    <Flex style={{ width: "100%" }} justify={"space-around"}>
      <Flex gap={8} align={"center"} style={{ width: "100%" }}>
        <CustomDivider
          colorUser={colorUser}
          dividerHeight={"3.2rem"}
          dividerWidth={"5px"}
        />
        <Center style={{ position: "relative" }}>
          <Avatar size={"lg"} />
          <Badge
            size="xs"
            color="#3ceb3f"
            style={{
              position: "absolute",
              bottom: "-0.1rem",
              right: "0.15rem",
            }}
          />
        </Center>
        <Stack gap={0}>
          <Text style={{ fontSize: "1.2rem" }}>Nombre de Usuario</Text>
          {status ? (
            <Text
              style={{ fontSize: "0.8rem" }}
              styles={(theme) => ({
                root: { color: `${theme.colors.principalTheme[6]}` },
              })}
            >
              En linea
            </Text>
          ) : (
            <Text
              style={{ fontSize: "0.8rem" }}
              styles={(theme) => ({
                root: { color: `${theme.colors.principalTheme[6]}` },
              })}
            >
              Desconectado
            </Text>
          )}
        </Stack>
      </Flex>
      <UnstyledButton
        styles={(theme) => ({
          root: { color: "#CDCDCD", fontSize: "2rem", marginRight: "0.5rem" },
        })}
      >
        <HiHeart />
      </UnstyledButton>
      <Divider orientation="vertical" style={{ margin: "0 0.2rem" }} />
      <SearchInChat />
    </Flex>
  );
};
