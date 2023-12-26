import { Flex, Select, TextInput, Title } from "@mantine/core";
import { BsTelephone } from "../../icons";

export default function PhoneInputLayout(): JSX.Element {
  return (
    <Flex align={"center"} justify={"space-between"} w={"100%"}>
      <Title order={4}>Telefono</Title>
      <Flex>
        <Select
          w={80}
          placeholder="****"
          data={["0424", "0412", "0426", "0414"]}
        />
        <TextInput
          w={150}
          leftSection={<BsTelephone />}
          placeholder="*** ** **"
        />
      </Flex>
    </Flex>
  );
}
