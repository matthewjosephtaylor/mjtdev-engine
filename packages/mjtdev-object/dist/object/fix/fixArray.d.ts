import { Fixed } from "./type/Fixed";
export declare const fixArray: <T>(arr: T[]) => FixedArray<T> | undefined;
export type FixedArray<T> = Fixed<T[]> | Fixed<Fixed<T[]>> | Fixed<Fixed<T>[]>;
//# sourceMappingURL=fixArray.d.ts.map