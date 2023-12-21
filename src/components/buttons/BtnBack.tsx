"use client";

import { Button } from "@mantine/core";
import { IoArrowBackOutline } from "../icons";

export default function BtnBack({
  close,
  label = "Volver",
}: {
  close: () => void;
  label: string;
}): JSX.Element {
  return (
    <Button
      onClick={close}
      variant="filled"
      leftSection={<IoArrowBackOutline />}
      fullWidth
      styles={(theme) => ({
        root: { backgroundColor: `${theme.colors.principalTheme[6]}` },
        section: { fontSize: "1.2rem" },
      })}
    >
      {label}
    </Button>
  );
}
