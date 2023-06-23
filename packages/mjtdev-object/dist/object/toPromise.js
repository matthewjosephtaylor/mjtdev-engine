export const toPromise = (producer) => {
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
//# sourceMappingURL=toPromise.js.map