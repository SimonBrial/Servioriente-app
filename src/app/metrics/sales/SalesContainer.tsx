"use client";

import { ScrollArea, Stack } from "@mantine/core";
import { ContainerInside } from "@/components/container/ContainerInside";
import InsideContainer from "@/components/container/InsideContainer";
import { useMediaQuery } from "@mantine/hooks";
import { SalesCardContainer } from "./SalesCardContainer";

export const SalesContainer = () => {
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <InsideContainer offset={162}>
      <ContainerInside withBorder={false} width="100%" allWhite>
        <ScrollArea
          h={matches ? "77vh" : "72vh"}
          style={{ borderRadius: "6px", overflow: "hidden" }}
          offsetScrollbars
          scrollbarSize={2}
        >
          <Stack gap={4}>
            <SalesCardContainer />
          </Stack>
        </ScrollArea>
      </ContainerInside>
    </InsideContainer>
  );
};
