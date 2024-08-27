import type { TSchema } from "@sinclair/typebox";
export type TypeInfo<T> = {
    type: T;
    typeDeclaration: string;
    validate: (data: unknown) => boolean;
    schema: TypeInfoSchema;
};
export type TypeInfoSchema = TSchema;
export declare const TypeBoxes: {
    createTypeInfo: <T extends TSchema>(schemaBuilder: (type: import("@sinclair/typebox").JavaScriptTypeBuilder) => T) => TypeInfo<import("@sinclair/typebox").Static<T>>;
    schemaToTypeInfo: (schema: TSchema) => {
        type: unknown;
        typeDeclaration: string;
        validate: (data: unknown) => boolean;
        schema: TSchema;
    };
    schemaToAnyOfs: (schema: TSchema | undefined) => string[];
    typeTextToSchema: (typeText: string) => TSchema;
};
//# sourceMappingURL=TypeBoxes.d.ts.map