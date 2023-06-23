"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPromise = void 0;
const toPromise = (producer) => {
    const callback = () => { };
    return new Promise((resolve, reject) => {
        try {
            resolve(producer(callback));
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map