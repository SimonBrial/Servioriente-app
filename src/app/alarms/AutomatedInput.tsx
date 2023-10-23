"use client";
import { useState, useEffect } from "react";
import { Center, Checkbox, Flex, Text } from "@mantine/core";
import { PiRobot } from "@/components/IconsIndex";

export default function AutomatedInput({
    automatedStatus,
}: {
    automatedStatus: boolean;
}) {
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        setChecked(automatedStatus);
    }, []);

    return (
        <Flex align={"center"} gap={5}>
            <div>
                {checked ? (
                    <span
                        style={{
                            fontSize: "1.05rem",
                            color: "#696969",
                            marginBottom: "5px",
                        }}
                    >
                        <PiRobot
                            style={{ fontSize: "1.5rem", marginTop: "0px" }}
                        />
                    </span>
                ) : (
                    <></>
                )}
            </div>
            <Checkbox
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
                style={{ marginTop: "-5px" }}
            />
        </Flex>
    );
}
