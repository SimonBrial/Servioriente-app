"use client"

import { Button } from "@mantine/core";
import { HiOutlineCheck } from "../../icons";

export const BtnAcept = (): JSX.Element => {
  return (
    <Button
      leftSection={<HiOutlineCheck />}
      variant="#004EE5"
      size="xs"
      fullWidth
      style={(theme) => ({ leftSection: { fontSize: "1.5rem" } })}
    >
      Aceptar
    </Button>
  );
};
