"use client";

import { Select, Flex, Title, useMantineColorScheme } from "@mantine/core";

export default function SelectInput({ title }: { title: string }): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={5}>{title}</Title>
      <Select
        placeholder={title}
        data={["Cumpleaños", "Recordatorios", "Por hacer"]}
        maxDropdownHeight={200}
        allowDeselect
        styles={(theme) => ({
          input: {
            backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
            color: `${theme.colors.lightTheme[3]}`,
          },
        })}
      />
    </Flex>
  );
}
