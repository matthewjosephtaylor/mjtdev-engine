
export const values = <O extends object, V = O[keyof O]>(obj: O): V[] => {
  return Object.values(obj);
};
