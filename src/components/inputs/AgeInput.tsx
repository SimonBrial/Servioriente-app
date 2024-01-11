"use client";

import { Flex, NumberInput, Title } from "@mantine/core";
import React, { useState } from "react";

export const AgeInput = ({ inputSize }: { inputSize: string }) => {
  const [value, setValue] = useState<string | number>("");
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={4}>Edad</Title>
      <NumberInput
        w={inputSize}
        placeholder="Indique su edad"
        clampBehavior="strict"
        onChange={setValue}
        value={value}
        max={100}
        min={0}
      />
    </Flex>
  );
};
