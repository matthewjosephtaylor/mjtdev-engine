import { scaler } from "./scaler";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
export const scaler3 = (scale) => {
    const xScaler = scaler(xOf(scale));
    const yScaler = scaler(yOf(scale));
    const zScaler = scaler(zOf(scale));
    return (value) => {
        return [xScaler(xOf(value)), yScaler(yOf(value)), zScaler(zOf(value))];
    };
};
//# sourceMappingURL=scaler3.js.map