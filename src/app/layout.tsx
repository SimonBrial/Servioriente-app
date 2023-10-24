import "./globals.css";
import type { Metadata } from "next";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript, Container } from "@mantine/core";
import { theme } from "../theme/CustomTheme";

import styles from "./layout.module.css";
import { Sidebar } from "@/components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Container fluid size={"100%"} px={"0"} display={"flex"}>
            <Sidebar />
            <Container mx={"1rem"} className={styles.containerLayout}>
              {children}
            </Container>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
