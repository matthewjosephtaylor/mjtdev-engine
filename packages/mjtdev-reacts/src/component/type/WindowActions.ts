import React from "react";


export type WindowActions = {
  setOffsetX: React.Dispatch<React.SetStateAction<number>>;
  setOffsetY: React.Dispatch<React.SetStateAction<number>>;
  setMoveEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  // setZ: React.Dispatch<React.SetStateAction<number>>;
  setPointer: React.Dispatch<React.SetStateAction<"none" | "auto">>;
};
