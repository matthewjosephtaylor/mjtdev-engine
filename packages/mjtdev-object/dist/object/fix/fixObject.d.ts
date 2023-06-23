import { Fixed } from "./type/Fixed";
export declare const fixObject: <T extends object>(obj: T) => Readonly<import("./type/Fixed").FixedBrand<T>> & {
    [x: string]: Readonly<{
        __brand: "Fixed";
    }>;
};
//# sourceMappingURL=fixObject.d.ts.map