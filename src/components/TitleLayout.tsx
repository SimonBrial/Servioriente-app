"use client";
import { Divider, Flex, Title, Text } from "@mantine/core";
import { TitleLayoutProps } from "@/interface/interface";

export function TitleLayout ({
  title,
  icon,
  color,
}: TitleLayoutProps): JSX.Element {
  return (
    <>
      <Flex gap={5} justify={"center"} align={"center"}>
        <Text size="1.5rem">{icon}</Text>
        <Title
          order={2}
          style={{
            color: `${color !== "" ? color : "#696969"}`,
            textAlign: "center",
          }}
        >
          {title}
        </Title>
      </Flex>
      <Divider
        size="md"
        styles={(theme) => ({
          root: {
            borderColor:
              color !== "" ? color : `${theme.colors.principalTheme[6]}`,
          },
        })}
      />
    </>
  );
}
