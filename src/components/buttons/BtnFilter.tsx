"use client";

import React from "react";
import { Modal, Button, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BsFilter } from "../../icons";
import btnClass from "../../styles/BtnStyles.module.css";

export function BtnFilter({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        styles={{
          header: { textAlign: "center" },
          title: { textAlign: "center", margin: "0 auto" },
          body: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#9a90ef1a",
          },
        }}
      >
        {children}
      </Modal>
      <Button
        className={btnClass.btnFilter}
        onClick={open}
        styles={(theme) => ({
          section: {
            fontSize: "1.4rem",
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[6]}`
                : `${theme.colors.darkTheme[1]}`,
          },
          root: {
            backgroundColor:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[0]}`
                : `${theme.colors.darkTheme[7]}`,
            border:
              colorScheme === "light"
                ? `1px solid ${theme.colors.lightTheme[2]}`
                : `1px solid ${theme.colors.darkTheme[6]}`,
            color:
              colorScheme === "light"
                ? `${theme.colors.lightTheme[3]}`
                : `${theme.colors.darkTheme[2]}`,
          },
        })}
        leftSection={<BsFilter style={{ strokeWidth: "0.5px" }} />}
      >
        Filtrar
      </Button>
    </>
  );
}
