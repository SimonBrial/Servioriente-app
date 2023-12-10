"use client";
import { Divider, Flex, Title, Text } from "@mantine/core";
import { TitleLayoutProps } from "@/interface/interface";

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

  let colorSelected: string = "";
  function underScoreColor(colorEnum: string): string {
    if (colorEnum === "Espera") {
      colorSelected = "#E5DB00";
    } else if (colorEnum === "Generacion") {
      colorSelected = "#E56000";
    } else if (colorEnum === "Pagado") {
      colorSelected = "#12E500";
    } else if (colorEnum === "Entregado") {
      colorSelected = "#004EE5";
    } else {
      colorSelected = "";
    }
    return colorSelected;
  }

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
          {title}
        </Title>
      </Flex>
      <Divider
        size="md"
        styles={(theme) => ({
          root: {
            borderColor: !underScoreColor(title)
              ? color !== ""
                ? color
                : `${theme.colors.principalTheme[6]}`
              : underScoreColor(title),
            marginTop: "-0.3rem",
          },
        })}
      />
    </>
  );
}
