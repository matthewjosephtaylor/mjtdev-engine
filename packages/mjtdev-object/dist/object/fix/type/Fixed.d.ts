import { Brand } from "../../brand/type/Brand";
export type FixedBrand<T = unknown> = Brand<T, "Fixed">;
export type Fixed<T = unknown> = Readonly<FixedBrand<T>>;
export declare const isFixed: (maybe: unknown) => maybe is Fixed;
//# sourceMappingURL=Fixed.d.ts.map