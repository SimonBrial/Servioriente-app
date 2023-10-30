import { Flex, TextInput, Title } from "@mantine/core";

interface HorizontalLayoutProps {
  asterisk: boolean;
  title: string;
  inputSize: string;
  icon: React.ReactNode;
}

export default function HorizontalInputLayout({
  asterisk,
  title,
  icon,
  inputSize
}: HorizontalLayoutProps): JSX.Element {
  return (
    <Flex align={"center"} justify={"space-between"} w={"100%"}>
      <Flex>
        <Title order={4}>{title}</Title>{" "}
        {asterisk ? <span style={{ color: "red" }}>*</span> : <></>}
      </Flex>
      <TextInput
        w={inputSize}
        size="sm"
        leftSectionPointerEvents="none"
        leftSection={icon}
        placeholder={title}
      />
    </Flex>
  );
}
