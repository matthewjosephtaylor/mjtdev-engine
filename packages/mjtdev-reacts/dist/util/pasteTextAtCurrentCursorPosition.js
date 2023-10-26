export const pasteTextAtCurrentCursorPosition = (text) => {
    const range = document.getSelection().getRangeAt(0);
    range.deleteContents();
    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.selectNodeContents(textNode);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
};
//# sourceMappingURL=pasteTextAtCurrentCursorPosition.js.map