"use client";

import { useState } from "react";
import { DateInput } from "@mantine/dates";
import { Title, Flex } from "@mantine/core";
import { HiOutlineCalendar } from "../../icons";

export function CalendarInput({
  withTitle,
  title,
}: {
  withTitle: boolean;
  title: string;
}): JSX.Element {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Flex justify={"space-between"} align={"center"} w={"100%"}>
      <Title order={4}>{withTitle ? <>{title}</> : <></>}</Title>
      <DateInput
        size="sm"
        leftSection={<HiOutlineCalendar />}
        value={value}
        clearable
        onChange={setValue}
        placeholder={title}
        styles={(theme) => ({
          input: { cursor: "pointer" },
          root: { width: "200px" },
        })}
      />
    </Flex>
  );
}
