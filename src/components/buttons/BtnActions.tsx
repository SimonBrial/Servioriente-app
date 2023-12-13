"use client";
import { Button, Flex } from "@mantine/core";
import { IoClose } from "../icons";

interface BtnActionProps {
  title: string;
  icon: React.ReactNode;
  close: () => void;
}

export default function BtnActions ({ title, icon, close }: BtnActionProps): JSX.Element {
  return (
    <Flex align={"center"} gap={"sm"}>
      <Button
        onClick={close}
        fullWidth
        variant="white"
        leftSection={<IoClose />}
        styles={(theme) => ({
          root: {
            border: `2px solid ${theme.colors.principalTheme[6]}`,
            color: `${theme.colors.principalTheme[6]}`,
          },
          section: { fontSize: "1.2rem" },
        })}
      >
        Cancelar
      </Button>
      <Button
        fullWidth
        variant="filled"
        leftSection={icon}
        styles={(theme) => ({
          root: {
            backgroundColor: `${theme.colors.principalTheme[6]}`,
          },
          section: { fontSize: "1.2rem" },
        })}
      >
        {title}
      </Button>
    </Flex>
  );
}
