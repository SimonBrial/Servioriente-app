import React from "react";
import { Flex } from "@mantine/core";
import { CountIndicator } from "./base-de-datos/CountIndicator";
import { HiOutlineUserCircle } from "react-icons/hi2";
import BtnFilter from "./buttons/BtnFilter";
import { AutoCompleteInput } from "./AutoCompleteInput";
import BtnAdd from "./buttons/BtnAdd";

export function UtilsBar() {
    return (
        <Flex
            gap={"sm"}
            align={"center"}
            style={{ height: "2.5rem", width: "100%" }}
        >
            <CountIndicator
                count={8}
                iconSection={<HiOutlineUserCircle />}
                description="Total de usuario"
            />
            <AutoCompleteInput />
            <BtnFilter />
            <BtnAdd iconTag="add-user" label="Nuevo Usuario" />
        </Flex>
    );
}
