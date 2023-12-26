"use client";

import { Box, Flex, Center, TextInput, FileInput } from "@mantine/core";
import { IoSend, HiOutlineFaceSmile, HiPaperClip } from "@/icons";

export const ChatInputText = (): JSX.Element => {
  return (
    <Box>
      <Flex
        gap={8}
        styles={(theme) => ({
          root: {
            border: `1px solid #696969`,
            padding: "0.5rem 1rem",
            borderRadius: "35px",
            backgroundColor: `white`,
          },
        })}
      >
        <Center
          styles={(theme) => ({
            root: { color: `${theme.colors.principalTheme[6]}` },
            cursor: "pointer",
          })}
        >
          <HiOutlineFaceSmile
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          />
        </Center>
        <FileInput
          variant="unstyled"
          leftSectionPointerEvents="none"
          leftSection={
            <Center
              styles={(theme) => ({
                root: {
                  color: `${theme.colors.principalTheme[6]}`,
                  cursor: "pointer",
                },
              })}
            >
              <HiPaperClip style={{ fontSize: "1.5rem" }} />
            </Center>
          }
        />
        <TextInput
          style={{ width: "100%" }}
          styles={(theme) => ({ input: { backgroundColor: "#f8f8f8" } })}
        />
        <Center
          styles={(theme) => ({
            root: { color: `${theme.colors.principalTheme[6]}` },
            cursor: "pointer",
          })}
        >
          <IoSend
            style={{
              fontSize: "1.5rem",
              transform: "rotate(-45deg)",
              cursor: "pointer",
              marginLeft: "0.6rem",
            }}
          />
        </Center>
      </Flex>
    </Box>
  );
};
