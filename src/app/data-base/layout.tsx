import { Stack } from "@mantine/core";

export default function ListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Stack align="stretch" justify="flex-start" gap="xs">
            {children}
        </Stack>
    );
}
