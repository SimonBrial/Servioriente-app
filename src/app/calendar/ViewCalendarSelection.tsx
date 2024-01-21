"use client";

import {
  Center,
  Flex,
  UnstyledButton,
  useMantineColorScheme,
} from "@mantine/core";
import React, { useRef, useState } from "react";
import { HiOutlineViewGrid, HiOutlineViewBoards } from "react-icons/hi";
import classes from "../../styles/BtnStyles.module.css";

export const ViewCalendarSelection = () => {
  const [btnSelected, setBtnSelected] = useState<string | undefined>("grid");
  const refGrid = useRef<HTMLButtonElement>(null);
  const refCol = useRef<HTMLButtonElement>(null);
  const { colorScheme } = useMantineColorScheme();

  return (
    <Flex gap={4} style={{ height: "100%" }}>
      <UnstyledButton
        classNames={{
          root:
            colorScheme === "light"
              ? classes.btnViewCalendar
              : classes.btnViewCalendar_dark,
        }}
        id="grid"
        ref={refGrid}
        onClick={() => setBtnSelected(refGrid.current?.id)}
        styles={(theme) => ({
          root: {
            color:
              btnSelected === "grid"
                ? colorScheme === "light"
                  ? `${theme.colors.lightTheme[6]}`
                  : `${theme.colors.darkTheme[1]}`
                : "",
          },
        })}
      >
        <Center>
          <HiOutlineViewGrid />
        </Center>
      </UnstyledButton>
      <UnstyledButton
        classNames={{
          root:
            colorScheme === "light"
              ? classes.btnViewCalendar
              : classes.btnViewCalendar_dark,
        }}
        id="column"
        ref={refCol}
        onClick={() => setBtnSelected(refCol.current?.id)}
        styles={(theme) => ({
          root: {
            color:
              btnSelected === "column"
                ? colorScheme === "light"
                  ? `${theme.colors.lightTheme[6]}`
                  : `${theme.colors.darkTheme[1]}`
                : "",
          },
        })}
      >
        <Center style={{ transform: "rotate(90deg)" }}>
          <HiOutlineViewBoards />
        </Center>
      </UnstyledButton>
    </Flex>
  );
};