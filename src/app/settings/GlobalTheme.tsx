"use client";

import { BsMoonStars, HiOutlineSun } from "@/icons";
import { Center, Divider, Flex, Stack, Switch, Text } from "@mantine/core";

export const GlobalTheme = () => {
  return (
    <Stack gap={4}>
      <Flex justify={"space-between"} align={"center"}>
        <Text>Tema Global</Text>
        <Flex gap={6} align={"center"}>
          <Center>
            <HiOutlineSun style={{ fontSize: "1.8rem" }} />
          </Center>
          <Switch size="md" color="#004EE5" />
          <Center>
            <BsMoonStars style={{ fontSize: "1.4rem" }} />
          </Center>
        </Flex>
      </Flex>
      <Divider />
    </Stack>
  );
};
