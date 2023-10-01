import { ReactNode } from "react";
import { Tooltip } from "@mantine/core";
import countClass from "../styles/countIndicator.module.css"

interface CountIndicatorProps {
    count: number;
    iconSection: ReactNode;
    description: string;
}

export function CountIndicator({
    count,
    iconSection,
    description,
}: CountIndicatorProps) {
    return (
        <Tooltip
            withArrow
            offset={5}
            label={`${description}: ${count}`}
            position="bottom"
            color="#004EE5"
            transitionProps={{ transition: "skew-up", duration: 300 }}
        >
            <div className={countClass.countIndicator}>
                <span className={countClass.countIndicator_Icon}>{iconSection}</span>
                <p>{count}</p>
            </div>
        </Tooltip>
    );
}
