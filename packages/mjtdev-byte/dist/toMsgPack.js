import { Packr } from "msgpackr";
export const toMsgPack = (obj) => {
    const packr = new Packr({ structuredClone: true });
    return new Uint8Array(packr.encode(obj));
};
//# sourceMappingURL=toMsgPack.js.map