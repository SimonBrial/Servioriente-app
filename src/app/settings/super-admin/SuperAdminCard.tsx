"use client";

import BtnDelete from "@/components/buttons/BtnDelete";
import BtnEdit from "@/components/buttons/BtnEdit";
import BtnSee from "@/components/buttons/BtnSee";
import { BiCrown } from "@/icons";
import { Avatar, Center, Container, Flex, Text } from "@mantine/core";
import React from "react";
import { SuperAdminUserLayout } from "./SuperAdminUserLayout";
import { SuperAdminDescription } from "./SuperAdminDescription";
import { SuperAdminDeleteLayout } from "./SuperAdminDeleteLayout";

export const SuperAdminCard = ({ admin }: { admin: boolean }) => {
  return (
    <Container
      styles={(theme) => ({
        root: {
          border: "1px solid #cdcdcd",
          backgroundColor: "#f8f8f8",
          borderRadius: "6px",
          padding: "0.6rem 1rem",
          width: "100%",
        },
      })}
    >
      <Flex justify={"space-between"} align={"center"}>
        <Flex align={"center"} gap={8} style={{ cursor: "default" }}>
          <Avatar style={{ fontSize: "1.1rem" }} />
          <Text style={{ fontSize: "1.5rem" }}>Simon Briceño</Text>
          {admin ? (
            <Center
              styles={(theme) => ({
                root: { color: `${theme.colors.principalTheme[6]}` },
              })}
            >
              <BiCrown style={{ fontSize: "0.95rem" }} />
            </Center>
          ) : (
            <></>
          )}
        </Flex>
        <Flex gap={"xs"}>
          <BtnDelete>
            <SuperAdminDeleteLayout />
          </BtnDelete>
          <BtnSee>
            <SuperAdminDescription />
          </BtnSee>
          <BtnEdit buttonStyles="special">
            <SuperAdminUserLayout />
          </BtnEdit>
        </Flex>
      </Flex>
    </Container>
  );
};
