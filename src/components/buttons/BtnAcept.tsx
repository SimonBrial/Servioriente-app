"use client"

import { Button } from "@mantine/core";
import { HiOutlineCheck } from "../../icons";

export const BtnAcept = (): JSX.Element => {
  return (
    <Button
      leftSection={<HiOutlineCheck />}
      variant="#004EE5"
      fullWidth
      style={(theme) => ({ leftSection: { fontSize: "1.5rem" } })}
    >
      Aceptar
    </Button>
  );
};
