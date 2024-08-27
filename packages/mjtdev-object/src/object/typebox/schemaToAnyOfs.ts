import type { TSchema } from "@sinclair/typebox";
import { generateTypeScriptType } from "./generateTypeScriptType";


export const schemaToAnyOfs = (schema: TSchema | undefined): string[] => {
  if (!schema) {
    return [];
  }
  if (schema.anyOf) {
    return (schema.anyOf.map(generateTypeScriptType) as string[]).map((v) => v.replace(/^'/, "").replace(/'$/, "")
    );
  }
  return [];
};
