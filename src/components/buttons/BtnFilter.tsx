"use client";
import React from "react";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BsFilter } from "../IconsIndex";
import btnClass from "../styles/BtnStyles.module.css";

export function BtnFilter({ children }: { children: React.ReactNode }) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                styles={{
                    header: { textAlign: "center" },
                    close: { display: "none" },
                    title: { textAlign: "center", margin: "0 auto" },
                }}
            >
                {children}
            </Modal>
            <Button className={btnClass.btnFilter} onClick={open}>
                <span className={btnClass.FilterIcon}>
                    <BsFilter />
                </span>
                <p>Filtrar</p>
            </Button>
        </>
    );
}
