/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TSchema } from "@sinclair/typebox";

export const generateTypeScriptType = (schema: TSchema): string => {
  if (schema.anyOf) {
    return schema.anyOf.map(generateTypeScriptType).join(" | ");
  }

  switch (schema.type) {
    case "string":
      if ((schema as any).const !== undefined) {
        return `'${(schema as any).const}'`;
      }
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "array":
      return `${generateTypeScriptType(schema.items as TSchema)}[]`;
    case "object":
      // Check for `additionalProperties` for index signature
      if ((schema as any).additionalProperties) {
        const valueType = generateTypeScriptType(
          (schema as any).additionalProperties
        );
        return `{ [key: string]: ${valueType} }`;
      }

      // Ensure that `properties` exists and is an object
      if (schema.properties && typeof schema.properties === "object") {
        return (
          "{ " +
          Object.entries(schema.properties)
            .map(([key, value]) => {
              const description = (value as any).description
                ? ` // ${(value as any).description}\n`
                : "";
              return `${key}${
                schema.required && !schema.required.includes(key) ? "?" : ""
              }: ${generateTypeScriptType(value as TSchema)};${description}`;
            })
            // .join("; ") +
            .join(" ") +
          " }"
        );
      }
      return "Record<string, unknown>"; // Fallback for objects without defined properties
    case "null":
      return "null";
    default:
      return "unknown";
  }
};

// Example usage with the updated schema
// const schema: TSchema = {
//   type: "object",
//   properties: {
//     id: { type: "string", description: "Unique identifier for the character" },
//     name: { type: "string", description: "Character's name" },
//     age: { type: "number", description: "Character's age (optional)" },
//     gender: {
//       anyOf: [
//         { const: "male", type: "string" },
//         { const: "female", type: "string" },
//         { const: "other", type: "string" }
//       ],
//       description: "Character's gender"
//     },
//     description: { type: "string", description: "Brief description of the character" },
//     imageUrl: { type: "string", description: "URL to the character's image" },
//     relationships: {
//       type: "object",
//       additionalProperties: { type: "string" },
//       description: "Character's relationships with other characters"
//     },
//     personalityTraits: {
//       type: "array",
//       items: { type: "string" },
//       description: "Array of personality traits (optional)"
//     },
//     backgroundColor: {
//       type: "string",
//       description: "Background color for the character's dialogue (optional)"
//     }
//   },
//   required: ["id", "name", "gender", "description", "imageUrl"],
//   $id: "VisualNovelCharacter"
// };

// console.log(generateTypeScriptType(schema));
