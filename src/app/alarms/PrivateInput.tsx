"use client";
import { useState } from "react";
import { Checkbox, Flex, Text } from "@mantine/core";
import {
    HiOutlineLockClosed,
    HiOutlineLockOpen,
} from "@/components/IconsIndex";

export default function PrivateInput() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <Flex align={"center"} gap={5}>
            <Text size="1.05rem" styles={{ root: { color: "#CDCDCD" } }}>
                {checked ? <>Simon Briceño</> : <></>}
            </Text>
            {checked ? (
                <span style={{ fontSize: "1.3rem", color: "#696969" }}>
                    <HiOutlineLockClosed />
                </span>
            ) : (
                <span style={{ fontSize: "1.3rem", color: "#696969" }}>
                    <HiOutlineLockOpen />
                </span>
            )}
            <Checkbox
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
            />
        </Flex>
    );
}
