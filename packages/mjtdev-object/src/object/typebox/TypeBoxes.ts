/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TSchema } from "@sinclair/typebox";
import { createTypeInfo } from "./createTypeInfo";
import { typeTextToSchema } from "./typeTextToSchema";
import { schemaToAnyOfs } from "./schemaToAnyOfs";
import { schemaToTypeInfo } from "./schemaToTypeInfo";

export type TypeInfo<T = unknown> = {
  type: T;
  typeDeclaration: string;
  validate: (data: unknown) => boolean;
  schema: TypeInfoSchema;
};

export type TypeInfoSchema = TSchema;

export const TypeBoxes = {
  createTypeInfo,
  schemaToTypeInfo,
  schemaToAnyOfs,
  typeTextToSchema,
};
