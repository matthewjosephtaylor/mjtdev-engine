export const keys = <O extends object, K extends keyof O>(obj: O): K[] => {
  return Object.keys(obj) as K[];
};
