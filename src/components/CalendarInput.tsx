"use client";

import { useState } from "react";
import { DatePicker } from "@mantine/dates";

export function CalendarInput() {
    const [value, setValue] = useState<[Date | null, Date | null]>([
        null,
        null,
    ]);
    console.log(value);
    return (
        <DatePicker
            allowSingleDateInRange
            type="range"
            value={value}
            onChange={setValue}
            style={{ border: "1px solid red" }}
            styles={(theme) => ({
                calendarHeader: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid red",
                    width: "15rem",
                    margin: "0 auto",
                },
                calendarHeaderControl: {
                    border: `1px solid red`,
                    height: "2rem",
                    width: "2rem",
                },
                calendarHeaderControlIcon: {
                    color: "red",
                    fontSize: "20px",
                    transform: "rotate(-90deg)",
                    margin: "0 auto",
                },
                day: {
                    borderRadius: 0,
                    height: 70,
                },
                weekdayCell: {
                    height: 70,
                },
            })}
        />
    );
}
