import { textNodesOfElement } from "./textNodesOfElement";


export function textOfElement(element: HTMLElement): string {
  return textNodesOfElement(element)
    .map((cn) => cn.textContent)
    .join();
}
