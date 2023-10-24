"use client";

import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer, Stack } from "@mantine/core";
import {
  MdOutlineEventNote,
  HiOutlineUserAdd,
  HiOutlineCheck,
  TbTemplate,
  TbMailPlus,
  BiBellPlus,
  LuGoal,
} from "../IconsIndex";
import BtnActions from "./BtnActions";
import { BtnAddProps, iconList } from "@/interface/interface";
import ClientRegister from "../ClientRegister";
import React from "react";

function BtnAdd({ iconTag, label, addFn }: BtnAddProps): JSX.Element {
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
    {
      tag: "add",
      icon: <BiBellPlus />,
    },
  ];

  const selectIcon = (tag: string): React.ReactNode => {
    const iconSelected: React.ReactNode = iconList.map(
      (icon: iconList, index: number) => {
        let iconName: React.ReactNode;
        if (icon.tag === tag) {
          iconName = icon.icon;
        }
        return iconName;
      },
    );

    return iconSelected;
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        withCloseButton={false}
      >
        <Stack
          justify="space-between"
          style={{
            padding: "1rem 1rem 0 1rem",
            height: "95vh",
          }}
        >
          <ClientRegister />
          <BtnActions icon={<HiOutlineCheck />} title="Aceptar" close={close} />
        </Stack>
      </Drawer>
      <Button
        leftSection={selectIcon(iconTag)}
        styles={(theme) => ({
          root: {
            backgroundColor: `${theme.colors.principalTheme[6]}`,
            height: "100%",
          },
          section: { fontSize: "1.2rem" },
        })}
        onClick={open}
      >
        {label}
      </Button>
    </>
  );
}

export default BtnAdd;
