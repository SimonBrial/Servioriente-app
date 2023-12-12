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
