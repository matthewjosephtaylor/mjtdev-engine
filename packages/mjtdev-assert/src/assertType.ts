import { toMessage } from "./toMessage";
import type { AssertionMessage } from "./type/AssertionMessage";

export function assertType<T>(
  value: unknown,
  typeGuard: (maybe: unknown) => maybe is T,
  message: AssertionMessage = "Assertion failed: Required value is not of correct type"
): T {
  if (!typeGuard(value)) {
    throw new Error(toMessage(message));
  }
  return value as T;
}
