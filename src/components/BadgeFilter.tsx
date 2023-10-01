import { Badge } from "@mantine/core";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";

export function BadgeFilter({ tag }: { tag: string }) {
    return (
        <Badge
            variant="light"
            color="blue"
            radius="sm"
            style={{
                color: "#004EE5",
                backgroundColor: "rgba(0, 76, 229, 0.3)",
                cursor: "default"
            }}
            rightSection={
                <IoClose
                    style={{ width: "16px", height: "16px", cursor: "pointer" }}
                />
            }
        >
            {tag}
        </Badge>
    );
}
