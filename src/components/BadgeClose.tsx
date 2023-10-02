import { Badge } from "@mantine/core";
import { HiOutlineTrash } from "./IconsIndex";

export function BadgeClose({ status }: { status: boolean }) {
    let badge = <></>;
    if (status === true) {
        badge = (
            <Badge
                variant="light"
                color="blue"
                radius="sm"
                style={{
                    color: "#FF0000",
                    backgroundColor: "rgba(255, 0, 0, 0.3)",
                    cursor: "pointer",
                }}
                rightSection={
                    <HiOutlineTrash
                        style={{
                            width: "16px",
                            height: "16px",
                        }}
                    />
                }
            >
                Borrar Filtros
            </Badge>
        );
    } else {
        badge = (
            <Badge
                variant="light"
                color="blue"
                radius="sm"
                style={{
                    color: "#696969",
                    backgroundColor: "rgba(105, 105, 105, 0.3",
                }}
            >
                <HiOutlineTrash
                    style={{
                        width: "16px",
                        height: "16px",
                        marginBottom: "-3px",
                        cursor: "pointer",
                    }}
                />
            </Badge>
        );
    }

    return <>{badge}</>;
}
