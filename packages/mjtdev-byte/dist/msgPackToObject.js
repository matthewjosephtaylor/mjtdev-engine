import { Packr } from "msgpackr";
export const msgPackToObject = (bytes) => {
    const packr = new Packr({ structuredClone: true });
    return packr.unpack(new Uint8Array(bytes));
};
//# sourceMappingURL=msgPackToObject.js.map