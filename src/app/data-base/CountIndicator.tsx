"use client";
import { ReactNode } from "react";
import { Tooltip, Button } from "@mantine/core";

interface CountIndicatorProps {
  count: number;
  iconSection: ReactNode;
  description: string;
}

export function CountIndicator({
  count,
  iconSection,
  description,
}: CountIndicatorProps): JSX.Element {
  return (
    <Tooltip
      withArrow
      offset={5}
      label={`${description}: ${count}`}
      position="bottom"
      color="#004EE5"
      transitionProps={{ transition: "skew-up", duration: 300 }}
    >
      <Button
        leftSection={iconSection}
        /* className={countClass.countIndicator} */
        styles={(theme) => ({
          section: {
            fontSize: "1.6rem",
            color: `${theme.colors.principalTheme[6]}`,
          },
          root: {
            backgroundColor: "#F8F8F8",
            border: "1px solid #CDCDCD",
            color: "#696969",
            fontSize: "1.2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          },
        })}
      >
        {count}
      </Button>
    </Tooltip>
  );
}
