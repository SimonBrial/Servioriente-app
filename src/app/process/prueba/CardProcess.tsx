import { HiOutlineDotsVertical } from "@/components/IconsIndex";
// import { Task } from "./types";
import {
  UnstyledButton,
  Divider,
  Avatar,
  Group,
  Stack,
  Title,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { CardProcessProps } from "@/interface/interface";
/* import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter"; */

interface TaskItemProps {
  card: CardProcessProps;
}

export const CardProcess = ({ card }: TaskItemProps): JSX.Element => {
  const matches = useMediaQuery("(max-width: 1280px)");
  return (
    <Box
      style={{
        padding: "0rem 0rem",
        textAlign: "center",
        width: matches ? "15rem" : "18.5rem",
        cursor: "pointer",
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
          size="5px"
          color={"red"}
          h={matches ? 50 : 64}
          style={{
            height: "58px",
            borderRadius: "15px",
            marginTop: "0.4rem",
            position: "absolute",
            left: "8px",
            top: "2px",
            cursor: "move",
          }}
        />
        <Flex align={"center"} justify={"center"} gap={matches ? 3 : 8}>
          <Avatar
            component="button"
            src={null}
            alt="no image here"
            color="indigo"
            size={matches ? "md" : "lg"}
            style={{
              cursor: "pointer",
            }}
          />
          <Stack align="start" gap={0}>
            <Title order={matches ? 5 : 4}>{card.clientName}</Title>
            <Stack gap={0}>
              <Text
                size={matches ? "sm" : "md"}
                styles={(theme) => ({
                  root: {
                    color: `${theme.colors.principalTheme[6]}`,
                    marginBottom: "-0.3rem",
                    textAlign: "start",
                  },
                })}
              >
                {card.vehicle}
              </Text>
              <Text size={matches ? "sm" : "md"}>Tarifa: {card.tag}$</Text>
            </Stack>
          </Stack>
        </Flex>
        <Stack justify="space-between" align="end">
          <UnstyledButton>
            <HiOutlineDotsVertical />
          </UnstyledButton>
          <Text size={matches ? "xs" : "sm"}>{card.date}</Text>
        </Stack>
      </Group>
    </Box>
  );
};
