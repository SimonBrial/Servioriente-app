"use client";

import {
  IoChevronDownOutline,
  HiOutlineSearch,
  IoChevronUp,
  IoClose,
} from "@/icons";
import {
  ActionIcon,
  TextInput,
  Popover,
  Divider,
  Center,
  Flex,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const SearchInChat = (): JSX.Element => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Center>
      <Popover
        opened={opened}
        shadow="md"
        width={350}
        position="bottom-end"
        offset={5}
        withArrow
        trapFocus
        arrowPosition="center"
        closeOnClickOutside={false}
      >
        <Popover.Target>
          <ActionIcon
            variant="transparent"
            size={"xl"}
            aria-label="Search"
            styles={(theme) => ({
              root: { color: "#696969" },
            })}
            onClick={open}
          >
            <HiOutlineSearch style={{ fontSize: "2rem", color: "#696969" }} />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Flex gap={5} align={"center"}>
            <TextInput
              placeholder="Buscar en el chat"
              style={{ width: "100%" }}
              size="sm"
            />
            <ActionIcon
              variant="transparent"
              size={"md"}
              aria-label="Search"
              styles={(theme) => ({
                root: { color: "#696969" },
              })}
            >
              <IoChevronDownOutline
                style={{ fontSize: "1.5rem", color: "#696969" }}
              />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              size={"md"}
              aria-label="Search"
              styles={(theme) => ({
                root: { color: "#696969" },
              })}
            >
              <IoChevronUp style={{ fontSize: "1.5rem", color: "#696969" }} />
            </ActionIcon>
            <Divider orientation="vertical" />
            <ActionIcon
              variant="transparent"
              size={"md"}
              aria-label="Search"
              styles={(theme) => ({
                root: { color: "#696969" },
              })}
              onClick={close}
            >
              <IoClose style={{ fontSize: "1.5rem", color: "#696969" }} />
            </ActionIcon>
          </Flex>
        </Popover.Dropdown>
      </Popover>
    </Center>
  );
};
