import { RegisterInfoProps } from "@/interface/interface";
import { Flex, Divider, Title } from "@mantine/core";

export default function RegisterInfo({
  keyInput,
  valueInput,
}: RegisterInfoProps): JSX.Element {
  return (
    <div style={{ marginBottom: "-1.5rem" }}>
      <Flex justify={"space-between"} style={{ color: "#696969" }}>
        <Title order={5}>{keyInput}</Title>
        <Title order={5}>{valueInput}</Title>
      </Flex>
      <Divider my="sm" />
    </div>
  );
}
