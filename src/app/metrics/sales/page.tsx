import { Container } from "@mantine/core";
import { MetricsFilterInput } from "../MetricsFilterInput";
import { SalesContainer } from "./SalesContainer";

export default function page(): JSX.Element {
  return (
    <Container p={0}>
      <MetricsFilterInput btnDisable={false} />
      <SalesContainer />
    </Container>
  );
}
