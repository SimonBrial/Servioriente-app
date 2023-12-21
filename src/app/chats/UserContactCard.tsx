import { HiHeart } from "@/components/icons";
import {
  Checkbox,
  Avatar,
  Center,
  Stack,
  Title,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import React from "react";

export const UserContactCard = ({
  favorite,
}: {
  favorite: boolean;
}): JSX.Element => {
  return (
    <Box
      style={{
        border: "1px solid #696969",
        borderRadius: "6px",
        padding: "0.5rem 0.8rem",
        backgroundColor: "white",
      }}
    >
      <Flex align={"center"} justify={"space-between"}>
        <Flex gap={8}>
          <Center>
            <Avatar color="#004EE5" />
          </Center>
          <Stack gap={0} style={{ cursor: "default" }}>
            <Flex align={"center"} gap={3}>
              <Title order={5} style={{ color: "#696969" }}>
                Mario Hurtado
              </Title>
              {favorite ? (
                <HiHeart style={{ fontSize: "0.65rem", color: "#004EE5" }} />
              ) : (
                <></>
              )}
            </Flex>
            <Text size="sm" style={{ color: "#696969" }}>
              Descripcion del contacto
            </Text>
          </Stack>
        </Flex>
        <Checkbox color="#004EE5" />
      </Flex>
    </Box>
  );
};
