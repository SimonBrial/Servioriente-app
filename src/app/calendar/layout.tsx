import { Container, Flex, Stack } from "@mantine/core";
import React from "react";
import { CountIndicator } from "../data-base/CountIndicator";
import { HiOutlineCalendar } from "@/icons";
import { AutoCompleteInput } from "@/components/inputs/AutoCompleteInput";
import { BtnFilter } from "@/components/buttons/BtnFilter";
import BtnReportGenerate from "@/components/buttons/BtnReportGenerate";
import { MonthNavegationBar } from "./MonthNavegationBar";
import { ViewCalendarSelection } from "./ViewCalendarSelection";

export default function layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Container p={0}>
      <Stack p={0}>
        <Flex
          gap={6}
          align={"center"}
          style={{ height: "2.5rem", width: "100%" }}
        >
          <CountIndicator
            count={8}
            description="Total de eventos para el mes"
            iconSection={<HiOutlineCalendar />}
          />
          <AutoCompleteInput />
          <BtnFilter>Prueba</BtnFilter>
          <BtnReportGenerate />
          <ViewCalendarSelection />
        </Flex>
        <MonthNavegationBar />
        {children}
      </Stack>
    </Container>
  );
}
