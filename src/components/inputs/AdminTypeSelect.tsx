"use client";

import { HiOutlineExclamation, MdOutlineCategory } from "@/icons";
import {
  Center,
  Flex,
  Select,
  Title,
  Tooltip,
  useMantineColorScheme,
} from "@mantine/core";
import React, { useState } from "react";

export const AdminTypeSelect = ({ inputSize }: { inputSize: string }) => {
  const [value, setValue] = useState<string | null>("");
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex align={"center"} justify={"space-between"}>
      <Title order={4}>Tipo de Admin</Title>
      <Flex align={"center"} gap={6}>
        <Tooltip
          label="Este campo solo puede ser modificado por el super admin"
          withArrow
          styles={(theme) => ({
            tooltip: {
              backgroundColor: `${theme.colors.principalTheme[6]}`,
              color: "#FFFFFF",
            },
          })}
        >
          <Center>
            <HiOutlineExclamation
              style={{
                fontSize: "1.2rem",
                color: colorScheme === "light" ? "#696969" : "#FFFFFF",
              }}
            />
          </Center>
        </Tooltip>
        <Select
          leftSection={<MdOutlineCategory />}
          w={inputSize}
          placeholder="Seleccion una categoria"
          data={["Admin", "Super Admin"]}
          onChange={setValue}
          value={value}
          styles={(theme) => ({
            input: {
              cursor: "pointer",
              backgroundColor: colorScheme === "light" ? "#FFFFFF" : "#EFF3F5",
              color: colorScheme === "light" ? "#696969" : "#696969",
            },
            section: {
              color: colorScheme === "light" ? "#696969" : "#696969",
            },
          })}
        />
      </Flex>
    </Flex>
  );
};
