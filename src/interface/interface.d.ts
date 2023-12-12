import { type ReactNode } from "react";
import { type tagIcon } from "../types/types";

interface NavIconProps {
  icon: ReactNode;
  dir: string;
  active?: boolean;
  label: string;
  onClick?: () => void;
}

interface sidebarItems {
  icon: ReactNode;
  label: string;
  direction: string;
}

interface iconList {
  tag: tagIcon;
  icon: ReactNode;
}

interface BtnAddProps {
  iconTag: tagIcon;
  label: string;
  addFn?: () => void;
  children: ReactNode;
}

interface TitleLayoutProps {
  title: string;
  icon: string;
  color: string;
  onText: boolean;
}

interface AlarmProps {
  objAlarm: TitleLayoutObj;
}

interface AlarmObj {
  id: string;
  title: string;
  icon?: string;
  color: string;
  createAt: string;
  createdTo: string;
  privateAlarm: boolean;
  privateUser: string;
  description: string;
  automated: boolean;
}

interface AlarmCardProps {
  id: string;
  title: string;
  createdAt: string;
  createHour: string;
  forDate: string;
  forHour: string;
  description: string;
}

interface CardProcessItemProps {
  direction: string;
  vehicle: string;
  date: string;
  tag: number;
}
interface CardProcessProps {
  /* dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
  draggableProps: DraggableProvidedDraggableProps;
  innerRef: (element: HTMLElement | null) => void; // HTMLElement | LegacyRef<HTMLDivElement> */
  clientName: string;
  columnId: string;
  vehicle: string;
  date: string;
  tag: number;
  id: string;
}

interface CardProps {
  cardItem: CardProcessProps;
  colorCard: string;
}

export type {
  /* arraySocial, */
  CardProcessItemProps,
  TitleLayoutProps,
  CardProcessProps,
  AlarmCardProps,
  NavIconProps,
  sidebarItems,
  AlarmProps,
  CardProps,
  /* SocialRed, */
  AlarmObj,
  iconList,
  BtnAddProps,
};
