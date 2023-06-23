export const chain = <T>(initial: T, mappers: ((v: T) => T)[]) => {
  return mappers.reduce((acc, mapper) => {
    return mapper(acc);
  }, initial);
};
