/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BoardSections, Status } from "../types";
import { COLUMNS_SECTIONS } from "../constantes";
import { getCardsByStatus } from "./tasks";
import { CardProcessProps } from "@/interface/interface";

export const initializeColumns = (tasks: CardProcessProps[]) => {
  const boardSections: BoardSections = {};

  Object.keys(COLUMNS_SECTIONS).forEach((columnSectionKey) => {
    boardSections[columnSectionKey] = getCardsByStatus(
      tasks,
      columnSectionKey as Status,
    );
  });

  return boardSections;
};

export const findBoardSectionContainer = (
  boardSections: BoardSections,
  id: string,
) => {
  if (id in boardSections) {
    return id;
  }

  const container = Object.keys(boardSections).find((key) =>
    boardSections[key].find((item) => item.id === id),
  );
  return container;
};
