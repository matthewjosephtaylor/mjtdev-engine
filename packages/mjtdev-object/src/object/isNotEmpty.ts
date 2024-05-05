import { isEmpty } from "./isEmpty";

export const isNotEmpty = (value?: string) => {
  return !isEmpty(value);
};
