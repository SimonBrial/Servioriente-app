/* eslint-disable array-callback-return */
"use client";

// import { useCallback, useState } from "react";
import {
  closestCorners,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  DragEndEvent,
  DragOverlay,
  DndContext,
  useSensors,
  useSensor,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Grid } from "@mantine/core";
import { CardProcessProps, CardProps } from "@/interface/interface";
import { ProcessColumnContainer } from "./ProcessColumnContainer";
import { useState } from "react";
import { createPortal } from "react-dom";
import OverlayCardLayout from "./OverlayCardLayout";
import CardProcess from "./CardProcess";

// ------------------> https://codesandbox.io/p/sandbox/dnd-kit-multi-containers-lknfe?file=%2Fsrc%2Fapp.js%3A118%2C49
// ------------------> https://codesandbox.io/p/sandbox/github/rcastilloc/dnd-kit-nested-containers-example/tree/main/
const defaultCards: CardProcessProps[] = [
  {
    columnId: "espera",
    cardId: "100",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 1,
    clientName: "Simon 1",
  },

  {
    columnId: "espera",
    cardId: "200",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 2,
    clientName: "Simon 2",
  },
  {
    columnId: "generacion",
    cardId: "300",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 3,
    clientName: "Simon 3",
  },
  {
    columnId: "generacion",
    cardId: "400",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 4,
    clientName: "Simon 4",
  },
  {
    columnId: "generacion",
    cardId: "410",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 4,
    clientName: "Simon 4",
  },
  {
    columnId: "generacion",
    cardId: "420",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 4,
    clientName: "Simon 4",
  },
  {
    columnId: "pagado",
    cardId: "500",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 5,
    clientName: "Simon 5",
  },
  {
    columnId: "pagado",
    cardId: "600",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 6,
    clientName: "Simon 6",
  },
  {
    columnId: "entregado",
    cardId: "700",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 7,
    clientName: "Simon 7",
  },
  {
    columnId: "entregado",
    cardId: "800",
    vehicle: "spark",
    date: "06/11/2023",
    tag: 8,
    clientName: "Simon 8",
  },
];

/* const itemCardFake1: CardProcessProps[] = [
  { vehicle: "spark", date: "06/11/2023", tag: 5, clientName: "Simon Briceño" },
  { vehicle: "spark", date: "06/11/2023", tag: 5, clientName: "Simon Briceño" },
];
const itemCardFake2: CardProcessProps[] = [
  { vehicle: "spark", date: "06/11/2023", tag: 5, clientName: "Simon Briceño" },
  { vehicle: "spark", date: "06/11/2023", tag: 5, clientName: "Simon Briceño" },
  { vehicle: "spark", date: "06/11/2023", tag: 5, clientName: "Simon Briceño" },
  { vehicle: "spark", date: "06/11/2023", tag: 5, clientName: "Simon Briceño" },
];
const itemCardFake3: CardProcessProps[] = [
  { vehicle: "spark", date: "06/11/2023", tag: 5, clientName: "Simon Briceño" },
  { vehicle: "spark", date: "06/11/2023", tag: 5, clientName: "Simon Briceño" },
];
const itemCardFake4: CardProcessProps[] = [
  { vehicle: "spark", date: "06/11/2023", tag: 5, clientName: "Simon Briceño" },
]; */
/* interface ColumnProps {
  id: string;
  color: string;
} */
/* const prueba = [
  { id: "1.0", columnId: "Espera", text: "element 1.1" },
  { id: "1.1", columnId: "Espera", text: "element 1.2" },
  { id: "1.2", columnId: "Espera", text: "element 1.3" },
  { id: "1.3", columnId: "Generacion", text: "element 2.1" },
  { id: "1.4", columnId: "Generacion", text: "element 2.2" },
  { id: "1.5", columnId: "Generacion", text: "element 2.3" },
  { id: "1.6", columnId: "Pagado", text: "element 3.1" },
  { id: "1.7", columnId: "Entregado", text: "element 4.1" },
  { id: "1.8", columnId: "Entregado", text: "element 4.2" },
]; */
/* const columnsPrueba = [
  { id: "Espera", color: "#E5DB00" },
  { id: "Generacion", color: "#E56000" },
  { id: "Pagado", color: "#12E500" },
  { id: "Entregado", color: "#004EE5" },
]; */
/* interface pruebaProps {
  id: string;
  text: string;
  columnId: string;
} */
/* interface pruebaPropsSortable {
  elementProps: pruebaProps;
} */

export default function ProcessContainerLayout(): JSX.Element {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>("");

  /* let dataArray: JSX.Element[];
  function arrayBuilder(arr: CardProcessProps[]): JSX.Element[] {
    dataArray = arr.map((item: CardProcessProps, index: number) => {
      return (
        <CardProcess
        idx={1}
        cardProcessID={crypto.randomUUID()}
        clientName={item.clientName}
        key={index}
        vehicle={item.vehicle}
        date={item.date}
        tag={item.tag}
        />
        );
      });
      return dataArray;
    } */
  const [items, setItems] = useState<CardProcessProps[]>(defaultCards);

  const [activeCard, setActiveCard] = useState<CardProps | null>(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  /* const itemsIds = useMemo(() => {
    return items.map((item) => item);
  }, [items]); */

  const [columns] = useState(["Espera", "Generacion", "Pagado", "Entregado"]);
  /* { id: "Espera", color: "#E5DB00" },
    { id: "Generacion", color: "#E56000" },
    { id: "Pagado", color: "#12E500" },
    { id: "Entregado", color: "#004EE5" }, */

  /* const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: columns.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "0.5rem 1rem",
    backgroundColor: "#66bbe5",
    borderRadius: "10px",
    margin: "0.2rem 0",
    cursor: "grab",
  }; */

  const findContainer = (id: string) => {
    if (id in columns) {
      return id;
    }
    console.log(id in columns);

    return Object.keys(columns).find((key: any) => columns[key].id);
  };

  findContainer("espera");

  function handleDragStart(event: DragStartEvent): void {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event;
    setActiveId(null);
    // console.log("active", active.id);
    // console.log("over", over?.id);

    if (!active.id !== over?.id) {
      setItems((item) => {
        /* const oldIndex = item.findIndex((element) => element.id === active.id);
        const newIndex = item.findIndex((element) => element.id === over?.id); */
        const oldIndex = item.indexOf(active.id);
        const newIndex = item.indexOf(over?.id);
        // console.log(arrayMove(item, oldIndex, newIndex));
        return arrayMove(item, oldIndex, newIndex);
      });
    }
    // console.log("drag end", active);
  };
  return (
    <DndContext
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
      sensors={sensors}
      onDragStart={handleDragStart}
    >
      <Grid style={{ display: "flex" }}>
        {columns.map((column, index) => (
          <ProcessColumnContainer
            arrItems={items.filter(
              (item) => item.columnId === column.toLowerCase(),
            )}
            titleDescription={column}
            key={index}
            color={column}
            cardActive={activeId}
          />
        ))}
      </Grid>
    </DndContext>
  );
}
