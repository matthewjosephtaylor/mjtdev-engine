import type { TSchema } from "@sinclair/typebox";
export type TypeInfo<T = unknown> = {
    type: T;
    typeDeclaration: string;
    validate: (data: unknown) => boolean;
    schema: TypeInfoSchema;
};
export type TypeInfoSchema = TSchema;
export declare const TypeBoxes: {
    createTypeInfo: <T extends TSchema>(schemaBuilder: (type: import("@sinclair/typebox").JavaScriptTypeBuilder) => T) => TypeInfo<import("@sinclair/typebox").Static<T>>;
    schemaToTypeInfo: (schema: TSchema) => TypeInfo;
    schemaToAnyOfs: (schema: TSchema | undefined) => string[];
    typeTextToSchema: (typeText: string) => TSchema;
};
//# sourceMappingURL=TypeBoxes.d.ts.map