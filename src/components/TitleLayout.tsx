"use client";
import { Divider, Flex, Title, Text } from "@mantine/core";
import { TitleLayoutProps } from "@/interface/interface";
import { underScoreColor } from "@/utils/underScoreColor";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

export function TitleLayout({
  onText,
  title,
  color,
  icon,
}: TitleLayoutProps): JSX.Element {
  /*
  { id: "Espera", color: "#E5DB00" },
    { id: "Generacion", color: "#E56000" },
    { id: "Pagado", color: "#12E500" },
    { id: "Entregado", color: "#004EE5" },
  */

  const colorSelected: string = underScoreColor(capitalizeFirstLetter(title));

  return (
    <>
      <Flex gap={5} justify={"center"} align={"center"}>
        <Text size="1.5rem">{icon}</Text>
        <Title
          order={2}
          style={{
            color: `${onText ? (color !== "" ? color : "#696969") : "#696969"}`,
            textAlign: "center",
          }}
        >
          {capitalizeFirstLetter(title)}
        </Title>
      </Flex>
      <Divider
        size="md"
        styles={(theme) => ({
          root: {
            borderColor: !colorSelected
              ? color !== ""
                ? color
                : `${theme.colors.principalTheme[6]}`
              : colorSelected,
            marginTop: "-0.3rem",
          },
        })}
      />
    </>
  );
}
