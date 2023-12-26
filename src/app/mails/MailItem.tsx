"use client";

import {
  HiOutlineMailOpen,
  HiOutlineTrash,
  HiOutlineStar,
  HiOutlineSave,
} from "@/icons";
import {
  Checkbox,
  UnstyledButton,
  Flex,
  Group,
  Text,
  Title,
  Avatar,
  Stack,
  Center,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";

export default function MailItem(): JSX.Element {
  const { hovered, ref } = useHover();

  return (
    <Group
      ref={ref}
      mb={5}
      styles={{
        root: {
          padding: "0.3rem 0.8rem",
          border: `1px solid ${hovered ? "#696969" : "#CDCDCD"} `,
          backgroundColor: `${
            hovered ? "rgba(239, 239, 239, 0.3)" : "#FFFFFF"
          }`,
          borderRadius: "6px",
          transition: "0.3s all ease-in-out",
        },
      }}
    >
      <Flex
        justify={"start"}
        gap={"md"}
        style={{
          width: "100%",
          cursor: "pointer",
          padding: "0.2rem",
        }}
      >
        {hovered ? (
          <Center px={9}>
            <Checkbox color="blue" />
          </Center>
        ) : (
          <Avatar
            src={null}
            alt="no image here"
            color="indigo"
            size="md"
            style={{ marginTop: "0.6rem" }}
          />
        )}

        <Stack gap={0} style={{ width: "100%" }}>
          <Flex justify={"space-between"} style={{ margin: "-0.2rem" }}>
            <Title order={5}>Titulo del mail</Title>
            {hovered ? (
              <Flex align={"center"} justify={"end"} style={{ gap: "0.3rem" }}>
                <UnstyledButton style={{ color: "#696969" }}>
                  <HiOutlineMailOpen />
                </UnstyledButton>
                <UnstyledButton style={{ color: "#696969" }}>
                  <HiOutlineStar />
                </UnstyledButton>
                <UnstyledButton style={{ color: "#696969" }}>
                  <HiOutlineSave />
                </UnstyledButton>
              </Flex>
            ) : (
              <></>
            )}
          </Flex>
          <Flex gap={12} style={{ margin: "-0.1rem" }} align={"center"}>
            <Text
              styles={(theme) => ({
                root: {
                  color: `${theme.colors.principalTheme[6]}`,
                },
              })}
            >
              Header del correo
            </Text>
            <Text
              size="xs"
              styles={(theme) => ({
                root: {
                  color: `${theme.colors.principalTheme[6]}`,
                },
              })}
            >
              12/10/2023
            </Text>
          </Flex>
          <Text style={{ margin: "-0.1rem" }}>
            Descripcion del mai...............
          </Text>
        </Stack>
        {hovered ? (
          <Center
            px={4}
            styles={{
              root: {
                backgroundColor: "rgba(255, 0, 0, 0.3)",
                color: "red",
                fontSize: "1.2rem",
                borderRadius: "0 6px 6px 0",
              },
            }}
          >
            <HiOutlineTrash />
          </Center>
        ) : (
          <></>
        )}
      </Flex>
    </Group>
  );
}
