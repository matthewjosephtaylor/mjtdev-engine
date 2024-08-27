export const extractJsonText = (markdown) => {
    const flexibleJsonRegex = /```(?:json)?([\s\S]*?)```|```([\s\S]*?)(?:```)?|([\s\S]+)/;
    const match = flexibleJsonRegex.exec(markdown);
    if (match) {
        return (match[1] || match[2] || match[3]).trim();
    }
    return "";
};
//# sourceMappingURL=extractJsonText.js.map