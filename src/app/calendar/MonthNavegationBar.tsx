"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import { IoChevronBack, IoChevronForward } from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
  Container,
  Stack,
  Flex,
  Text,
  Center,
} from "@mantine/core";
import React from "react";
import classes from "../../styles/BtnStyles.module.css";

export const MonthNavegationBar = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container style={{ width: "100%", padding: "0" }}>
      <Stack gap={4} style={{ width: "100%" }}>
        <Flex gap={10} align={"center"}>
          <Flex gap={4}>
            <UnstyledButton
              variant="white"
              size={"lg"}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classes.btnMonth
                    : classes.btnMonth_dark,
              }}
            >
              <Center>
                <IoChevronBack />
              </Center>
            </UnstyledButton>
            <UnstyledButton
              variant="white"
              size={"lg"}
              classNames={{
                root:
                  colorScheme === "light"
                    ? classes.btnMonth
                    : classes.btnMonth_dark,
              }}
            >
              <Center>
                <IoChevronForward />
              </Center>
            </UnstyledButton>
          </Flex>
          <Text
            styles={(theme) => ({
              root: {
                fontSize: "1.5rem",
                color:
                  colorScheme === "light"
                    ? `${theme.colors.lightTheme[3]}`
                    : `${theme.colors.darkTheme[2]}`,
              },
            })}
          >
            Enero 2024
          </Text>
        </Flex>
        <GeneralDivider />
      </Stack>
    </Container>
  );
};
