export const listFiles = async (dir) => {
    const result = [];
    for await (const entry of dir.entries()) {
        result.push(entry);
    }
    return result;
};
//# sourceMappingURL=listFiles.js.map