/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
"use client";

import React, { useEffect, useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  verticalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { CardProcess } from "./CardProcess";
import { SortableItemContainer } from "./SortableItemContainer";
import {
  ScrollArea,
  Divider,
  Badge,
  Stack,
  Title,
  Flex,
  Grid,
  useMantineColorScheme,
} from "@mantine/core";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { underScoreColor } from "../../utils/underScoreColor";
import { BoardSectionProps, CardProcessProps } from "@/interface/interface";
import { useMediaQuery } from "@mantine/hooks";
import classes from "../../styles/cardProcess.module.css";

// Contiene los elementos que seran organizados, es decir, es el contenedor
export const ProcessColumnLayout = ({
  id,
  title,
  tasks,
}: BoardSectionProps): JSX.Element => {
  const matches = useMediaQuery("(max-width: 1280px)");
  const [cardsArray, setCardsArray] = useState<CardProcessProps[]>(tasks);
  const { colorScheme } = useMantineColorScheme();

  // 1. Detectar cual elemento se movio de sitio.
  // 2. Detectar cuales arrays modificaron sus tamaños.
  // 3. Cambiar el color del divider de la card movida.
  // 4. Modificar la propiedad del column id del elemento que se movio.

  function changeProperty(
    id: string,
    arr: CardProcessProps[],
  ): CardProcessProps[] {
    arr.forEach((arrCards) => {
      if (arrCards.columnId !== id) {
        arrCards.columnId = id;
      }
    });
    return arr;
  }
  useEffect(() => {
    setCardsArray(changeProperty(id, tasks));
  }, [tasks.length]);
  // console.log("CardsArry: ", cardsArray);
  // console.log("Tasks: ", tasks);

  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <Grid.Col
      className={
        colorScheme === "light"
          ? `${classes.process_col}`
          : `${classes.process_col_dark}`
      }
      span={12}
      style={{
        // backgroundColor: "#fafafa",
        padding: "0.5rem",
        width: "100%",
      }}
    >
      <div>
        <Flex gap={5} justify={"center"} align={"center"}>
          <Title
            order={2}
            style={{
              textAlign: "center",
            }}
          >
            {capitalizeFirstLetter(title)}
          </Title>
          <Badge radius="sm" styles={{ label: { fontSize: "0.9rem" } }}>
            {tasks.length}
          </Badge>
        </Flex>
        <Divider
          size="md"
          styles={(theme) => ({
            root: {
              borderColor: underScoreColor(capitalizeFirstLetter(title)),
              marginTop: "-0.3rem",
            },
          })}
        />
      </div>
      <SortableContext
        id={id}
        items={tasks}
        strategy={verticalListSortingStrategy}
      >
        <Stack
          gap={8}
          align="center"
          style={{
            marginTop: "0.5rem",
            height: matches ? "78.8vh" : "74.1vh",
            width: "100%",
          }}
        >
          <div ref={setNodeRef} style={{ margin: "0.5rem 3rem" }}>
            <ScrollArea
              h={matches ? "78.8vh" : "74.1vh"}
              scrollbarSize={6}
              offsetScrollbars
              scrollHideDelay={100}
            >
              {cardsArray.map(
                (
                  card, // Si se cambia ese array por el de tasks, el ordenamiento queda en la posicion que se deje
                ) => (
                  <div key={card.id} style={{ marginBottom: "0.2rem" }}>
                    <SortableItemContainer id={card.id}>
                      <CardProcess card={card} />
                    </SortableItemContainer>
                  </div>
                ),
              )}
            </ScrollArea>
          </div>
        </Stack>
      </SortableContext>
    </Grid.Col>
  );
};
