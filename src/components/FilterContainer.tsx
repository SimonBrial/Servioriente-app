import { Badge, Container, Flex } from "@mantine/core";
import { IoClose } from "react-icons/io5";
import { HiOutlineTrash } from "react-icons/hi";
import { BadgeClose } from "./BadgeClose";
import { BadgeFilter } from "./BadgeFilter";

export function FilterContainer() {
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
                align="flex-start"
                direction="row"
                gap={"xs"}
            >
                <p>Filter: </p>
                <BadgeFilter tag="Nombre" />
                <BadgeFilter tag="Apellido" />
            </Flex>
            <BadgeClose status={true} />
        </Container>
    );
}
