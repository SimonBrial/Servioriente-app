"use client";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { HiOutlineDotsVertical } from "@/components/IconsIndex";
import {
  UnstyledButton,
  ScrollArea,
  Collapse,
  Divider,
  Avatar,
  Stack,
  Title,
  Badge,
  Group,
  Text,
  Flex,
  Box,
} from "@mantine/core";
import CardItemProcess from "./CardItemProcess";
import { CardProcessItemProps, CardProps } from "@/interface/interface";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const itemCardFake: CardProcessItemProps[] = [
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
];

export default function CardProcess({ cardItem }: CardProps): JSX.Element {
  const [opened, { toggle }] = useDisclosure(false);
  const matches = useMediaQuery("(max-width: 1280px)");

  let data: JSX.Element | null;
  const cardContainerView = (
    arr: CardProcessItemProps[],
  ): JSX.Element | null => {
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
                {arr.map((item: CardProcessItemProps, index) => {
                  return (
                    <CardItemProcess
                      key={crypto.randomUUID()}
                      date={item.date}
                      direction={item.direction}
                      tag={item.tag}
                      vehicle={item.vehicle}
                    />
                  );
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
              {arr.map((item) => {
                return (
                  <CardItemProcess
                    key={crypto.randomUUID()}
                    date={item.date}
                    direction={item.direction}
                    tag={item.tag}
                    vehicle={item.vehicle}
                  />
                );
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

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: cardItem.cardId,
    data: { type: "CardProps", cardItem },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  /* const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "0.5rem 1rem",
    backgroundColor: "#66bbe5",
    borderRadius: "10px",
    margin: "0.2rem 0.2rem",
    cursor: "pointer",
    opacity: isDragging ? 0.7 : 1,
    display: "flex",
    gap: "0.5rem",
  }; */

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      style={{
        ...style,
        border: `1px solid #696969`,
        borderRadius: "6px",
        position: "relative",
        cursor: `${itemCardFake.length > 0 ? "move" : "default"}`,
        margin: "0.2rem 0",
        opacity: isDragging ? "0.8" : "1",
      }}
      mx="auto"
    >
      <Group
        onClick={toggle}
        align={"center"}
        justify={"space-between"}
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
          {...listeners}
          orientation="vertical"
          size="xl"
          color="red"
          h={itemCardFake.length > 0 && opened ? "94%" : matches ? 50 : 64}
          style={{
            height: `${opened ? " 91.5%" : "58px"}`,
            transition: "height 0.3s ease-in-out",
            borderRadius: "15px",
            marginTop: "0.4rem",
            position: "absolute",
            left: "8px",
            top: "2px",
            cursor: "move",
          }}
        />
        <Flex
          align={"center"}
          justify={"center"}
          gap={matches ? 3 : 8}
          style={{
            cursor: `${itemCardFake.length > 0 ? "pointer" : "default"}`,
          }}
        >
          <Avatar
            component="button"
            src={null}
            alt="no image here"
            color="indigo"
            size={matches ? "md" : "lg"}
            style={{
              cursor: "move",
            }}
          />
          <Stack align="start" gap={0}>
            <Title order={matches ? 5 : 4}>
              {cardItem.clientName} {cardItem.cardId}
            </Title>
            <Flex align={"center"} gap={12}>
              <Stack gap={0}>
                <Text
                  size={matches ? "sm" : "md"}
                  styles={(theme) => ({
                    root: {
                      color: `${theme.colors.principalTheme[6]}`,
                      marginBottom: "-0.3rem",
                    },
                  })}
                >
                  {cardItem.vehicle}
                </Text>
                <Text size={matches ? "sm" : "md"}>
                  Tarifa: {cardItem.tag}$
                </Text>
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
          <Text size={matches ? "xs" : "sm"}>{cardItem.date}</Text>
        </Stack>
      </Group>
      {/* {cardContainerView(itemCardFake)} */}
    </Box>
  );
}

{
  /* <div ref={setNodeRef} style={style} {...attributes}>
      <button
        {...listeners}
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "1.5rem",
        }}
      >
        ⣿
      </button>
      <div
        style={{
          padding: "0.8rem",
          borderRadius: "10px",
          backgroundColor: "#2987b6",
          width: "100%",
        }}
      >
        <p style={{ fontWeight: "bold", color: "white" }}>
          Item to Drag {cardItem.cardId}
        </p>
        <p style={{ color: "white" }}>{cardItem.clientName}</p>
        <p style={{ fontWeight: "bold", color: "red" }}>{cardItem.columnId}</p>
      </div>
    </div> */
}

{
  /* <Box
      ref={setNodeRef}
      style={{
        ...style,
        border: `1px solid #696969`,
        borderRadius: "6px",
        position: "relative",
        cursor: `${itemCardFake.length > 0 ? "move" : "default"}`,
        margin: "0.2rem 0",
        opacity: isDragging ? "0.8" : "1",
      }}
      {...listeners}
      {...attributes}
      mx="auto"
    >
      <Group
        onClick={toggle}
        align={"center"}
        justify={"space-between"}
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
          // {...listeners}
          orientation="vertical"
          size="xl"
          color="red"
          h={itemCardFake.length > 0 && opened ? "94%" : matches ? 50 : 64}
          style={{
            height: `${opened ? " 91.5%" : "58px"}`,
            transition: "height 0.3s ease-in-out",
            borderRadius: "15px",
            marginTop: "0.4rem",
            position: "absolute",
            left: "8px",
            top: "2px",
            cursor: "move",
          }}
        />
        <Flex
          align={"center"}
          justify={"center"}
          gap={matches ? 3 : 8}
          style={{
            cursor: `${itemCardFake.length > 0 ? "pointer" : "default"}`,
          }}
        >
          <Avatar
            {...listeners}
            component="button"
            src={null}
            alt="no image here"
            color="indigo"
            size={matches ? "md" : "lg"}
            style={{
              cursor: "move",
            }}
          />
          <Stack align="start" gap={0}>
            <Title order={matches ? 5 : 4}>
              {cardItem.clientName} {cardItem.cardId}
            </Title>
            <Flex align={"center"} gap={12}>
              <Stack gap={0}>
                <Text
                  size={matches ? "sm" : "md"}
                  styles={(theme) => ({
                    root: {
                      color: `${theme.colors.principalTheme[6]}`,
                      marginBottom: "-0.3rem",
                    },
                  })}
                >
                  {cardItem.vehicle}
                </Text>
                <Text size={matches ? "sm" : "md"}>
                  Tarifa: {cardItem.tag}$
                </Text>
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
          <Text size={matches ? "xs" : "sm"}>{cardItem.date}</Text>
        </Stack>
      </Group>
      {cardContainerView(itemCardFake)}
    </Box> */
}
// <div ref={setNodeRef} style={style} {...attributes} {...listeners}></div>

// https://codesandbox.io/p/sandbox/dnd-kit-sortable-example-yhwz3f?file=%2Fsrc%2FSortableItem.jsx%3A12%2C25-12%2C33
