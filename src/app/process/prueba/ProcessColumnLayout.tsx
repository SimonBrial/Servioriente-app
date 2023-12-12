"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
// import { Task } from "./types";
import { CardProcess } from "./CardProcess";
import { SortableItemContainer } from "./SortableItemContainer";
import { Badge, Divider, Flex, Grid, Stack, Title } from "@mantine/core";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { underScoreColor } from "../../../utils/underScoreColor";
import { CardProcessProps } from "@/interface/interface";

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
  const { setNodeRef } = useDroppable({
    id,
  });

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
            height: "43rem",
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          <div ref={setNodeRef} style={{ margin: "0.5rem 3rem" }}>
            {tasks.map((task) => (
              <div key={task.id} style={{ marginBottom: "0.2rem" }}>
                <SortableItemContainer id={task.id}>
                  <CardProcess card={task} />
                </SortableItemContainer>
              </div>
            ))}
          </div>
        </Stack>
      </SortableContext>
    </Grid.Col>
  );
};
