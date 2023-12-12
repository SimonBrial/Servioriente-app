export function underScoreColor(colorEnum: string): string {
  if (colorEnum === "Espera") {
    return "#E5DB00";
  } else if (colorEnum === "Generacion") {
    return "#E56000";
  } else if (colorEnum === "Pagado") {
    return "#12E500";
  } else if (colorEnum === "Entregado") {
    return "#004EE5";
  } else {
    return "red";
  }
}
