"use client";

import { useRef } from "react";
import { ActionIcon, Flex, Title } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import { HiOutlineClock } from "@/icons";

export default function TimeSelect({ label }: { label: string }): JSX.Element {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon
      variant="subtle"
      color="gray"
      onClick={() => ref.current?.showPicker()}
    >
      <HiOutlineClock />
    </ActionIcon>
  );

  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={4}>{label}</Title>
      <TimeInput
        ref={ref}
        leftSection={pickerControl}
        styles={(theme) => ({
          root: { width: "200px" },
          input: { color: "#696969" },
          section: { color: "#696969" },
        })}
      />
    </Flex>
  );
}
