export const isOpenAiTextResponse = (maybe) => {
    const straw = maybe;
    return typeof straw === "object" && Array.isArray(straw.choices);
};
//# sourceMappingURL=OpenAiTextResponse.js.map