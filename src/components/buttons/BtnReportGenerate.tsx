"use client";

import { Button } from "@mantine/core";
import { HiOutlineDocumentText } from "../../icons";

export default function BtnReportGenerate(): JSX.Element {
  return (
    <Button
      variant="filled"
      leftSection={<HiOutlineDocumentText />}
      styles={(theme) => ({
        root: {
          backgroundColor: "#F8F8F8",
          color: "#696969",
          border: "1px solid #CDCDCD",
          height: "100%",
        },
        section: { fontSize: "1.2rem" },
      })}
    >
      Generar Reporte
    </Button>
  );
}
