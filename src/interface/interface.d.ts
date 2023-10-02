import { ReactNode } from "react";

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

export type { NavIconProps, sidebarItems, arraySocial, SocialRed };
