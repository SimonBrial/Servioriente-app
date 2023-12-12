import { HiOutlineDotsVertical } from "@/components/IconsIndex";
import {
  UnstyledButton,
  Divider,
  Avatar,
  Stack,
  Group,
  Flex,
  Box,
} from "@mantine/core";

export default function OverlayCardLayout(): JSX.Element {
  return (
    <Box
      style={{
        border: `1px solid #696969`,
        backgroundColor: "white",
        borderRadius: "6px",
        position: "relative",
        margin: "0.2rem 0",
      }}
      mx="auto"
    >
      <Group
        align={"center"}
        justify={"space-between"}
        styles={(theme) => ({
          root: {
            width: "100%",
          },
        })}
        py={5}
        pl={22}
        pr={10}
      >
        <Divider
          orientation="vertical"
          size="8px"
          color={"gray"}
          style={{
            height: "91.5%",
            borderRadius: "15px",
            marginTop: "0.4rem",
            position: "absolute",
            left: "8px",
            top: "2px",
            cursor: "move",
          }}
        />
        <Flex align={"center"} justify={"center"} gap={3}>
          <Avatar
            component="button"
            src={null}
            alt="no image here"
            color="indigo"
            size={"md"}
            style={{
              cursor: "pointer",
            }}
          />
        </Flex>
        <Stack justify="space-between" align="end">
          <UnstyledButton>
            <HiOutlineDotsVertical />
          </UnstyledButton>
        </Stack>
      </Group>
    </Box>
  );
}
