"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "./types";
import { TaskItem } from "./TaskItem";
import { SortableItemContainer } from "./SortableItemContainer";
import { TitleLayout } from "@/components/TitleLayout";
import { Grid, Stack } from "@mantine/core";

interface BoardSectionProps {
  id: string;
  title: string;
  tasks: Task[];
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
        backgroundColor: "#fafafa",
        padding: "1rem",
        // backgroundColor: "red",
        width: "100%",
      }}
    >
      <TitleLayout color="" icon="" onText title={title} />
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
                  <TaskItem task={task} />
                </SortableItemContainer>
              </div>
            ))}
          </div>
        </Stack>
      </SortableContext>
    </Grid.Col>
  );
};
