"use client";

import { Container, ScrollArea, Stack } from "@mantine/core";
import React from "react";
import { CloudDialogue } from "./CloudDialogue";
import InsideContainer from "@/components/container/InsideContainer";
import { useMediaQuery } from "@mantine/hooks";

export const ConversationContainer = (): JSX.Element => {
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <InsideContainer offset={250}>
      <Container
        styles={(theme) => ({
          root: {
            border: "1px solid #CDCDCD",
            padding: "0.6rem",
            borderRadius: "6px",
            backgroundColor: "white",
            width: "100%",
            height: "100%",
          },
        })}
      >
        <ScrollArea
          h={matches ? "68vh" : "60vh"}
          scrollbarSize={0}
          offsetScrollbars
          scrollHideDelay={100}
        >
          <Stack
            /* styles={(theme) => ({
              root: {
                padding: "0.6rem",
                borderRadius: "6px",
                backgroundColor: "white",
                width: "100%",
                height: "100%",
              },
            })} */
          >
            <CloudDialogue ubication="left" />
            <CloudDialogue ubication="right" />
            <CloudDialogue ubication="left" />
            <CloudDialogue ubication="right" />
            <CloudDialogue ubication="right" />
            <CloudDialogue ubication="left" />
            <CloudDialogue ubication="right" />
            <CloudDialogue ubication="left" />
            <CloudDialogue ubication="right" />
          </Stack>
        </ScrollArea>
      </Container>
    </InsideContainer>
  );
};
