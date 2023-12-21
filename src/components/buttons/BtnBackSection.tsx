"use client";

import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "../icons";

export const BtnBackSection = ({
  withStyles,
  label,
  dir,
}: {
  withStyles: boolean;
  label: string;
  dir: string;
}): JSX.Element => {
  return (
    <Link href={dir} style={{ width: "100%" }}>
      <Button
        leftSection={<IoArrowBackOutline />}
        variant={withStyles ? "white" : "transparent"}
        size="xs"
        fullWidth
        styles={(theme) => ({
          root: {
            color: withStyles ? `${theme.colors.principalTheme[6]}` : `#696969`,
            border: withStyles
              ? `2px solid ${theme.colors.principalTheme[6]}`
              : ``,
          },
        })}
      >
        {label}
      </Button>
    </Link>
  );
};
