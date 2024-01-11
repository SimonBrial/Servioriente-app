"use client";

import { Divider, Flex, Select, Stack, Text } from "@mantine/core";
import React, { useState } from "react";

export const UserDBCountView = () => {
  const [value, setValue] = useState<string | null>("");
  return (
    <Stack gap={8}>
      <Flex justify={"space-between"} align={"center"}>
        <Text>Cantidad de usuarios en la DB por pagina</Text>
        <Select
          data={["25", "50", "80", "100"]}
          value={value}
          onChange={setValue}
        />
      </Flex>
      <Divider />
    </Stack>
  );
};
