"use Client";

import { Tooltip, UnstyledButton, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import sidebarClass from "../../styles/sidebar.module.css";
import { NavIconProps } from "@/interface/interface";

function NavIcon({
  onClick,
  active,
  label,
  icon,
  dir,
}: NavIconProps): JSX.Element {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Tooltip
      withArrow
      offset={26}
      label={label}
      position="right"
      color="#004EE5"
      transitionProps={{ transition: "skew-up", duration: 300 }}
      styles={{ tooltip: { color: "#fff" } }}
    >
      <UnstyledButton
        onClick={onClick}
        className={
          colorScheme === "light"
            ? sidebarClass.iconContainer
            : sidebarClass.iconContainer_dark
        }
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
