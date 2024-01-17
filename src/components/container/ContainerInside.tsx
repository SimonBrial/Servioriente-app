"use client";

import { Container, useMantineColorScheme } from "@mantine/core";
import React, { ReactNode } from "react";
import containerInside from "../../styles/containerInside.module.css";

export const ContainerInside = ({
  children,
  width,
  allWhite,
}: {
  children: ReactNode;
  width: string;
  allWhite: boolean;
}): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      styles={(theme) => ({
        root: {
          border:
            colorScheme === "light"
              ? `1px solid ${theme.colors.lightTheme[2]}`
              : `1px solid ${theme.colors.darkTheme[9]}`,
          backgroundColor:
            colorScheme === "light"
              ? allWhite
                ? "#fff"
                : `${theme.colors.lightTheme[0]}`
              : `${theme.colors.darkTheme[7]}`,
        },
      })}
      w={width}
      classNames={{
        root:
          colorScheme === "light"
            ? containerInside.container_inside
            : containerInside.container_inside_dark,
      }}
    >
      {children}
    </Container>
  );
};
