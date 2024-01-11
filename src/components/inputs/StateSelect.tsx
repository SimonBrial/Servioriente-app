import { Flex, Select, Title } from "@mantine/core";
import React, { useState } from "react";

export const StateSelect = ({ inputSize }: { inputSize: string }) => {
  const [value, setValue] = useState<string | null>("");
  const estadosArray = [
    "Amazonas",
    "Anzoátegui",
    "Apure",
    "Aragua",
    "Barinas",
    "Bolívar",
    "Carabobo",
    "Cojedes",
    "Delta Amacuro",
    "Falcón",
    "Guárico",
    "Lara",
    "Mérida",
    "Miranda",
    "Monagas",
    "Nueva Esparta",
    "Portuguesa",
    "Sucre",
    "Táchira",
    "Trujillo",
    "Vargas",
    "Yaracuy",
    "Zulia",
    "Dependencias Federales",
    "Distrito Capital",
  ];
  return (
    <Flex align={"center"} justify={"space-between"}>
      <Title order={4}>Estado</Title>
      <Select
        w={inputSize}
        placeholder="Seleccione un Estado de Venezuela"
        data={estadosArray}
        onChange={setValue}
        value={value}
      />
    </Flex>
  );
};
