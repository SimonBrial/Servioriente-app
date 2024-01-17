"use client";

import {
  Checkbox,
  Container,
  Divider,
  Flex,
  Stack,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { BadgeClose } from "../BadgeClose";
import { BadgeFilter } from "../BadgeFilter";
import { AutoCompleteData } from "@/interface/interface";
import checkboxClasses from "../../styles/sidebarSectionSelection.module.css";

export default function AutoCompleteFilterContainer({
  label,
}: AutoCompleteData): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  let resolve: JSX.Element | JSX.Element[];

  const pills = (label: string | string[]): JSX.Element | JSX.Element[] => {
    if (typeof label === "string") {
      resolve = <BadgeFilter tag={label} />;
    } else if (Array.isArray(label)) {
      resolve = label.map((value: string, index: number) => {
        return <BadgeFilter tag={value} key={index} />;
      });
    }
    return resolve;
  };

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
            <Checkbox
              color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
              classNames={{
                input:
                  colorScheme === "light"
                    ? checkboxClasses.checkbox
                    : checkboxClasses.checkbox_dark,
              }}
            />
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
              Buscar:{" "}
            </Title>
            {pills(label)}
          </Flex>
          <BadgeClose status={true} />
        </Flex>
        <Divider color={colorScheme === "light" ? "#cdcdcd" : "#f8f8f8"} />
      </Stack>
    </Container>
  );
}
