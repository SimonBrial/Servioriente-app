"use client";

import { Checkbox, Container, Flex, Title } from "@mantine/core";
import { BadgeClose } from "./BadgeClose";
import { BadgeFilter } from "./BadgeFilter";

interface AutoCompleteData {
    label: string | string[];
}

export default function AutoCompleteFilterContainer({
    label,
}: AutoCompleteData) {
    const pills = (label: string | string[]) => {
        if (typeof label === "string") {
            return <BadgeFilter tag={label} />;
        } else if (Array.isArray(label)) {
            return label.map((value: string, index: number) => {
                return <BadgeFilter tag={value} key={index} />;
            });
        }
    };

    return (
        <Container
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "0.5rem",
                borderBottom: "1px solid #696969",
            }}
        >
            <Flex
                justify="flex-start"
                align="center"
                direction="row"
                gap={"xs"}
            >
                <Checkbox />
                <Title order={5}>Buscar: </Title>
                {pills(label)}
            </Flex>
            <BadgeClose status={true} />
        </Container>
    );
}
