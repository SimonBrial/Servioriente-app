"use client";

import {
  Divider,
  Flex,
  Select,
  Stack,
  Text,
  useMantineColorScheme,
} from "@mantine/core";
import React, { useState } from "react";

export const UserDBCountView = () => {
  const [value, setValue] = useState<string | null>("");
  const { colorScheme } = useMantineColorScheme();
  return (
    <Stack gap={8}>
      <Flex justify={"space-between"} align={"center"}>
        <Text>Cantidad de usuarios en la DB por pagina</Text>
        <Select
          styles={(theme) => ({
            input: {
              cursor: "pointer",
              backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
              color: colorScheme === "light" ? "#696969" : "#696969",
            },
            section: {
              color: colorScheme === "light" ? "#696969" : "#696969",
            },
          })}
          data={["25", "50", "80", "100"]}
          value={value}
          onChange={setValue}
        />
      </Flex>
      <Divider color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"} />
    </Stack>
  );
};
