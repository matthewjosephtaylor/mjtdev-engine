import { scaler } from "./scaler";
import { xOf } from "./xOf";
export const scaler1 = (scale) => {
    const xScaler = scaler(xOf(scale));
    return (value) => {
        return [xScaler(xOf(value))];
    };
};
//# sourceMappingURL=scaler1.js.map