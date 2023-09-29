import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import { MantineProvider, ColorSchemeScript, Container } from "@mantine/core";
import { Sidebar } from "@/components/sidebar/Sidebar";
import styles from "./layout.module.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body>
                <MantineProvider>
                    <Container fluid size={"100%"} px={0} display={"flex"}>
                        <Sidebar />
                        <Container
                            size={"100%"}
                            p={"1rem"}
                            className={styles.containerLayout}
                        >
                            {children}
                        </Container>
                    </Container>
                </MantineProvider>
            </body>
        </html>
    );
}
