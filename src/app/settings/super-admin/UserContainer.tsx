"use client";

import { useDisclosure } from "@mantine/hooks";
import {
  Container,
  Collapse,
  Divider,
  Center,
  Stack,
  Badge,
  Flex,
  Text,
  Box,
} from "@mantine/core";
import { BiCrown } from "@/icons";
import BtnAdd from "@/components/buttons/BtnAdd";
import { SuperAdminCard } from "./SuperAdminCard";
import { AdminDescriptionLayout } from "../admin/AdminDescriptionLayout";

type labelType = "Super Admin" | "Admin";

export const UserContainer = ({ label }: { label: labelType }) => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Container
      p={12}
      w={"100%"}
      styles={(theme) => ({
        root: {
          border: "2px solid #cdcdcd",
          borderRadius: "6px",
          backgroundColor: "#fff",
        },
      })}
    >
      <Stack>
        <Stack gap={4}>
          <Flex justify={"space-between"} align={"center"}>
            <Flex
              gap={6}
              align={"center"}
              onClick={toggle}
              style={{ cursor: "default" }}
            >
              <Center
                styles={(theme) => ({
                  root: { color: `${theme.colors.principalTheme[6]}` },
                })}
              >
                <BiCrown style={{ fontSize: "2.5rem" }} />
              </Center>
              <Text style={{ fontSize: "2rem" }}>Lista de {label}</Text>
              <Badge
                radius={"sm"}
                styles={(theme) => ({
                  root: {
                    backgroundColor: `${theme.colors.principalTheme[6]}`,
                  },
                })}
              >
                9
              </Badge>
            </Flex>
            <Box h={40}>
              <BtnAdd
                iconTag="add-user"
                label={
                  label === "Super Admin" ? "Nuevo Super Admin" : "Nuevo Admin"
                }
                addFn={toggle}
              >
                <Stack gap={4}>
                  <AdminDescriptionLayout size="200px" />
                </Stack>
              </BtnAdd>
            </Box>
          </Flex>
          <Divider />
        </Stack>
        <Collapse in={opened}>
          <Stack gap={5}>
            <SuperAdminCard admin />
            <SuperAdminCard admin={false} />
            <SuperAdminCard admin />
            <SuperAdminCard admin />
            <SuperAdminCard admin={false} />
            <SuperAdminCard admin />
            <SuperAdminCard admin={false} />
            <SuperAdminCard admin />
            <SuperAdminCard admin={false} />
          </Stack>
        </Collapse>
      </Stack>
    </Container>
  );
};
