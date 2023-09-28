"use client";

import React, { ReactNode, useState } from "react";
import { Stack } from "@mantine/core";
import {
    HiOutlineDatabase,
    HiOutlineTemplate,
    HiOutlineCalendar,
    HiOutlineChartBar,
    HiOutlineMail,
    HiOutlineExclamationCircle,
    HiOutlineCog,
    HiOutlineBell,
    HiOutlineLogout,
} from "react-icons/hi";
import { HiOutlineChatBubbleLeftRight, HiOutlineUser } from "react-icons/hi2";
import { AiOutlineIdcard } from "react-icons/ai";
import navClass from "./sidebar.module.css";
import sidebarClass from "./sidebar.module.css";
import NavIcon from "./NavIcon";

interface sidebarItems {
    icon: ReactNode;
    label: string;
    direction: string;
}

const sections: sidebarItems[] = [
    {
        icon: <HiOutlineUser className={navClass.icon} />,
        label: "UserName",
        direction: "",
    },
    {
        icon: <HiOutlineTemplate className={navClass.icon} />,
        label: "Dahsboard",
        direction: "/home",
    },
    {
        icon: <AiOutlineIdcard className={navClass.icon} />,
        label: "Cards",
        direction: "/process",
    },
    {
        icon: <HiOutlineChatBubbleLeftRight className={navClass.icon} />,
        label: "Chats",
        direction: "/chats",
    },
    {
        icon: <HiOutlineDatabase className={navClass.icon} />,
        label: "Base de Datos",
        direction: "/data-base",
    },
    {
        icon: <HiOutlineCalendar className={navClass.icon} />,
        label: "Calendario",
        direction: "/calendar",
    },
    {
        icon: <HiOutlineChartBar className={navClass.icon} />,
        label: "Metricas",
        direction: "/metrics",
    },
    {
        icon: <HiOutlineMail className={navClass.icon} />,
        label: "Correos",
        direction: "/mails",
    },
    {
        icon: <HiOutlineExclamationCircle className={navClass.icon} />,
        label: "Recordatorios",
        direction: "/alarms",
    },
    {
        icon: <HiOutlineCog className={navClass.icon} />,
        label: "Configuraciones",
        direction: "/settings",
    },
];

export function Sidebar() {
    const [action, setAction] = useState<boolean>(false);
    const [selected, setSelected] = useState<number>(0);

    const linkSelected = (index: number) => {
        if (links.length > 0) {
            setSelected(index);
            if (links[index].key !== 0) {
                setAction(true);
            }
        }
    };
    const links = sections.map((section: sidebarItems, index) => {
        //console.log(action);

        return (
            <NavIcon
                key={index}
                icon={section.icon}
                label={section.label}
                dir={section.direction}
                status={action}
                onClick={() => linkSelected(index)}
            />
        );
    });

    return (
        <nav className={navClass.sidebar}>
            <Stack justify="center" gap={"sm"}>
                {links}
            </Stack>
            <Stack justify="center" gap={"sm"}>
                <NavIcon
                    dir={"/home"}
                    icon={<HiOutlineLogout className={sidebarClass.icon} />}
                    label={"Logout"}
                />
                <NavIcon
                    dir={""}
                    icon={<HiOutlineBell className={navClass.icon} />}
                    label={"Notificaciones"}
                />
            </Stack>
        </nav>
    );
}
