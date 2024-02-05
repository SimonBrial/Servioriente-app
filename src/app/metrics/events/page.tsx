import { Container } from "@mantine/core";
import { MetricsFilterInput } from "../MetricsFilterInput";

export default function page(): JSX.Element {
  return (
    <Container p={0}>
      <MetricsFilterInput btnDisable />
    </Container>
  );
}
