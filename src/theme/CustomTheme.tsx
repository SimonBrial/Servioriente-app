"use client"
import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
    colors: {
        principalTheme: [
            "#e7f2ff",
            "#cee0ff",
            "#9cbdff",
            "#6599fe",
            "#3b7afd",
            "#2167fd",
            "#115dfe", // This is the principal theme color -> 6
            "#004de3",
            "#0045cb",
            "#003ab3",
        ],
        extraTheme: [
            "#F06418",
            "#FFA903",
            "#D9D02F",
            "#2BDD66",
            "#4F23C0",
            "#6B31B2",
            "#C02ADF",
            "#F018E8",
            "#F0185C",
            "#C91A25",
        ],
    },

    shadows: {
        md: "1px 1px 3px rgba(0, 0, 0, .25)",
        xl: "5px 5px 3px rgba(0, 0, 0, .25)",
    },

    /* headings: {
        fontFamily: "Roboto, sans-serif",
        sizes: {
            h1: { fontSize: rem(36) },
        },
    }, */
});
