import { Container, Stack } from "@mantine/core";
import { MetricsFilterInput } from "../MetricsFilterInput";
import { EventsContainer } from "./EventsContainer";

export default function page(): JSX.Element {
  return (
    <Container p={0}>
      <Stack gap={6}>
        <MetricsFilterInput btnDisable={false} />
        <EventsContainer />
      </Stack>
    </Container>
  );
}
