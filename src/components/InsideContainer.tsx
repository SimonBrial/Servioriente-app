"use client";

import { Container } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function InsideContainer({
    children,
}: {
    children: React.ReactNode;
}) {
    const { height } = useViewportSize();

    return (
        <Container
            px={0}
            h={height - 155}
            styles={{
                root: {
                    width: "100%",
                    maxHeight: "100%",
                },
            }}
        >
            {children}
        </Container>
    );
}
