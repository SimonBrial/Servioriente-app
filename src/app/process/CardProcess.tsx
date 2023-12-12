"use client";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { HiOutlineDotsVertical } from "@/components/IconsIndex";
import {
  UnstyledButton,
  /* ScrollArea,
  Collapse, */
  Divider,
  Avatar,
  Stack,
  Title,
  // Badge,
  Group,
  Text,
  Flex,
  Box,
} from "@mantine/core";
// import CardItemProcess from "./CardItemProcess";
import { CardProcessItemProps, CardProps } from "@/interface/interface";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { underScoreColor } from "@/utils/underScoreColor";

const itemCardFake: CardProcessItemProps[] = [
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
  { vehicle: "spark", date: "06/11/2023", direction: "Carabobo", tag: 5 },
];

export default function CardProcess({
  cardItem,
  colorCard,
}: CardProps): JSX.Element {
  const [opened, { toggle }] = useDisclosure(false);
  const matches = useMediaQuery("(max-width: 1280px)");

  /*  let data: JSX.Element | null;
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
  }; */

  if (opened) {
    console.log("abriendo");
  }

  const colorSelected: string = underScoreColor(colorCard);

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

  /*  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: `1px solid #696969`,
    backgroundColor: "white",
    borderRadius: "6px",
    position: "relative",
    cursor: `${itemCardFake.length > 0 ? "pointer" : "default"}`,
    margin: "0.2rem 0",
    opacity: isDragging ? "1" : "1",
    zIndex: isDragging ? "10" : "1",
    boxShadow: isDragging ? "0px 11px 14px -4px rgba(74,74,74,0.81)" : "",
  }; */

  /* if (isDragging) {
    return (
      <Box
        ref={setNodeRef}
        {...attributes}
        style={{
          transform: CSS.Transform.toString(transform),
          transition,
          border: `1px solid #696969`,
          backgroundColor: "white",
          borderRadius: "6px",
          position: "relative",
          cursor: `${itemCardFake.length > 0 ? "pointer" : "default"}`,
          margin: "0.2rem 0",
          opacity: isDragging ? "1" : "1",
          zIndex: isDragging ? "10" : "1",
          boxShadow: isDragging ? "0px 11px 14px -4px rgba(74,74,74,0.81)" : "",
        }}
        mx="auto"
      >
        <Group
          align={"center"}
          // justify={"space-between"}

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
            size="8px"
            color={colorSelected}
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
            onClick={toggle}
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
                cursor: "pointer",
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
                {/* {itemCardFake.length > 0 ? (
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
      </Box>
    );
  } */

  return (
    <Box
      ref={setNodeRef}
      {...attributes}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        border: `1px solid #696969`,
        backgroundColor: "white",
        borderRadius: "6px",
        position: "relative",
        cursor: `${itemCardFake.length > 0 ? "pointer" : "default"}`,
        margin: "0.2rem 0",
        opacity: isDragging ? "1" : "1",
        zIndex: isDragging ? "10" : "1",
        boxShadow: isDragging ? "0px 11px 14px -4px rgba(74,74,74,0.81)" : "",
      }}
      mx="auto"
    >
      <Group
        align={"center"}
        // justify={"space-between"}

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
          size="8px"
          color={colorSelected}
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
          onClick={toggle}
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
              cursor: "pointer",
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
              {/* {itemCardFake.length > 0 ? (
                <Badge color="blue" radius={"sm"}>
                  {itemCardFake.length}
                </Badge>
              ) : (
                <></>
              )} */}
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

// https://codesandbox.io/p/sandbox/dnd-kit-sortable-example-yhwz3f?file=%2Fsrc%2FSortableItem.jsx%3A12%2C25-12%2C33
// ----****-------> https://codesandbox.io/p/sandbox/react-drag-drop-todo-rwn8d3?file=%2Fsrc%2Fcomponents%2FBoardSection.tsx
