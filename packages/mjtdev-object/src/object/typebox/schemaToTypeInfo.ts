/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Static, TSchema } from "@sinclair/typebox";
import { Value } from "@sinclair/typebox/value";
import { generateTypeScriptType } from "./generateTypeScriptType";
import type { TypeInfo } from "./TypeBoxes";

export const schemaToTypeInfo = (schema: TSchema): TypeInfo => {
  // Retrieve the type name from the schema metadata
  const typeName = schema.$id ?? "UnnamedType";

  const resolvedType = schema as Static<typeof schema>;

  // Start generating the type declaration string
  let typeDeclaration = `type ${typeName} = { \n`;

  // Iterate over the schema properties
  for (const [key, value] of Object.entries(schema.properties!)) {
    const description = (value as any).description
      ? ` // ${(value as any).description}`
      : "";
    typeDeclaration += `  ${key}: ${generateTypeScriptType(
      value as TSchema
    )};${description}\n`;
  }

  typeDeclaration += "};\n";

  // Create the validation function using Value.Check
  const validate = (data: unknown): boolean => {
    return Value.Check(schema, data);
  };

  return { type: resolvedType, typeDeclaration, validate, schema };
};
