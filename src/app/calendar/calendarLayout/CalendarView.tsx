"use client";

import { Container } from "@mantine/core";
import { CalendarGridView } from "./CalendarGridView";
import { usePathname } from "next/navigation";

export const CalendarView = () => {
  const pathname = usePathname();
  return (
    <Container style={{ padding: "0", width: "100%" }}>
      {pathname === "/calendar" ? <CalendarGridView /> : <></>}
    </Container>
  );
};

// https://dev.to/elihood/building-a-simple-calendar-with-vanilla-js-1g70
