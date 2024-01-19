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

type CardContainerHeader = "whatsapp" | "instagram" | "facebook";

type NotificationsTypes = "Success" | "Warning" | "Error" | "Info";

export type {
  NotificationsTypes,
  CardContainerHeader,
  NotificationType,
  EditButtonStyles,
  processTitle,
  tagIcon,
};
