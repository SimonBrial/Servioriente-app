import { Container } from "@mantine/core";
import ListDataBase from "@/components/base-de-datos/ListDataBase";

export default function ListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ListDataBase />
        </>
    );
}
