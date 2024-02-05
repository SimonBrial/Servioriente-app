import { Container } from "@mantine/core";
import { HistoryContainer } from "./HistoryContainer";

export default function page(): JSX.Element {
  return (
    <Container p={0} style={{ width: "100%" }}>
      <HistoryContainer />
    </Container>
  );
}
