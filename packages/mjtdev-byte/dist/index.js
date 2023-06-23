// Fix Fucked up node Blob/crypto support
// const ENV_IS_NODE =
//   typeof process === "object" && typeof require === "function";
// if (ENV_IS_NODE) {
//   // eslint-disable-next-line
//   const buffer = require("buffer");
//   globalThis.Blob = buffer.Blob;
//   // eslint-disable-next-line
//   const c = require("crypto");
//   globalThis.crypto = c.webcrypto;
// }
export * from "./Bytes";
export * from "./type/ByteLike";
export * from "./type/ImmediateByteLike";
//# sourceMappingURL=index.js.map