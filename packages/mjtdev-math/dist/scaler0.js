import { scaler } from "./scaler";
import { xOf } from "./xOf";
export const scaler0 = (scale) => {
    const sf = scaler(xOf(scale));
    return (value) => {
        return sf(xOf(value));
    };
};
//# sourceMappingURL=scaler0.js.map