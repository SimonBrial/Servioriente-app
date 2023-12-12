import { TitleLayout } from "@/components/TitleLayout";
import { CardProcessProps } from "@/interface/interface";
import { Stack, Grid } from "@mantine/core";
import React, { useMemo, useState } from "react";
import {
  verticalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import CardProcess from "./CardProcess";
import { DragOverlay, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core";
import OverlayCardLayout from "./OverlayCardLayout";

interface ProcessColumnContainerProps {
  titleDescription: string;
  color: string;
  // arrayItemsBuilder: (arr: any[]) => JSX.Element[];
  // children: React.ReactNode;
  arrItems: CardProcessProps[];
  cardActive: UniqueIdentifier | string | null;
}

export const ProcessColumnContainer = ({
  titleDescription,
  color,
  arrItems,
  cardActive,
}: ProcessColumnContainerProps): JSX.Element => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: titleDescription,
    data: { type: "CardProcessProps", arrItems },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    border: "1px solid red",
  };

  const cardIds = useMemo(() => {
    return arrItems.map((item) => item.cardId);
  }, [arrItems]);

  return (
    <Grid.Col
      span={3}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={{
        ...style,
        width: "100%",
        // backgroundColor: isDragging ? "#929191" : " White",
      }}
    >
      <TitleLayout
        color={titleDescription}
        icon=""
        title={titleDescription}
        onText={false}
      />
      <Stack
        gap={8}
        align="center"
        style={{
          marginTop: "0.5rem",
          height: "43rem",
          // border: "1px solid red",
        }}
      >
        {/* <ScrollArea type="never" ></ScrollArea> */}
        <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
          <div style={{ padding: "0.5rem" }} ref={setNodeRef}>
            {arrItems.map((item: CardProcessProps) => {
              return (
                <CardProcess
                  cardItem={item}
                  key={item.cardId}
                  colorCard={color}
                />
              );
            })}
          </div>
        </SortableContext>
      </Stack>
    </Grid.Col>
  );
};

{
  /* <SortableContext items={cardIds} strategy={verticalListSortingStrategy}>
      <div ref={setNodeRef} >
        {arrItems.map((item: CardProcessProps) => {
          return <CardProcess cardItem={item} key={item.cardId} />;
        })}
      </div>
    </SortableContext> */
}

{
  /* <Grid.Col
      span={3}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      <TitleLayout
        color={titleDescription}
        icon=""
        title={titleDescription}
        onText={false}
      />
      <Stack
        gap={8}
        align="center"
        style={{
          marginTop: "0.5rem",
          height: "43rem",
          // border: "1px solid red",
        }}
      >
        <ScrollArea type="never">
          <SortableContext
            items={cardIds}
            strategy={verticalListSortingStrategy}
          >
            <div ref={setNodeRef}>
              {arrItems.map((item: CardProcessProps) => {
                return <CardProcess cardItem={item} key={item.cardId} />;
              })}
            </div>
          </SortableContext>
        </ScrollArea>
      </Stack>
    </Grid.Col> */
}
