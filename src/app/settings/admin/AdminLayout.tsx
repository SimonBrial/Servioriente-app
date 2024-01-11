"use client";

import InsideContainer from "@/components/container/InsideContainer";
import { Flex } from "@mantine/core";
import React from "react";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <InsideContainer offset={130}>
      <Flex
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
      </Flex>
    </InsideContainer>
  );
};
