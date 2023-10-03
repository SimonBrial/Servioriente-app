import { ReactNode } from "react";
import { tagIcon } from "../types/types";

interface NavIconProps {
    icon: ReactNode;
    dir: string;
    active?: boolean;
    label: string;
    onClick?(): void;
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

interface BtnAdd {
    iconTag: tagIcon;
    label: string;
    addFn?(): void;
}

export type {
    NavIconProps,
    sidebarItems,
    arraySocial,
    SocialRed,
    iconList,
    BtnAdd,
};
