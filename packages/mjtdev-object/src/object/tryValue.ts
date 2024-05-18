import { isErrorType } from "./type/isErrorType";

export const tryValue = <T>(value: T | Error, message?: string): T => {
  if (isErrorType(value)) {
    throw new Error(message, { cause: value });
  }
  return value;
};
