"use client";

import {
  Container,
  ScrollArea,
  Stack,
  useMantineColorScheme,
} from "@mantine/core";
import AlarmFolder from "./AlarmFolder";

export default function FolderContainer(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      p={10}
      style={{
        height: "100%",
        width: "70%",
        borderRadius: "6px",
      }}
      styles={(theme) => ({
        root: {
          backgroundColor:
            colorScheme === "light"
              ? `${theme.colors.lightTheme[0]}`
              : `${theme.colors.darkTheme[7]}`,
          borderRadius: "6px",
        },
      })}
    >
      <ScrollArea
        h={"100%"}
        style={{ borderRadius: "6px" }}
        scrollbarSize={2}
        offsetScrollbars
      >
        <Stack gap={12}>
          <AlarmFolder />
          <AlarmFolder />
          <AlarmFolder />
          <AlarmFolder />
        </Stack>
      </ScrollArea>
    </Container>
  );
}
