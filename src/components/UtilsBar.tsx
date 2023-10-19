import React from "react";
import { Flex } from "@mantine/core";
import { CountIndicator } from "./base-de-datos/CountIndicator";
import { HiOutlineUserCircle } from "./IconsIndex";
import { BtnFilter } from "./buttons/BtnFilter";
import { AutoCompleteInput } from "./AutoCompleteInput";
import BtnAdd from "./buttons/BtnAdd";
import { GeneralFilterLayout } from "./GeneralFilterLayout";
import BtnReportGenerate from "./buttons/BtnReportGenerate";
import btnStyles from "./styles/BtnStyles.module.css"

export function UtilsBar() {
    return (
        <Flex
            gap={"sm"}
            align={"center"}
            style={{ height: "2.5rem", width: "100%" }}
        >
            <CountIndicator
                count={24}
                iconSection={<HiOutlineUserCircle />}
                description="Total de usuario"
            />
            <AutoCompleteInput />
            <BtnFilter>
                <GeneralFilterLayout />
            </BtnFilter>
            <BtnReportGenerate />

            <BtnAdd iconTag="add-user" label="Nuevo Usuario" />
        </Flex>
    );
}
