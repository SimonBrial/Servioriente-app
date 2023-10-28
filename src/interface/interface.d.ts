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

export type {
  /* arraySocial, */
  TitleLayoutProps,
  AlarmCardProps,
  NavIconProps,
  sidebarItems,
  AlarmProps,
  /* SocialRed, */
  AlarmObj,
  iconList,
  BtnAddProps,
};
