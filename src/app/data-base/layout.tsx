import { Container, Stack } from "@mantine/core";
import ListDataBase from "@/components/base-de-datos/ListDataBase";
import { UtilsBar } from "@/components/UtilsBar";
import { FilterContainer } from "@/components/FilterContainer";

export default function ListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Stack align="stretch" justify="flex-start" gap="xs">
            <UtilsBar />
            <FilterContainer />
            <ListDataBase />
        </Stack>
    );
}
