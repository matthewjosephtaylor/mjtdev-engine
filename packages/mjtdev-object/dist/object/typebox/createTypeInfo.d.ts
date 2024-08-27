import { type TSchema, Type, type Static } from "@sinclair/typebox";
import type { TypeInfo } from "./TypeBoxes";
export declare const createTypeInfo: <T extends TSchema>(schemaBuilder: (type: typeof Type) => T) => TypeInfo<Static<T>>;
//# sourceMappingURL=createTypeInfo.d.ts.map