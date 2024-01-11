import { Checkbox, Flex } from "@mantine/core";
import React from "react";

export const SidebarSectionSelection = ({ label }: { label: string }) => {
  return (
    <Flex justify={"space-between"} align={"center"} px={15}>
      {label} <Checkbox />
    </Flex>
  );
};
