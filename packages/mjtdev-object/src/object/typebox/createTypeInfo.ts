import { type TSchema, Type, type Static } from "@sinclair/typebox";
import { schemaToTypeInfo } from "./schemaToTypeInfo";
import type { TypeInfo } from "./TypeBoxes";

export const createTypeInfo = <T extends TSchema>(
  schemaBuilder: (type: typeof Type) => T
): TypeInfo<Static<T>> => {
  // Generate the schema using the provided callback
  const schema = schemaBuilder(Type);
  return schemaToTypeInfo(schema);
};
