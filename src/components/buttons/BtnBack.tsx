"use client";

import { Button } from "@mantine/core";
import { IoArrowBackOutline } from "../IconsIndex";

export default function BtnBack({ close }: { close: () => void }) {
    return (
        <Button
            onClick={close}
            variant="filled"
            leftSection={<IoArrowBackOutline />}
            fullWidth
            styles={(theme) => ({
                root: { backgroundColor: `${theme.colors.principalTheme[6]}` },
                section: { fontSize: "1.2rem" },
            })}
        >
            Volver
        </Button>
    );
}
