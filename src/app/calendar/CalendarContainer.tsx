import InsideContainer from "@/components/container/InsideContainer";
import { Stack } from "@mantine/core";
import React from "react";

export const CalendarContainer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <InsideContainer offset={182}>
      <Stack gap={4} /* p={"0.8rem"} */>
        {children}
      </Stack>
    </InsideContainer>
  );
};
