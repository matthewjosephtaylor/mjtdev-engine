import { assert } from "./assert";
import { isValue } from "./isValue";
import type { AssertionMessage } from "./type/AssertionMessage";

export function assertValue<T>(
  maybe: T,
  message: AssertionMessage = "Assertion failed: Required value not defined"
): NonNullable<T> {
  assert(isValue(maybe), message);
  return maybe as NonNullable<T>;
}
