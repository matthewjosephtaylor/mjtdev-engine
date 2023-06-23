
export const findInfluenceValue = (
  influences: [string, number][],
  name: string
): number => {
  name = name.toLowerCase().trim();
  const found = influences.find(([key, value]) =>
    name.includes(key.toLowerCase().trim())
  );

  return found?.[1];
};
