import type { TSchema } from "@sinclair/typebox";
export declare const schemaToTypeInfo: (schema: TSchema) => {
    type: unknown;
    typeDeclaration: string;
    validate: (data: unknown) => boolean;
    schema: TSchema;
};
//# sourceMappingURL=schemaToTypeInfo.d.ts.map