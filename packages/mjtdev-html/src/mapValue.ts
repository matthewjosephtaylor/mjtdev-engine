import { Mapper } from "./type/Mapper";
import { Supplier } from "./type/Supplier";
import { isValue } from "./isValue";

/**
 * Map value to another value, treating undefined and null as 'empty'
 * @returns undefined if value is undefined OR null, otherwise maps value using mapper function
 */

export function mapValue<T, R>(
  value: T,
  mapper: R | Mapper<T, R>,
  elseMapper?: R | Supplier<R>
): R {
  if (isValue(value)) {
    if (typeof mapper === "function") {
      // eslint-disable-next-line @typescript-eslint/ban-types
      return (mapper as Function)(value);
    }
    return mapper;
  } else {
    if (typeof elseMapper === "function") {
      // eslint-disable-next-line @typescript-eslint/ban-types
      return (elseMapper as Function)();
    }
    return elseMapper;
  }
}
