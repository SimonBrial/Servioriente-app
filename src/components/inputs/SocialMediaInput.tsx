"use client";

import { HiLink } from "@/icons";
import {
  Center,
  Flex,
  TextInput,
  Title,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import classes from "../../styles/BtnStyles.module.css";

export const SocialMediaInput = ({
  socialMediaName,
  socialMediaIcon,
}: {
  socialMediaName: string;
  socialMediaIcon: React.ReactNode;
}) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title
        order={5}
        styles={(theme) => ({
          root: {
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[2]}`
                : `${theme.colors.darkTheme[2]}`,
          },
        })}
      >
        {socialMediaName}
      </Title>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Instagram"
          leftSection={socialMediaIcon}
          styles={(theme) => ({
            input: {
              backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
              color: `${theme.colors.lightTheme[3]}`,
            },
          })}
        />
        <UnstyledButton
          classNames={{
            root:
              colorScheme === "light" ? classes.btnMail : classes.btnMail_dark,
          }}
          style={{ marginTop: "0.2rem" }}
        >
          <Center style={{ fontSize: "1.2rem" }}>
            <HiLink />
          </Center>
        </UnstyledButton>
      </div>
    </Flex>
  );
};
