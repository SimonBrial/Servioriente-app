"use client";

import Link from "next/link";
import { Tabs } from "@mantine/core";
import React from "react";
import { SectionsArray, TabsSectionesProps } from "@/interface/interface";

export default function TabsNavigation({
  sectionsArray,
  orientation,
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
      orientation={orientation ? "horizontal" : "vertical"}
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
