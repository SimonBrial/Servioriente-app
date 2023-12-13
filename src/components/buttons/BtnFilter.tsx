"use client";
import React from "react";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BsFilter } from "../icons";
import btnClass from "../../styles/BtnStyles.module.css";

export function BtnFilter({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        withCloseButton={false}
        styles={{
          header: { textAlign: "center" },
          title: { textAlign: "center", margin: "0 auto" },
        }}
      >
        {children}
      </Modal>
      <Button
        className={btnClass.btnFilter}
        onClick={open}
        styles={{
          section: { fontSize: "1.2rem" },
        }}
        leftSection={<BsFilter />}
      >
        Filtrar
      </Button>
    </>
  );
}
