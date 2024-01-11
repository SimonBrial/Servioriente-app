"use client";

import InsideContainer from "@/components/container/InsideContainer";
import { Stack } from "@mantine/core";
import React from "react";

export const SuperAdminLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <InsideContainer offset={130}>
      <Stack
        gap={16}
        styles={(theme) => ({
          root: {
            border: "1px solid #cdcdcd",
            borderRadius: "6px",
            padding: "1rem",
            height: "100%",
            width: "100%",
          },
        })}
      >
        {children}
      </Stack>
    </InsideContainer>
  );
};
