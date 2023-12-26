import { Box, Stack, Text } from "@mantine/core";
import React from "react";

export const CloudDialogue = ({
  ubication,
}: {
  ubication: "left" | "right";
}): JSX.Element => {
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        justifyContent: `${ubication === "left" ? "start" : "end"}`,
      }}
    >
      <Stack
        gap={0}
        align={"center"}
        // justify={ubication === "left" ? "start" : "end"}
        styles={(theme) => ({
          root: {
            border: "1px solid #CDCDCD",
            boxShadow: "0px 5px 5px -1px #cdcdcd",
            padding: "0.5rem",
            marginBottom: "0.4rem",
            maxWidth: "350px",
            backgroundColor: "#f8f8f8",
            marginRight: "0",
            borderRadius: "10px",
            overflowWrap: "anywhere",
          },
        })}
      >
        <Text style={{ maxWidth: "100%" }}>
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
        </Text>
        <Text
          styles={(theme) => ({
            root: {
              width: "100%",
              fontSize: "0.6rem",
              display: "flex",
              justifyContent: "end",
            },
          })}
        >
          03:55 PM
        </Text>
      </Stack>
    </Box>
  );
};
