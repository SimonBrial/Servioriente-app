"use client";

import { Container } from "@mantine/core";
import React, { ReactNode } from "react";

export const ContainerInside = ({
  children,
  width,
}: {
  children: ReactNode;
  width: string;
}): JSX.Element => {
  return (
    <Container
      w={width}
      styles={(theme) => ({
        root: {
          border: `1px solid #CDCDCD`,
          padding: "0.8rem",
          borderRadius: "10px",
          backgroundColor: "#F8F8F8",
        },
      })}
    >
      {children}
    </Container>
  );
};
