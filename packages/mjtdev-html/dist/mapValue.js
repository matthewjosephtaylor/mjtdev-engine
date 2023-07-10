import { isValue } from "./isValue";
/**
 * Map value to another value, treating undefined and null as 'empty'
 * @returns undefined if value is undefined OR null, otherwise maps value using mapper function
 */
export function mapValue(value, mapper, elseMapper) {
    if (isValue(value)) {
        if (typeof mapper === "function") {
            // eslint-disable-next-line @typescript-eslint/ban-types
            return mapper(value);
        }
        return mapper;
    }
    else {
        if (typeof elseMapper === "function") {
            // eslint-disable-next-line @typescript-eslint/ban-types
            return elseMapper();
        }
        return elseMapper;
    }
}
//# sourceMappingURL=mapValue.js.map