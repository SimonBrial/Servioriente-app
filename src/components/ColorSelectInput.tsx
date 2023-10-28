import { Flex, ColorInput, Title } from "@mantine/core";

export default function ColorSelectInput(): JSX.Element {
  return (
    <Flex justify={"space-between"} align={"center"}>
      <Title order={4}>Seleccion un color</Title>
      <ColorInput
        placeholder="Selecciona un color"
        styles={{
          root: { width: "200px" },
          eyeDropperButton: { display: "none" },
        }}
        format="rgba"
        swatches={[
          "rgb(37, 38, 43)",
          "rgb(134, 142, 150)",
          "rgb(250, 82, 82)",
          "rgb(230, 73, 128)",
          "rgb(190, 75, 219)",
          "rgb(121, 80, 242)",
          "rgb(76, 110, 245)",
          "rgb(34, 139, 230)",
          "rgb(21, 170, 191)",
          "rgb(18, 184, 134)",
          "rgb(64, 192, 87)",
          "rgb(130, 201, 30)",
          "rgb(250, 176, 5)",
          "rgb(253, 126, 20)",
        ]}
      />
    </Flex>
  );
}
