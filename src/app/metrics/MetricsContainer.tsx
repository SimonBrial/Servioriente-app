import { Container } from "@mantine/core";
import React from "react";

export default function MetricsContainer({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Container p={0}>{children}</Container>;
}
