export type ListLike =
  | ArrayLike<unknown>
  | ArrayBufferLike
  | ArrayBufferView
  | { length: number, [index: number]: unknown };
