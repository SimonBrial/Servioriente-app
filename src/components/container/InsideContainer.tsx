"use client";

import { Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function InsideContainer ({
  children,
  offset,
}: {
  children: React.ReactNode;
  offset: number;
}): JSX.Element {
  const { height } = useViewportSize();

  return (
    <Container
      px={0}
      h={height - offset}
      styles={{
        root: {
          width: "100%",
          maxHeight: "100%",
        },
      }}
    >
      {children}
    </Container>
  );
}
