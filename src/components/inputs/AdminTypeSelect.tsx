"use client";

import { HiOutlineExclamation, MdOutlineCategory } from "@/icons";
import { Center, Flex, Select, Title, Tooltip } from "@mantine/core";
import React, { useState } from "react";

export const AdminTypeSelect = ({ inputSize }: { inputSize: string }) => {
  const [value, setValue] = useState<string | null>("");
  return (
    <Flex align={"center"} justify={"space-between"}>
      <Title order={4}>Tipo de Admin</Title>
      <Flex align={"center"} gap={6}>
        <Tooltip
          label="Este campo solo puede ser modificado por el super admin"
          withArrow
          styles={(theme) => ({
            tooltip: { backgroundColor: `${theme.colors.principalTheme[6]}` },
          })}
        >
          <Center>
            <HiOutlineExclamation
              style={{ fontSize: "1.2rem", color: "#696969" }}
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
        />
      </Flex>
    </Flex>
  );
};
