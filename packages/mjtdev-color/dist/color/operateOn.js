import { Colors } from "./Colors";
export const operateOn = (spec) => {
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
//# sourceMappingURL=operateOn.js.map