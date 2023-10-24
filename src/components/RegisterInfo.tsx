import { Flex, Divider, Title } from "@mantine/core";

interface RegisterInfoProps {
  keyInput: string;
  valueInput: string | JSX.Element;
}

export default function RegisterInfo ({
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
