"use client";

import React, { useState } from "react";
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
  AiOutlineIdcard,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUser,
} from "../IconsIndex";
import sidebarClass from "./styles/sidebar.module.css";
import NavIcon from "./NavIcon";
import { sidebarItems } from "@/interface/interface";

const sections: sidebarItems[] = [
  {
    icon: <HiOutlineUser className={sidebarClass.icon} />,
    label: "UserName",
    direction: "",
  },
  {
    icon: <HiOutlineTemplate className={sidebarClass.icon} />,
    label: "Dahsboard",
    direction: "/home",
  },
  {
    icon: <AiOutlineIdcard className={sidebarClass.icon} />,
    label: "Cards",
    direction: "/process",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className={sidebarClass.icon} />,
    label: "Chats",
    direction: "/chats",
  },
  {
    icon: <HiOutlineDatabase className={sidebarClass.icon} />,
    label: "Base de Datos",
    direction: "/data-base",
  },
  {
    icon: <HiOutlineCalendar className={sidebarClass.icon} />,
    label: "Calendario",
    direction: "/calendar",
  },
  {
    icon: <HiOutlineChartBar className={sidebarClass.icon} />,
    label: "Metricas",
    direction: "/metrics",
  },
  {
    icon: <HiOutlineMail className={sidebarClass.icon} />,
    label: "Correos",
    direction: "/mails",
  },
  {
    icon: <HiOutlineExclamationCircle className={sidebarClass.icon} />,
    label: "Recordatorios",
    direction: "/alarms",
  },
  {
    icon: <HiOutlineCog className={sidebarClass.icon} />,
    label: "Configuraciones",
    direction: "/settings",
  },
];

export function Sidebar (): JSX.Element {
  const [active, setActive] = useState<number>(2);

  const links = sections.map((section: sidebarItems, index) => {
    return (
      <NavIcon
        key={index}
        icon={section.icon}
        label={section.label}
        dir={section.direction}
        active={index === active}
        onClick={() => { setActive(index); }}
      />
    );
  });

  return (
    <nav className={sidebarClass.sidebar}>
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
          icon={<HiOutlineBell className={sidebarClass.icon} />}
          label={"Notificaciones"}
        />
      </Stack>
    </nav>
  );
}
