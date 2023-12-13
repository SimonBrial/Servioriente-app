"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CardProcess } from "./CardProcess";
import { SortableItemContainer } from "./SortableItemContainer";
import {
  Badge,
  Divider,
  Flex,
  Grid,
  ScrollArea,
  Stack,
  Title,
} from "@mantine/core";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { underScoreColor } from "../../utils/underScoreColor";
import { CardProcessProps } from "@/interface/interface";
import { useMediaQuery } from "@mantine/hooks";

interface BoardSectionProps {
  id: string;
  title: string;
  tasks: CardProcessProps[];
}

// Contiene los elementos que seran organizados, es decir, es el contenedor
export const ProcessColumnLayout = ({
  id,
  title,
  tasks,
}: BoardSectionProps): JSX.Element => {
  const matches = useMediaQuery("(max-width: 1280px)");

  const { setNodeRef } = useDroppable({
    id,
  });

  console.log(matches);

  return (
    <Grid.Col
      span={12}
      style={{
        // backgroundColor: "#fafafa",
        padding: "1rem",
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
              {tasks.map((task) => (
                <div key={task.id} style={{ marginBottom: "0.2rem" }}>
                  <SortableItemContainer id={task.id}>
                    <CardProcess card={task} />
                  </SortableItemContainer>
                </div>
              ))}
            </ScrollArea>
          </div>
        </Stack>
      </SortableContext>
    </Grid.Col>
  );
};
