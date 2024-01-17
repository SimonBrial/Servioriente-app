"use client";

import { Container, useMantineColorScheme } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function InsideContainer({
  children,
  offset,
}: {
  children: React.ReactNode;
  offset: number;
}): JSX.Element {
  const { height } = useViewportSize();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container
      px={0}
      h={height - offset}
      styles={(theme) => ({
        root: {
          width: "100%",
          maxHeight: "100%",
          backgroundColor:
            colorScheme === "light"
              ? "#FFFFFF"
              : `${theme.colors.darkTheme[7]}`,
          borderRadius: "10px"
        },
      })}
    >
      {children}
    </Container>
  );
}
