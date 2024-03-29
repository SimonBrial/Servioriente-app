"use client";

import {
  useMantineColorScheme,
  Container,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import { BadgeClose } from "../BadgeClose";
import { BadgeFilter } from "../BadgeFilter";
import { GeneralDivider } from "../GeneralDivider";

export function FilterContainer(): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container
      style={{
        width: "100%",
        padding: "0",
      }}
    >
      <Stack style={{ width: "100%" }} gap={4}>
        <Flex justify="space-between" align="center">
          <Flex justify="flex-start" align="center" gap={"xs"}>
            <Title
              order={5}
              styles={(theme) => ({
                root: {
                  color:
                    colorScheme === "light"
                      ? `1px solid ${theme.colors.lightTheme[2]}`
                      : `1px solid ${theme.colors.darkTheme[2]}`,
                },
              })}
            >
              Filter:{" "}
            </Title>
            <BadgeFilter tag="Nombre" />
            <BadgeFilter tag="Apellido" />
          </Flex>
          <BadgeClose status={true} />
        </Flex>
        <GeneralDivider />
      </Stack>
    </Container>
  );
}
