import { Badge } from "@mantine/core";

export default function StatusBadge({ title }: { title: string }) {
    return (
        <Badge color="#004EE5" size="md" radius="sm">
            {title}
        </Badge>
    );
}
