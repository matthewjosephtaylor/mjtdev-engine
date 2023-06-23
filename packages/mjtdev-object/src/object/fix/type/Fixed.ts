import { Brand } from "../../brand/type/Brand";

export type FixedBrand<T = unknown> = Brand<T, "Fixed">;

export type Fixed<T = unknown> = Readonly<FixedBrand<T>>;
// | number | string | boolean;

export const isFixed = (maybe: unknown): maybe is Fixed => {
  const straw = maybe as Fixed;
  return typeof straw === "object" && Object.isFrozen(straw);
};
