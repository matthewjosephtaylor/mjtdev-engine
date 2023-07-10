
export function textNodesOfElement(element: HTMLElement): ChildNode[] {
  const result: ChildNode[] = [];
  element.childNodes.forEach((cn) => {
    if (cn.nodeType === 3) {
      result.push(cn);
    }
  });
  return result;
}
