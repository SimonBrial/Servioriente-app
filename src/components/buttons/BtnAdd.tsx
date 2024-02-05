"use client";

import { useDisclosure } from "@mantine/hooks";
import { Button, Drawer, Stack, useMantineColorScheme } from "@mantine/core";
import {
  HiOutlineFolderAdd,
  HiOutlineUserAdd,
  HiOutlineCheck,
  LuCalendarPlus,
  TbTemplate,
  TbMailPlus,
  BiBellPlus,
  LuGoal,
} from "../../icons";
import BtnActions from "./BtnActions";
import { BtnAddProps, iconList } from "@/interface/interface";

function BtnAdd({ iconTag, label, children, addFn }: BtnAddProps): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const { colorScheme } = useMantineColorScheme();

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
      icon: <LuCalendarPlus />,
    },
    {
      tag: "add",
      icon: <BiBellPlus />,
    },
    {
      tag: "folder",
      icon: <HiOutlineFolderAdd />,
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
        styles={{
          body: {
            backgroundColor: colorScheme === "light" ? "#F8F8F8" : "#9a90ef1a",
          },
        }}
      >
        <Stack
          justify="space-between"
          style={{
            padding: "0 1rem",
            height: "95vh",
          }}
        >
          {children}
          <BtnActions icon={<HiOutlineCheck />} title="Aceptar" close={close} />
        </Stack>
      </Drawer>
      <Button
        leftSection={selectIcon(iconTag)}
        styles={(theme) => ({
          root: {
            backgroundColor: `${theme.colors.lightTheme[6]}`,
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
