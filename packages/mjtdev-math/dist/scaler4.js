import { scaler } from "./scaler";
import { wOf } from "./wOf";
import { xOf } from "./xOf";
import { yOf } from "./yOf";
import { zOf } from "./zOf";
export const scaler4 = (scale) => {
    const xScaler = scaler(xOf(scale));
    const yScaler = scaler(yOf(scale));
    const zScaler = scaler(zOf(scale));
    const wScaler = scaler(wOf(scale));
    return (value) => {
        return [
            xScaler(xOf(value)),
            yScaler(yOf(value)),
            zScaler(zOf(value)),
            wScaler(wOf(value)),
        ];
    };
};
//# sourceMappingURL=scaler4.js.map