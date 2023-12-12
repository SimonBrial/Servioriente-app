/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
export type Status = "espera" | "generacion" | "pagado" | "entregado";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
}

export interface BoardSections {
  [name: string]: Task[];
}
