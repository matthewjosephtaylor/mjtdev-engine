
export const isFunction = (maybe: unknown): maybe is Function => {
  const straw = maybe as Function;
  return typeof straw === "function";
};
