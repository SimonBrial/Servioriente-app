"use client";

import { Divider, Flex, Select, Stack, Text } from "@mantine/core";
import React, { useState } from "react";

export const FontSizeSelection = () => {
  const [value, setValue] = useState<string | null>("");
  return (
    <Stack gap={8}>
      <Flex justify={"space-between"} align={"center"}>
        <Text>Tamaño de la Fuente</Text>
        <Select
          data={["sm", "md", "lg", "xl"]}
          value={value}
          onChange={setValue}
        />
      </Flex>
      <Divider />
    </Stack>
  );
};
