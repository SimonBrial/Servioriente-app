"use client";

import { Container, useMantineColorScheme } from "@mantine/core";
import styles from "../../app/layout.module.css";

export const GlobalContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      mx={"1rem"}
      className={
        colorScheme === "light"
          ? styles.containerLayout
          : styles.containerLayout_dark
      }
    >
      {children}
    </Container>
  );
};
