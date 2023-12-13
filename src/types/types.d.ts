type tagIcon =
  | "add-event"
  | "add-user"
  | "add-mail"
  | "format"
  | "folder"
  | "goal"
  | "add";

type processTitle = "espera" | "generacion" | "pagado" | "entregado";

type NotificationType = "Aviso" | "Error" | "Completado" | "Informacion";

type EditButtonStyles = "normal" | "special" | "unstyled";

export type { tagIcon, processTitle, NotificationType, EditButtonStyles };
