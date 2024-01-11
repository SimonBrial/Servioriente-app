"use client";

import { IoClose } from "@/icons";
import { Button } from "@mantine/core";
import React from "react";

export const BtnCancel = () => {
  return (
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
  );
};
