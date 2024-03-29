"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import { IoChevronBack, IoChevronForward } from "@/icons";
import {
  useMantineColorScheme,
  UnstyledButton,
  Container,
  Center,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "../../styles/BtnStyles.module.css";
import { months } from "../../data/calendarDaysAndMonth";

export const MonthNavigationBar = () => {
  const { colorScheme } = useMantineColorScheme();
  const [monthCount, setMonthCount] = useState<number>(new Date().getMonth());
  const [yearCount, setYearCount] = useState<number>(new Date().getFullYear());

  return (
    <Container style={{ width: "100%", padding: "0" }}>
      <Stack gap={4} style={{ width: "100%" }}>
        <Flex gap={10} align={"center"}>
          <Flex gap={4}>
            <UnstyledButton
              onClick={() => {
                setMonthCount(monthCount === 0 ? 11 : monthCount - 1);
                setYearCount(monthCount === 0 ? yearCount - 1 : yearCount);
              }}
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
              onClick={() => {
                setMonthCount((monthCount + 1) % 12);
                setYearCount(monthCount === 11 ? yearCount + 1 : yearCount);
              }}
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
            {months.find((month, index) => (monthCount === index ? month : ""))}{" "}
            - {yearCount}
          </Text>
        </Flex>
        <GeneralDivider />
      </Stack>
    </Container>
  );
};
