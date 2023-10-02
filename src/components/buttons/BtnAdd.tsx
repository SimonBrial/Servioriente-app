"use client";

import { ReactNode } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer } from "@mantine/core";
import { LuGoal } from "../IconsIndex";
import { HiOutlineUserAdd } from "../IconsIndex";
import { TbTemplate, TbMailPlus } from "../IconsIndex";
import { MdOutlineEventNote } from "../IconsIndex";
import btnClass from "../styles/BtnStyles.module.css";

interface BtnAdd {
    iconTag: tagIcon;
    label: string;
    addFn?(): void;
}

type tagIcon = "goal" | "add-user" | "format" | "add-mail" | "add-event";

interface iconList {
    tag: tagIcon;
    icon: ReactNode;
}

function BtnAdd({ iconTag, label, addFn }: BtnAdd) {
    const [opened, { open, close }] = useDisclosure(false);

    const iconList: iconList[] = [
        {
            tag: "goal",
            icon: <LuGoal />,
        },
        {
            tag: "add-user",
            icon: <HiOutlineUserAdd />,
        },
        {
            tag: "format",
            icon: <TbTemplate />,
        },
        {
            tag: "add-mail",
            icon: <TbMailPlus />,
        },
        {
            tag: "add-event",
            icon: <MdOutlineEventNote />,
        },
    ];

    const selectIcon = (tag: string) => {
        const iconSelected = iconList.map((icon: iconList, index: number) => {
            if (icon.tag == tag) {
                return icon.icon;
            }
        });

        return iconSelected;
    };

    return (
        <>
            <Drawer
                opened={opened}
                onClose={close}
                title="Authentication"
                position="right"
            >
                <h1>Prueba</h1>
            </Drawer>
            <Button
                leftSection={selectIcon(iconTag)}
                className={btnClass.btnAdd}
                onClick={open}
            >
                {label}
            </Button>
        </>
    );
}

export default BtnAdd;
