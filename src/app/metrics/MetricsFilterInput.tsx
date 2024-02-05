"use client";

import { GeneralDivider } from "@/components/GeneralDivider";
import BtnAdd from "@/components/buttons/BtnAdd";
import { HiOutlineTrash } from "@/icons";
import {
  Autocomplete,
  Container,
  Center,
  Badge,
  Stack,
  Flex,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import { GoalsLayout } from "./GoalsLayout";

export const MetricsFilterInput = ({
  btnDisable,
}: {
  btnDisable: boolean;
}): JSX.Element => {
  const [value, setValue] = useState("");
  const adminArr: string[] = ["Mario Hurtado", "Simon Briceño"];
  return (
    <Container p={0} style={{ width: "100%" }}>
      <Stack gap={4} mt={6}>
        <Flex align={"center"} gap={8} style={{ height: "2.2rem" }}>
          <Flex align={"center"} gap={8} style={{ width: "100%" }}>
            <Text>Filtros:</Text>
            <Autocomplete
              data={adminArr}
              value={value}
              onChange={setValue}
              variant="unstyled"
              placeholder="Indicar un nombre de administrador"
              style={{ width: "100%" }}
            />
            <Badge size="md" style={{ cursor: "pointer" }}>
              {" "}
              {/* Hay que agregarle los estilos a este badge que esta funcionando como boton */}
              <Center style={{ fontSize: "1rem" }}>
                <HiOutlineTrash />
              </Center>
            </Badge>
          </Flex>
          {btnDisable ? (
            <BtnAdd iconTag="add-event" label="Nueva Meta">
              <GoalsLayout />
            </BtnAdd>
          ) : (
            <></>
          )}
        </Flex>
        <GeneralDivider />
      </Stack>
    </Container>
  );
};
