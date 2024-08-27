import { Type } from "@sinclair/typebox";
import { schemaToTypeInfo } from "./schemaToTypeInfo";
export const createTypeInfo = (schemaBuilder) => {
    // Generate the schema using the provided callback
    const schema = schemaBuilder(Type);
    return schemaToTypeInfo(schema);
};
//# sourceMappingURL=createTypeInfo.js.map