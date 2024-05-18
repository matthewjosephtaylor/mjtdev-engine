import { decode } from "@msgpack/msgpack";
export const msgPackToObject = (bytes) => {
    return decode(bytes);
};
//# sourceMappingURL=msgPackToObject.js.map