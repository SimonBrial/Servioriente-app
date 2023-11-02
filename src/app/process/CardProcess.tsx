"use client";

import { useDisclosure } from "@mantine/hooks";
import { HiOutlineDotsVertical } from "@/components/IconsIndex";
import {
  Stack,
  Flex,
  Text,
  Title,
  Avatar,
  Badge,
  Divider,
  UnstyledButton,
  Group,
  Collapse,
  Box,
  ScrollArea,
} from "@mantine/core";
import CardItemProcess from "./CardItemProcess";

interface prueba {
  vehiculo: string;
}
const itemCardFake: prueba[] = [
  { vehiculo: "spark" },
  { vehiculo: "spark" },
  { vehiculo: "spark" },
  { vehiculo: "spark" },
  { vehiculo: "spark" },
];

export default function CardProcess({
  draggableStatus,
}: {
  draggableStatus: boolean;
}): JSX.Element {
  const [opened, { toggle }] = useDisclosure(false);

  let data: JSX.Element | null;
  const cardContainerView = (arr: prueba[]): JSX.Element | null => {
    if (arr.length > 0) {
      if (arr.length > 3) {
        data = (
          <Collapse
            p={5}
            pb={15}
            pr={12}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
            in={opened}
            transitionDuration={300}
            transitionTimingFunction="linear"
          >
            <ScrollArea h={190} offsetScrollbars scrollbarSize={6}>
              <Stack gap={5} pl={18}>
                {arr.map((item, index) => {
                  return <CardItemProcess key={index} />;
                })}
              </Stack>
            </ScrollArea>
          </Collapse>
        );
      } else {
        data = (
          <Collapse
            p={5}
            pb={15}
            pr={12}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
            in={opened}
            transitionDuration={300}
            transitionTimingFunction="linear"
          >
            <Stack gap={5} pl={18}>
              {arr.map((item, index) => {
                return <CardItemProcess key={index} />;
              })}
            </Stack>
          </Collapse>
        );
      }
    } else {
      return null;
    }
    return data;
  };

  return (
    <Box
      draggable={draggableStatus}
      mx="auto"
      style={{
        border: `1px solid #696969`,
        borderRadius: "6px",
        position: "relative",
        cursor: `${itemCardFake.length > 0 ? "pointer" : "default"}`,
      }}
    >
      <Group
        onClick={toggle}
        align={"center"}
        styles={(theme) => ({
          root: {
            width: "100%",
          },
        })}
        py={5}
        pl={22}
        pr={10}
      >
        <Divider
          orientation="vertical"
          size="xl"
          color="red"
          h={itemCardFake.length > 0 && opened ? "94%" : 64}
          style={{
            height: `${opened ? " 91.5%" : "58px"}`,
            transition: "height 0.3s ease-in-out",
            borderRadius: "15px",
            marginTop: "0.4rem",
            position: "absolute",
            left: "8px",
            top: "2px",
          }}
        />
        <Flex align={"center"} justify={"center"} gap={8}>
          <Avatar src={null} alt="no image here" color="indigo" size="lg" />
          <Stack align="start" gap={0}>
            <Title order={4}>Cliente Nombre</Title>
            <Flex align={"center"} gap={12}>
              <Stack gap={0}>
                <Text
                  styles={(theme) => ({
                    root: {
                      color: `${theme.colors.principalTheme[6]}`,
                      marginBottom: "-0.3rem",
                    },
                  })}
                >
                  Vehiculo
                </Text>
                <Text>Tarifa: $$</Text>
              </Stack>
              {itemCardFake.length > 0 ? (
                <Badge color="blue" radius={"sm"}>
                  {itemCardFake.length}
                </Badge>
              ) : (
                <></>
              )}
            </Flex>
          </Stack>
        </Flex>
        <Stack justify="space-between" align="end">
          <UnstyledButton>
            <HiOutlineDotsVertical />
          </UnstyledButton>
          <Text size="xs">30/10/2023</Text>
        </Stack>
      </Group>
      {cardContainerView(itemCardFake)}
    </Box>
  );
}
