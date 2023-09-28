"use Client";

import React, { ReactNode } from "react";
import { IconType } from "react-icons";
import { ActionIcon, Tooltip, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import sidebarClass from "../sidebar/sidebar.module.css";

interface NavIconProps {
    icon: ReactNode;
    dir: string;
    status?: boolean;
    label: string;
    onClick?(): void;
}

function NavIcon({ icon, dir, status = false, label, onClick }: NavIconProps) {
    console.log(status);
    return (
        <Tooltip
            withArrow
            offset={26}
            label={label}
            position="right"
            color="#004EE5"
            transitionProps={{ transition: "skew-up", duration: 300 }}
        >
            <UnstyledButton
                onClick={onClick}
                className={sidebarClass.iconContainer}
                //data-active={active || undefined}
            >
                <Link href={dir} className={sidebarClass.icon}>
                    <span className={sidebarClass.icon}>{icon}</span>
                </Link>
            </UnstyledButton>
        </Tooltip>
    );
}

export default NavIcon;
