"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignMediaTypeToBlob = void 0;
const assignMediaTypeToBlob = (blob, mediaType) => {
    return blob.slice(0, blob.size, mediaType);
};
exports.assignMediaTypeToBlob = assignMediaTypeToBlob;
//# sourceMappingURL=assignMediaTypeToBlob.js.map