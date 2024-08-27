import { Value } from "@sinclair/typebox/value";
import { generateTypeScriptType } from "./generateTypeScriptType";
export const schemaToTypeInfo = (schema) => {
    // Retrieve the type name from the schema metadata
    const typeName = schema.$id ?? "UnnamedType";
    const resolvedType = schema;
    // Start generating the type declaration string
    let typeDeclaration = `type ${typeName} = { \n`;
    // Iterate over the schema properties
    for (const [key, value] of Object.entries(schema.properties)) {
        const description = value.description
            ? ` // ${value.description}`
            : "";
        typeDeclaration += `  ${key}: ${generateTypeScriptType(value)};${description}\n`;
    }
    typeDeclaration += "};\n";
    // Create the validation function using Value.Check
    const validate = (data) => {
        return Value.Check(schema, data);
    };
    return { type: resolvedType, typeDeclaration, validate, schema };
};
//# sourceMappingURL=schemaToTypeInfo.js.map