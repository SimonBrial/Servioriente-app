import { Select, Flex, Title } from "@mantine/core";

export default function SelectInput({ title }: { title: string }): JSX.Element {
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={5}>{title}</Title>
      <Select
        placeholder={title}
        data={["Cumpleaños", "Recordatorios", "Por hacer"]}
        maxDropdownHeight={200}
        allowDeselect
      />
    </Flex>
  );
}
