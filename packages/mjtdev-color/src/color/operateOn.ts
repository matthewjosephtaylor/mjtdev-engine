import { Colors } from "./Colors";
import { ColorSpec } from "./ColorTypes";

export const operateOn = (spec: ColorSpec): string => {
  if (!spec) {
    return undefined;
  }

  let color = typeof spec.color === "string" ? spec.color : "grey";
  Object.entries(spec).forEach(([operation, operand]) => {
    if (operation === "color") {
      return;
    }
    if (typeof operand === "number") {
      color = Colors[operation](color, operand);
    }
  });
  return color;
};
