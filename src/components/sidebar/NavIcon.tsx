"use Client";

import {  Tooltip, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import sidebarClass from "../styles/sidebar.module.css";
import { NavIconProps } from "@/interface/interface";

function NavIcon({ icon, dir, active, label, onClick }: NavIconProps) {
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
                data-active={active || undefined}
            >
                <Link href={dir} className={sidebarClass.icon}>
                    <span className={sidebarClass.icon}>{icon}</span>
                </Link>
            </UnstyledButton>
        </Tooltip>
    );
}

export default NavIcon;
