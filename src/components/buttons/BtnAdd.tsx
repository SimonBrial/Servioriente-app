"use client";

import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer, Stack } from "@mantine/core";
import { HiOutlineCheck, LuGoal } from "../IconsIndex";
import { HiOutlineUserAdd } from "../IconsIndex";
import { TbTemplate, TbMailPlus } from "../IconsIndex";
import { MdOutlineEventNote } from "../IconsIndex";
import btnClass from "../styles/BtnStyles.module.css";
import BtnActions from "./BtnActions";
import { BtnAdd, iconList } from "@/interface/interface";
import ClientRegister from "../ClientRegister";

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
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
                styles={{
                    header: { display: "none" },
                }}
            >
                <Stack
                    justify="space-between"
                    style={{
                        padding: "1rem 1rem 0 1rem",
                        height: "96vh",
                    }}
                >
                    <ClientRegister />
                    <BtnActions icon={<HiOutlineCheck />} title="Aceptar" />
                </Stack>
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
