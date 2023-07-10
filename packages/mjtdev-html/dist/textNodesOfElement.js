export function textNodesOfElement(element) {
    const result = [];
    element.childNodes.forEach((cn) => {
        if (cn.nodeType === 3) {
            result.push(cn);
        }
    });
    return result;
}
//# sourceMappingURL=textNodesOfElement.js.map