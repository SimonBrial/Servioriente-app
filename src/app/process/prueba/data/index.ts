import { CardProcessProps } from "@/interface/interface";
import { Task } from "../types";

export const INITIAL_TASKS: Task[] = [
  {
    id: crypto.randomUUID(),
    title: "Title 1",
    description: "Desc 1",
    status: "entregado",
  },
  {
    id: crypto.randomUUID(),
    title: "Title 2",
    description: "Desc 2",
    status: "entregado",
  },
  {
    id: crypto.randomUUID(),
    title: "Title 3",
    description: "Desc 3",
    status: "espera",
  },
  {
    id: crypto.randomUUID(),
    title: "Title 4",
    description: "Desc 4",
    status: "generacion",
  },
  {
    id: crypto.randomUUID(),
    title: "Title 5",
    description: "Desc 5",
    status: "generacion",
  },
  {
    id: crypto.randomUUID(),
    title: "Title 6",
    description: "Desc 6",
    status: "pagado",
  },
];

export const INITIAL_CARDS: CardProcessProps[] = [
  {
    columnId: "espera",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 1,
    clientName: "Simon 1",
  },

  {
    columnId: "espera",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 2,
    clientName: "Simon 2",
  },
  {
    columnId: "generacion",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 3,
    clientName: "Simon 3",
  },
  {
    columnId: "generacion",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 4,
    clientName: "Simon 4",
  },
  {
    columnId: "generacion",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 4,
    clientName: "Simon 4",
  },
  {
    columnId: "generacion",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 4,
    clientName: "Simon 4",
  },
  {
    columnId: "pagado",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 5,
    clientName: "Simon 5",
  },
  {
    columnId: "pagado",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 6,
    clientName: "Simon 6",
  },
  {
    columnId: "entregado",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 7,
    clientName: "Simon 7",
  },
  {
    columnId: "entregado",
    id: crypto.randomUUID(),
    vehicle: "spark",
    date: "06/11/2023",
    tag: 8,
    clientName: "Simon 8",
  },
];
