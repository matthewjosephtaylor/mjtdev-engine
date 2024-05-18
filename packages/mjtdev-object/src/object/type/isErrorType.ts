
export const isErrorType = (value: unknown): value is Error => {
  return value instanceof Error;
};
