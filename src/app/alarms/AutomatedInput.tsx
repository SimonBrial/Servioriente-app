/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { Checkbox, Flex, Title, useMantineColorScheme } from "@mantine/core";
import { PiRobot } from "@/icons";
import checkboxClasses from "../../styles/sidebarSectionSelection.module.css"

export default function AutomatedInput({
  automatedStatus,
}: {
  automatedStatus: boolean;
}): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    setChecked(automatedStatus);
  }, []);

  return (
    <Flex align={"center"} gap={5} justify={"space-between"}>
      <Title order={4}>Automatizado:</Title>
      <Flex align={"center"} gap={5}>
        <div>
          {checked ? (
            <span
              style={{
                color: "#696969",
                marginBottom: "5px",
              }}
            >
              <PiRobot
                style={{
                  fontSize: "1.3rem",
                  marginTop: "0px",
                  color: colorScheme === "light" ? " #cdcdcd" : "#EFF3F5",
                }}
              />
            </span>
          ) : (
            <></>
          )}
        </div>
        <Checkbox
          color={colorScheme === "light" ? "#115dfe" : "#52A5E0"}
          checked={checked}
          onChange={(event) => {
            setChecked(event.currentTarget.checked);
          }}
          style={{ marginTop: "-5px" }}
          classNames={{
            input:
              colorScheme === "light"
                ? checkboxClasses.checkbox
                : checkboxClasses.checkbox_dark,
          }}
        />
      </Flex>
    </Flex>
  );
}
