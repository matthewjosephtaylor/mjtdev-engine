import { Mapper } from "./type/Mapper";
import { Supplier } from "./type/Supplier";
/**
 * Map value to another value, treating undefined and null as 'empty'
 * @returns undefined if value is undefined OR null, otherwise maps value using mapper function
 */
export declare function mapValue<T, R>(value: T, mapper: R | Mapper<T, R>, elseMapper?: R | Supplier<R>): R;
//# sourceMappingURL=mapValue.d.ts.map