export type ActionMap = Record<
  string,
  () => void | unknown | Promise<void | unknown>
>;
