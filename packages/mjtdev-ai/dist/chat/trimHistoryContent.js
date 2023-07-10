export const trimHistoryContent = (content) => {
    return content
        .trim()
        .replace("\n", ".")
        .replace("\r", ".")
        .replace(/[^A-Za-z0-9\*\. \"\']*/gi, "")
        .replace(/\.*/, "");
};
//# sourceMappingURL=trimHistoryContent.js.map