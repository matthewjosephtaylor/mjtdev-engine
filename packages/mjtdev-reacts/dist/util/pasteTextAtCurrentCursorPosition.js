export const pasteTextAtCurrentCursorPosition = (text) => {
    const range = document?.getSelection()?.getRangeAt(0);
    if (!range) {
        return;
    }
    range.deleteContents();
    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.selectNodeContents(textNode);
    range.collapse(false);
    const selection = window.getSelection();
    if (!selection) {
        return;
    }
    selection.removeAllRanges();
    selection.addRange(range);
};
//# sourceMappingURL=pasteTextAtCurrentCursorPosition.js.map