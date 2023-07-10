export const requestToPromise = (request) => {
    return new Promise((resolve, reject) => {
        request.onsuccess = (e) => {
            resolve(request.result);
        };
        request.onerror = (e) => {
            reject(e.target);
        };
    });
};
//# sourceMappingURL=requestToPromise.js.map