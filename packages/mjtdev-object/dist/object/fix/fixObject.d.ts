import { Fixed } from "./type/Fixed";
export declare const fixObject: <T extends object>(obj: T) => (Fixed<T> & { [k in string]: Fixed; }) | undefined;
//# sourceMappingURL=fixObject.d.ts.map