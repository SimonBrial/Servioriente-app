import { Container, ScrollArea, Stack } from "@mantine/core";
import AlarmFolder from "./AlarmFolder";

export default function FolderContainer(): JSX.Element {
  return (
    <Container
      p={10}
      style={{
        height: "100%",
        width: "70%",
        backgroundColor: "#F8F8F8",
        borderRadius: "6px",
        border: "1px solid #CDCDCD",
      }}
    >
      <ScrollArea h={"100%"} style={{ borderRadius: "6px" }} offsetScrollbars>
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
