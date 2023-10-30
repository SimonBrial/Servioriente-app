"use client";

import { Flex, Select, Title } from "@mantine/core";

export function SelectSocialRed(): JSX.Element {
  // const [value, setValue] = useState<string | null>(null);

  return (
    <Flex justify={"space-between"} align={"center"} w={"100%"}>
      <Title order={4}> Red social</Title>
      <Select
        w={200}
        placeholder="Seleeciona una red"
        data={["Facebook", "Whatsapp", "Instagram"]}
      />
    </Flex>
  );
}
