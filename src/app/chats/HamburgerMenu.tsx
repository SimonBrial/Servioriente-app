"use client";

import {
  MdOutlineMarkChatUnread,
  HiOutlineDocumentAdd,
  HiOutlineUserGroup,
  HiHeart,
  HiMenu,
} from "@/icons";
import { TabsSectionesProps } from "@/interface/interface";
import { ActionIcon, Menu } from "@mantine/core";
import Link from "next/link";

export const HamburgerMenu = (): JSX.Element => {
  const menuOptions = [
    {
      value: "Lista de Difusion",
      icon: <HiOutlineUserGroup />,
      dir: "/chats/difusion-list",
    },
    {
      value: "No Leidos",
      icon: <MdOutlineMarkChatUnread />,
      dir: "/chats/not-read",
    },
    {
      value: "Plantillas",
      icon: <HiOutlineDocumentAdd />,
      dir: "/chats/formats",
    },
    { value: "Favoritos", icon: <HiHeart />, dir: "/chats/favorities" },
  ];

  const sections = (): JSX.Element => {
    return (
      <Menu.Dropdown>
        <Menu.Label>Opciones</Menu.Label>
        <Menu.Divider />
        {menuOptions.map((section: TabsSectionesProps, index: number) => (
          <Link href={section.dir} key={index}>
            <Menu.Item leftSection={section.icon}>{section.value}</Menu.Item>
          </Link>
        ))}
      </Menu.Dropdown>
    );
  };

  return (
    <Menu
      shadow="md"
      width={200}
      position="right-start"
      offset={5}
      withArrow
      arrowPosition="center"
      styles={(theme) => ({
        root: { color: "#696969" },
        itemSection: {
          color: `${theme.colors.principalTheme[6]}`,
          fontSize: "1.3rem",
          marginRight: "0.5rem",
        },
      })}
    >
      <Menu.Target>
        <ActionIcon
          variant="transparent"
          size={"xl"}
          aria-label="Search"
          styles={(theme) => ({
            root: { color: "#696969" },
          })}
        >
          <HiMenu style={{ fontSize: "2rem" }} />
        </ActionIcon>
      </Menu.Target>
      {sections()}
    </Menu>
  );
};
