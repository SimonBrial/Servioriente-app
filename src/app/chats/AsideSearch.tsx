"use client";

import { HiOutlineSearch } from "@/components/icons";
import { Flex, TextInput, ActionIcon } from "@mantine/core";
import React from "react";
import { HamburgerMenu } from "./HamburgerMenu";

export const AsideSearch = (): JSX.Element => {
  return (
    <Flex align={"center"}>
      <ActionIcon
        variant="transparent"
        size={"xl"}
        aria-label="Search"
        styles={(theme) => ({
          root: { color: "#696969" },
        })}
      >
        <HiOutlineSearch style={{ fontSize: "1.5rem" }} />
      </ActionIcon>
      <TextInput placeholder="Input placeholder" w={"100%"} />
      {/* <ActionIcon
        variant="transparent"
        size={"xl"}
        aria-label="Search"
        styles={(theme) => ({
          root: { color: "#696969" },
        })}
      >
        <HiMenu style={{ fontSize: "2rem" }} />
      </ActionIcon> */}

      <HamburgerMenu />
    </Flex>
  );
};
