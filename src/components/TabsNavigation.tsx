"use client";

import Link from "next/link";
import { Tabs } from "@mantine/core";
import {
    BiMailSend,
    HiOutlineStar,
    HiOutlineTrash,
    HiOutlineDocumentText,
    HiOutlineSave,
} from "./IconsIndex";
import React from "react";

const mailSections = [
    { value: "Enviados", icon: <BiMailSend />, dir: "/mails" },
    { value: "Favoritos", icon: <HiOutlineStar />, dir: "/mails/favorities" },
    { value: "Borrados", icon: <HiOutlineTrash />, dir: "/mails/erased" },
    {
        value: "Plantillas",
        icon: <HiOutlineDocumentText />,
        dir: "/mails/formats",
    },
    { value: "Archivados", icon: <HiOutlineSave />, dir: "/mails/archived" },
];

interface TabsSectionesProps {
    value: string;
    icon: React.ReactNode;
    dir: string;
}
interface SectionsArray {
    sectionsArray: TabsSectionesProps[];
}

export default function TabsNavigation({ sectionsArray }: SectionsArray) {
    const sections = () => {
        return (
            <Tabs.List>
                {sectionsArray.map(
                    (section: TabsSectionesProps, index: number) => (
                        <Link href={section.dir} key={index}>
                            <Tabs.Tab
                                value={section.value}
                                leftSection={section.icon}
                            >
                                {section.value}
                            </Tabs.Tab>
                        </Link>
                    ),
                )}
            </Tabs.List>
        );
    };

    return (
        <Tabs
            color="gray"
            variant="outline"
            defaultValue="Enviados"
            styles={{
                root: {
                    color: "#696969",
                },
                tabSection: {
                    fontSize: "1.2rem",
                },
            }}
        >
            {sections()}
        </Tabs>
    );
}
