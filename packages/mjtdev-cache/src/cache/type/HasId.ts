
export type HasId = {
  id: string | number;
};

export const hasId = (maybe: unknown): maybe is HasId => {
  const straw = maybe as HasId;
  return (
    typeof straw === "object" &&
    (typeof straw.id === "number" || typeof straw.id === "string")
  );
};
