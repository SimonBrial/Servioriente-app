"use client";

import { useState } from "react";
import { DateInput } from "@mantine/dates";
import { Title, Flex } from "@mantine/core";
import { HiOutlineCalendar } from "./IconsIndex";

export function CalendarInput(): JSX.Element {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={4}>Fecha</Title>
      <DateInput
        leftSection={<HiOutlineCalendar />}
        value={value}
        clearable
        onChange={setValue}
        placeholder="Fecha"
        styles={(theme) => ({
          input: { cursor: "pointer" },
          root: { width: "200px" },
        })}
      />
    </Flex>
  );
}
