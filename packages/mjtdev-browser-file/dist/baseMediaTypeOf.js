export const baseMediaTypeOf = (mediaType) => {
    if (mediaType === undefined) {
        return undefined;
    }
    return mediaType.split("/")[0];
};
//# sourceMappingURL=baseMediaTypeOf.js.map