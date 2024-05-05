import { isEmpty } from "./isEmpty";

export const isNotEmpty = (value?: string | boolean | number | undefined) => {
  return !isEmpty(value);
};
