
export const mapValue = <T, R>(value: T, mapper: (value: T) => R) => {
  return mapper(value);
};
