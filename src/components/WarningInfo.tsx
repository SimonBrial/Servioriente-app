"use client";

import { Center, Tooltip } from "@mantine/core";
import { IoWarningOutline } from "../icons";

export default function WarningInfo({
  description,
}: {
  description: string;
}): JSX.Element {
  return (
    <Tooltip
      label={description}
      color="blue"
      styles={(theme) => ({
        tooltip: { backgroundColor: `${theme.colors.principalTheme[6]}` },
      })}
      arrowOffset={5}
      arrowSize={4}
      withArrow
      position="top-end"
    >
      <Center
        styles={(theme) => ({
          root: { color: `${theme.colors.principalTheme[6]}` },
        })}
      >
        <IoWarningOutline />
      </Center>
    </Tooltip>
  );
}
