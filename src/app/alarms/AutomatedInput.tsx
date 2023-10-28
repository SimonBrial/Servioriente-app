/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { Checkbox, Flex, Title } from "@mantine/core";
import { PiRobot } from "@/components/IconsIndex";

export default function AutomatedInput({
  automatedStatus,
}: {
  automatedStatus: boolean;
}): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

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
              <PiRobot style={{ fontSize: "1.3rem", marginTop: "0px" }} />
            </span>
          ) : (
            <></>
          )}
        </div>
        <Checkbox
          checked={checked}
          onChange={(event) => {
            setChecked(event.currentTarget.checked);
          }}
          style={{ marginTop: "-5px" }}
        />
      </Flex>
    </Flex>
  );
}
