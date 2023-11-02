"use client";

import { Flex, Stack, Container, Grid } from "@mantine/core";
import CardProcess from "./CardProcess";
import InsideContainer from "@/components/InsideContainer";

export default function ProcessContainerLayout(): JSX.Element {
  function handleDragStart(event: React.DragEvent<HTMLDivElement>): any {
    this.style.opacity = "0.4";
  }

  function handleDragEnd(event: React.DragEvent<HTMLDivElement>): any {
    this.style.opacity = "1";
  }

  return (
    <InsideContainer offset={155}>
      <Grid>
        <Grid.Col span={3}>
          <Stack gap={5} align="center">
            <CardProcess draggableStatus />
            <CardProcess draggableStatus />
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack gap={5} align="center">
            <CardProcess draggableStatus />
            <CardProcess draggableStatus />
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack gap={5} align="center">
            <CardProcess draggableStatus />
            <CardProcess draggableStatus />
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack gap={5} align="center">
            <CardProcess draggableStatus />
            <CardProcess draggableStatus />
          </Stack>
        </Grid.Col>
      </Grid>
    </InsideContainer>
  );
}
