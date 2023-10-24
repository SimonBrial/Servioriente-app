"use client";

import Link from "next/link";
import { Tabs } from "@mantine/core";
import React from "react";

interface TabsSectionesProps {
  value: string;
  icon: React.ReactNode;
  dir: string;
}
interface SectionsArray {
  sectionsArray: TabsSectionesProps[];
}

export default function TabsNavigation ({
  sectionsArray,
}: SectionsArray): JSX.Element {
  const sections = (): JSX.Element => {
    return (
      <Tabs.List>
        {sectionsArray.map((section: TabsSectionesProps, index: number) => (
          <Link href={section.dir} key={index}>
            <Tabs.Tab value={section.value} leftSection={section.icon}>
              {section.value}
            </Tabs.Tab>
          </Link>
        ))}
      </Tabs.List>
    );
  };

  return (
    <Tabs
      color="gray"
      variant="outline"
      defaultValue="Recibidos"
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
