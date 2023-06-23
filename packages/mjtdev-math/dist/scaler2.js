import { scaler } from "./scaler";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
export const scaler2 = (scale) => {
    const xScaler = scaler(xOf(scale));
    const yScaler = scaler(yOf(scale));
    return (value) => {
        return [xScaler(xOf(value)), yScaler(yOf(value))];
    };
};
//# sourceMappingURL=scaler2.js.map