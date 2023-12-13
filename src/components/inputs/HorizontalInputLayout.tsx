import { HorizontalLayoutProps } from "@/interface/interface";
import { Flex, TextInput, Title } from "@mantine/core";

export default function HorizontalInputLayout({
  inputSize,
  asterisk,
  title,
  icon,
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
